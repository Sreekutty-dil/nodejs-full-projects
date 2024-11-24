const vm = require('vm');

let user = {
    name: "Dil",
    age: 25,
    city: "Bangalore"
}
console.log(`before =`, user)

vm.createContext(user) // virtual object
vm.runInContext(`name="Sree";age+=5;city="mumbai"`, user) 

console.log(`after =`, user) // changes in user object will reflect in global object as well