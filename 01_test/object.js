
 const mySym=Symbol("key1")
const jsUser = {
    name: "Priyansh",
    age: 21,
    [mySym] : "myoriginalkey",
    location: "Lucknow",
    isLoggedIn: false,
    lastLoggedindays: ["tuesday", "wednesday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof mySym);

jsUser.name="rajat";
console.log(jsUser.name);
Object.freeze(jsUser);
jsUser.name="komal";
console.log(jsUser.name);
 

// jsUser.greeting=function(){
//     console.log(`name of jsuser is ${this.name}`)
// }
// jsUser.greeting2=function(){
//     console.log(`name of jsuser`);
// }
// console.log(jsUser.greeting());
// // console.log(jsUser.greeting);
// console.log(jsUser.greeting2());

//declaration of object in js

 const instaUser = new Object()

 const XUser={} // object