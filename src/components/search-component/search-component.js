import React from 'react';
import './search-component.css';
import Data from '../../utility/extract-data.helper';
import ListComponent from '../list-component/list-component';
import swal from 'sweetalert';
import { Button} from 'react-bootstrap'

class Search extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            result: [],
            data: {},
            query : ''
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.eventHandler = this.eventHandler.bind(this);
  
    }

    async componentDidMount(){
       await Data.fetchData();
       this.setState({data: Data.getObjects()});
       console.log(this.state.data);
    }

     onClickHandler = () => {
        let query = this.state.query.toLowerCase();
         if(!this.state.data.has(query))  {
             swal(`No result found for ${query}. Try another word!!`);
         } else {
             let result = this.state.data.get(query);
             this.setState({result : result});
         }
       }
      
     eventHandler = (e) => {
        this.setState({query : e.target.value});
    }   

    render(){
        
        return(
            <div className= "container">
           
                <div className="App-header"> 
                    <h1>ACME Search</h1>
                </div>
                <div className="search-container">
                <label htmlFor="search-input">
                    <input onChange = {this.eventHandler}  
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                        this.onClickHandler()
                        }
                    }} type = "text" className = "search-input" placeholder="Type here" value={this.state.query}/>
                </label>
                <Button className="button" variant="primary"  onClick={() => this.onClickHandler()}>SEARCH</Button>
                </div>
           

            <div className = "list-view">
                <div className="list-items">
                    {this.state.result.map((info, index)=>{
                        return (
                            <div className="card">
                            <li key = {index}>
                                <ListComponent info = {info}/>
                            </li>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            </div>
        )
    }
}

export default Search;