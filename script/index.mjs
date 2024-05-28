/*This assignment showcases some practical uses of asynchronous JavaScript techniques, including Promises and the async/await syntax. Asynchronous code is extremely common in web application development, and its uses are varied. This assignment highlights one of the most common uses.
Objectives
Use async/await syntax to gather data from asynchronous sources.
Use Promises to handle asynchronous code. */

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}
