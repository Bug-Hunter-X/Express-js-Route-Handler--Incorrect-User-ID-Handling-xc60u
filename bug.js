const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

//Problem: Incorrect handling of non-numeric user IDs
//If a user requests `/users/abc`, the code attempts to use 'abc' as an index in the database resulting in an error. 
//The correct solution should validate user IDs before using them in database queries.