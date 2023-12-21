
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const secretKey="ddfnjkafjksdfjkbdfjbasjfdb";
const validPassword=async function (Entered_password,user){
  console.log(user,"HHHHHHHHHHHH")
  const hash=user.password;
  const username=user.Username;
  try {
    const res = await bcrypt.compare(Entered_password, hash);
    

    console.log(res); // should log true or false
    if (res) {
      // Assuming you have access to 'user' variable
      const token = jwt.sign({ Username: username}, secretKey);
      return token;
    }
  } catch (err) {
    console.error(err.message);
  }
}
module.exports=validPassword;