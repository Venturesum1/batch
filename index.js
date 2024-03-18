const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => { 
  res.send("welcome soumysis");
});
app.get("/info", (req, res) => {
  console.log("data", req.query); 
  res.send("welcome bimal");
}); 
app.post("/info", (req, res) => {
  const userdata = req.body;
  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  userdata.forEach((element) => {
    if (parseInt(element) % 2 == 0) {
      even_numbers.push(element);
    } else if (parseInt(element) % 2 == 1) {
      odd_numbers.push(element);
    } else if (element >= "a" && element <= "z") {
      alphabets.push(element.toUppercase());
    }
  });
  return res.status(200).send({
    is_success: true,
    user_id: "john_doe17091999",
    email: "john@xyz.com",
    roll_no: "ABCD123",
    even: even,
    odd: odd,
    alpha: alpha,
  });
});

app.listen(3000, () => {
  console.log("server started port no 3000");
});
