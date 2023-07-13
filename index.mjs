import axios from "axios";

/**
 * Tasks: 
 * - Find a solution to Log the request method and url before the request is executed
 * - Log the result and the status of the request after it is finished
 * - Find a way that axios library provides you and dont use Promise.then() 
 */
axios.get("https://swapi.dev/api/people/1");
