import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import User from "./models/User.js"
const app = express()
const port = 3000

/*mongoose.connect(process.env.DATABASE_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("conectado a la db")
*/

app.use(express.json())
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log('Connected to MongoDB'))

  .catch(err => console.error('Could not connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req,res) => {
    res.send(`Got a POST request`);
  })

  app.put('/', (req,res) => {
   put.send('hello my name is: javier');

  } )
  app.delete('/', (req,res) => {
    res.send('hello');
  })
  app.get('/users/:userId', (req, res)  => {
    

    console.log(`im the user: ${req.params.userId}`)
    res.send(`im the user: ${req.params.userId}`)

  });

 app.get('/book/:bookId', (req, res) => {
  console.log(`im the book: ${req.params.bookId}`)
  res.send(`im the book: ${req.params.bookId}`)
 } )

 app.get('/search', (req,res) => {
  console.log(req.query);
  res.send(`im searching for ${req.query.name} and ${req.query.age}`);
})


app.post('/users', async  (req, res) => {
  const {email, name, age} = req.body;
  try{
    const user = await User.create({  email, name, age});
    res.status(200).json({message: 'User created successfully', data: user});
  }   catch (error) {
    res.status(500).json({message: 'Server error', error: error.message});
  }
})
  

app.use(express.json())

app.get('/user/:userID', (req, res)  => {
  console.log(req.params);
  res.send(`im the user: ${req.params.userID} and the number: ${req.query.number}`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


