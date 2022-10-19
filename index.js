const userInfo = require("./information");

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `je suis de ${userInfo.city} je m'appelle ${userInfo.name}`,
    e: "oO",
    T: "U ",
  })
);
