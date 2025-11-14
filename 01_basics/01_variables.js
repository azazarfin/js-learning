const accountId = 144553;
let accountEmail = "azaz@google.com"
var accountPassword ="12345"
accountCity = "Rajshahi"
let accountState;
// accountId = 2 //not allowed

accountEmail= "azaz@m.com"
accountPassword="12213343"
accountCity= "Dhaka"

console.log(accountId);

/*
prefer not to use var
because of  issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);