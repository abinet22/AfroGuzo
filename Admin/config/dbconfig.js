// require os module
const os = require("os");

// invoke userInfo() method
const userInfo = os.userInfo();

// get uid property
// from the userInfo object
const username = userInfo.username;


if (username === 'ricksanchez') {
  
  module.exports = {
    HOST: "localhost",
    USER: "nahi",
    PASSWORD: "password",
    DB: "afroguzo",
  };

} else {
  
  module.exports = {
    HOST: "localhost",
    USER: "abi",
    PASSWORD: "password",
    DB: "afroguzo",
  };

}
