// Load in our Express framework
const express = require(`express`)
const bodyParser = require('body-parser');
// Create a new Express instance called "app"
const app = express()

app.use(express.json());
const fileUpload = require('express-fileupload')
app.use(fileUpload())

// configure twig

  app.set('views', __dirname + '/templates')
  app.set('view engine', 'twig')

 


// Load in our RESTful routers
const routers = require('./routers/index.js');
const { twig } = require('twig');

// Home page welcome middleware
app.get('/', async (req, res) => {
  res
    .status(200)
    .render(
      `views/Default/home.html.twig`,
      {
        name: "carl",
        favoriteFoods:["Pizza", "Fettuccine", "Pasta ALi Vodka"
        ],
        age: 29,
        favoriteBeers: [
          "Fatire", "Big Wave"
        ]
      }
       
    )
})



// Register our RESTful routers with our "app"
app.use(`/planets`,  routers.planet)
app.use(`/stars`,    routers.star)
app.use(`/galaxies`, routers.galaxy)

// Set our app to listen on port 3000
app.listen(3000)
