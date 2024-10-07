const fs = require('fs')
fs.readFile('user.json', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading user.json');
    }
    const users = JSON.parse(data);
    console.log(users.username)
}); 