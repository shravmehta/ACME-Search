import axios from 'axios';
const JSON_FILES = [
    './data/calendar.json',
    './data/contacts.json',
    './data/dropbox.json',
    './data/slack.json',
    './data/tweet.json'
];

function extractData() {
    let hashMap = new Map();

    return {
        fetchData : async () => await _helperExtractData(hashMap),
        getObject : (key) => {return hashMap.get(key)},
        getObjects : () => {
            let objMap = new Map(hashMap);
            return objMap;
        }
    }
}

async function _helperExtractData(hashMap){
    for(let file of JSON_FILES){
        let req = await axios.get(`${file}`);
        let res = req.data[Object.keys(req.data)[0]]; 
     
        for(let data of res){
            const matchingTerms = data.matching_terms;

            for(let word of matchingTerms){
                if(!hashMap.has(word)){
                    const arr = [];
                    hashMap.set(word, arr);
                }
                hashMap.get(word).push(data);
            }
        }
    }
}

export default extractData();