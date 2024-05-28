/*This assignment showcases some practical uses of asynchronous JavaScript techniques, including Promises and the async/await syntax. Asynchronous code is extremely common in web application development, and its uses are varied. This assignment highlights one of the most common uses.
Objectives
Use async/await syntax to gather data from asynchronous sources.
Use Promises to handle asynchronous code. */

// Importing database functions. DO NOT MODIFY THIS LINE.
// the central database identifies which database the users are stored within
import { central, db1, db2, db3, vault } from "./databases.mjs";

function getUserData(id) { //simple dictionary object
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

/***********SCENARIO #1: 
You are a developer in a very large corporation that splits its data across multiple databases. 
Your job is to assemble this information using a single function that takes an id parameter and returns a Promise that 
resolves to an object containing specific data. The object must contain the following information, 
which will be gathered from the databases: ****************/


// create a function that takes an id parameter 
// and returns a Promise that resolves to an object containing specific data. 
function resolveObjectData(resolve) {
  const data = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
  resolve(data);
}

//the central database returns a string that identifies which database to access the user's info
const returnedValue = await central(id);
















//access the central database
const returnedValue = await central (id);

returnedValue.then((data) => {
  console.log(`${data} has been accessed`); //return a string message if the data passes the returnedValue function
});