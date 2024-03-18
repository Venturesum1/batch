
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const generateResponse = (data) => {
    const response = {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "odd_numbers": data.filter(num => num % 2 !== 0 && !isNaN(num)),
        "even_numbers": data.filter(num => num % 2 === 0 && !isNaN(num)),
        "alphabets": data.filter(item => typeof item === 'string' && item.match(/^[A-Za-z]+$/)).map(item => item.toUpperCase())
    };

    return response;
};

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  console.log('Received data:', data); 
  const response = generateResponse(data);
  console.log('Response sent:', response); 
  res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
