const express = require('express');
const app = express();
app.use(express.json());

// Replace with your details
const FULL_NAME = 'john_doe'; // lowercase
const DOB = '17091999'; // ddmmyyyy
const EMAIL = 'john@xyz.com';
const ROLL_NUMBER = 'ABCD123';

function isNumber(str) {
  return /^\d+$/.test(str);
}
function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function isSpecial(str) {
  return !isNumber(str) && !isAlphabet(str);
}
function toAlternatingCaps(str) {
  let res = '';
  let upper = true;
  for (let c of str) {
    res += upper ? c.toUpperCase() : c.toLowerCase();
    upper = !upper;
  }
  return res;
}

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }
    let even = [], odd = [], alpha = [], special = [], sum = 0, concatAlpha = '';
    for (let item of data) {
      if (isNumber(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) even.push(item);
        else odd.push(item);
        sum += num;
      } else if (isAlphabet(item)) {
        alpha.push(item.toUpperCase());
        concatAlpha += item;
      } else if (isSpecial(item)) {
        special.push(item);
      }
    }
    // For concat string: reverse, alternating caps
    let concatString = toAlternatingCaps(concatAlpha.split('').reverse().join(''));
    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alpha,
      special_characters: special,
      sum: sum.toString(),
      concat_string: concatString
    });
  } catch (e) {
    res.status(500).json({ is_success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/ to use the BFHL API Tester UI.`);
});
