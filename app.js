const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    const numbers = data.filter(item => typeof item === 'number' || !isNaN(parseInt(item, 10)));
    const alphabets = data.filter(item => typeof item === 'string' && item.length === 1 && item.match(/[a-zA-Z]/));

    const highest_alphabet = alphabets.length > 0
      ? [alphabets.reduce((max, current) => (current > max ? current : max), 'A')]
      : [];

    const response = {
      is_success: true,
      user_id: 'Shreyansh_kumar_14032002',
      email: 'shreyansh.kumar2020@vitbhopal.ac.in',
      roll_number: '20BCE10804',
      numbers: numbers.map(String),
      alphabets: alphabets.map(String),
      highest_alphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: 'An error occurred',
      is_success: false,
    });
  }
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
