/*This assignment showcases some practical uses of asynchronous JavaScript techniques, including Promises and the async/await syntax. Asynchronous code is extremely common in web application development, and its uses are varied. This assignment highlights one of the most common uses.
Objectives
Use async/await syntax to gather data from asynchronous sources.
Use Promises to handle asynchronous code. */

// Importing database functions. DO NOT MODIFY THIS LINE.
// the central database identifies which database the users are stored within
import { central, db1, db2, db3, vault } from "./databases.mjs";

//simple dictionary object from the database script 
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

/***********SCENARIO #1: 
You are a developer in a very large corporation that splits its data across multiple databases. 
Your job is to assemble this information using a single function that takes an id parameter and returns a Promise that 
resolves to an object containing specific data. The object must contain the following information, 
which will be gathered from the databases: ****************/


// create a function that takes an id parameter 
// and returns a Promise that resolves to an object containing specific data. 
async function getUserData(id) {
  return new Promise(async (resolve, reject) => {
    try {
      // Get the database identifier from the central database
      const dbName = await central(id);

      if (!dbs[dbName]) {
        throw new Error(`Database ${dbName} is not available`);
      }

// Fetch data from the identified database and vault in parallel
  const [basicInfo, personalInfo] = await Promise.all([
    dbs[dbName](id),
    vault(id),
  ]);

  //the central database returns a string that identifies which database to access the user's info
  const data = {
    id: id,
    name: personalInfo.name,
    username: basicInfo.username,
    email: personalInfo.email,
    address: {
      street: personalInfo.address.street,
      suite: personalInfo.address.suite,
      city: personalInfo.address.city,
      zipcode: personalInfo.address.zipcode,
      geo: {
        lat: personalInfo.address.geo.lat,
        lng: personalInfo.address.geo.lng
      }
    },
    phone: personalInfo.phone,
    website: basicInfo.website,
    company: {
      name: basicInfo.company.name,
      catchPhrase: basicInfo.company.catchPhrase,
      bs: basicInfo.company.bs
    }
  };

    resolve(data);
    } catch (error) {
      reject(`Failed to fetch user data: ${error.message}`);
    }
  });
}

// Example usage
getUserData(1).then(data => {
  console.log(data);
}).catch(error => {
  console.error('Failed to get user data:', error);
});


//join the vaults and database in another object

//grab the other ids from the database