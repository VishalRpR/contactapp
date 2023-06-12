const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

/*
const logger = (req,res,next)=>{
  console.log('logging....')
  next();

}

app.use(logger);
*/

//View engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));


//Set Static Path
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
/*
const people =[
  {
  name:'vishal',
  age:'2xc1'
  },
  {
    name:'viscx',
    age:'21'
    },
    {
      name:'vishxx',
      age:'2cx1'
      }

]
*///res.json(people); in app.get


const users = [
  {
    id:1,
    first_name:'vishal',
    last_name:'slsl',
    email:'vsih@sodods'
  },
  {
    id:2,
    first_name:'vish',
    last_name:'sl',
    email:'ih@sodods'
  },
  {
    id:3,
    first_name:'al',
    last_name:'ssl',
    email:'vh@sods'
  }
]

app.get('/',(req,res)=>{
    res.render('index',{
      title:'customer',
      users:users
    });
});

app.post('/users/add',(req,res)=>{
  const newUser={
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email
  }
  console.log(newUser)
});

app.listen(3000,()=>{
  console.log('server started on port 3000....')
})