const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
/* const formData = require('express-form-data'); */
/* Router lib */
const router = require('./routes/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', 3001);
/* app.use(formData.parse()); */
/* NO BORRAR ES NECESARIO USAR ESTOS CORS PARA USAR EN API */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request = require(  res.setHeader()"Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(cors());
app.use(morgan());
app.use(router);
app.use(express.static("src/uploads"));

app.listen(app.get('port'), ()=>{
  console.log("En ejecución http://localhost:5000/")
})
