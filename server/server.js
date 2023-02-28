const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const {User}=require("./models");


const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  console.log(username);
  console.log(email);
  console.log(password);

    // check if username is not already taken
    User.findOne({username:username})
    .then((userData)=>{
      if (userData){
        res.json({status:false,message:"Username is already taken"});
      } else{
        // if not, add user to the database
        User.create({
          username:username,
          email:email,
          password:password
        })
        .then((userData)=>{
          res.json({status:true, message:"Sign up success", username:userData.username});
        })
        .catch((err)=>{
          res.status(500).json(err)
        })
      }
    })
    .catch((err)=>{
      res.status(500).json(err)
    })

    

  res.json({ username: username, email: email, password: password });
});



app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  console.log(password);

    // check if username exists
    User.findOne({username:username})
    .then((userData)=>{
      if (userData){
       userData.isCorrectPassword(password)
       .then((loginRes)=>{
        if (loginRes){
          res.send({status:true, message:"Log in  successful", username:userData.username})
        } else{
          res.send({status:false, message:"Incorrect Username/Password"}) 
        }
       })
       .catch((err)=>{
        res.status(500).json(err)
       });
      } else {
        res.send({status:false, message:"Incorrect Username/Password"})
      }
    })
    .catch((err)=>{
      res.status(500).json(err)
    });

    

  res.json({ username: username, email: email, password: password });
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
