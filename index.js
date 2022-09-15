const  express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>
 res.send('Hello World!'))

app.get('/api/vegetables', (req, res) => 

res.send([[
    { 
      "results"
      : ["spinach",
         "beetroot", 
         "potato"] 
    },
    {
      "leafyvegetables":
       ["broccoli", 
        "cabbage",
         "ginger"] 
    }
   
      ]
  ]))



app.listen(port, () => console.log(`Example app listening on port ${port}`))


const fs = require("fs");

//  Creating Read users.json file ind
fs.readFile("users.json", function(err, data) {
	
	// Check for errors------index.
	if (err) throw err;

	// Converting to JSON------
	const users = JSON.parse(data);
	
	console.log(users); 
});
