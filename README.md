# BFHL REST API

This project implements a REST API with a POST /bfhl endpoint as per the requirements. It is built using Node.js and Express, ready for deployment to Vercel, Railway, or Render.
live demo-https://bajaj-finserv-five-mu.vercel.app/bfhl
## Features
- Accepts an array via POST request
- Returns status, user_id, email, roll_number, even/odd numbers, alphabets (uppercase), special characters, sum of numbers (as string), and concatenated reversed alternating caps string
- Handles errors gracefully

## How to Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## How to Deploy
- Push this code to a public GitHub repository
- Connect your repo to Vercel/Railway/Render and deploy

## API Endpoint
- POST /bfhl

## Example Request
```
{
  "data": ["a","1","334","4","R", "$"]
}
```

## Example Response
```
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

Replace user details as needed.
