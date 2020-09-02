## How to run the project:

- Please make you have installed node and npm package manager.
-  run the following commands inside the project directory: 
        1). npm install
        2). npm start
- After the compilation is completed successful, please open your favorite browser and type 
"http://localhost:3000" which should open the ACME Search application.

## Advanced feature implemented: 

- Dynamically update results as new data becomes available.

Along with this feature, I wanted to try to get the data whenever there's a new JSON file inside the data folder. I tried using the fs module and used readdir function to get the name of the files but the react doesn't allow usage of the fs module as it might expose the file system of the application and might create risk for the sensitive data. Researched the alternatives but the only way I could have got this running was by making a backend API and make a GET request on the client-side to fetch the data but it would have unnecessarily complicated things. By working on this project, I got to learn more about the security features of React.

## Approach to the product

- My main motto while developing the application was to keep it simple. As it was a front-end focused project I choose to keep it frontend focused only. 
- As a result, I made one utility function which would fetch the JSON data from the files using Axios and the heart of the project was to use a data structure which would allow me to store a key (i.e. matching term) and value : (i.e. the data related to that particular matching term). I used the hash map to store the formatted data. 
- After using hashmap to format my data, I returned the object with few attributes like fetchData(which would get all the data from the files and format it based on the matching terms), getObject (data related a single matching term), and getObjects (an object of all the matching terms).
- On the client-side, whenever a user searches for something I would look it up inside my custom object(created inside the utility function) and fetch that particular term and display it on the browser. If the matching term is not found then I simply send an alert.
- For the design of the application, I wanted to create a card-like layout that systematically organizes the result.
- I have added a field 'category' inside the JSON files which would allow me to show the category name to the result in each card.