require('tls').DEFAULT_MIN_VERSION = 'TLSv1'   // since TLSv1.3 default disable v1.0 
const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const router = express.Router()


let app = express()
let cors = require('cors');

app.use(cors());




app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);



// const out = `
// <html>
// <body>
//   <h2>PSU Passport Authentication (SOAP) </h2>
//  <form action="/" method="post">
//  Username: <input type="text" name="username" /> <br>
//  Password: <input type="password" name="password" /> <br>
//  <input type="submit" value="Submit">
// </form>
// </body>
// </html> 
// `

router.route('/login')
   .get((req, res) => {
       //console.log(req)
   })
   .post((req, res) => {
       soap.createClient(url, (err, client) => {
           if (err) console.error(err);
           else {
               let user = {}
               user.username = req.body.username
               user.password = req.body.password

               client.GetStaffDetails(user, function (err, response) {
                   // client.GetStudentDetails(args, function(err, response) {
                   if (err) console.error(err);
                   else {
                       console.log(response);
                       if (response.GetStaffDetailsResult.string[0]) {
                        req.session.access_token = '123'
                        req.session.expires = 60000
                        res.send(response)
                        res.redirect("http://localhost:3001")
                     } else {
                        res.send("login false")
                     }
                       
                   }
               });
           }
       });
   })
app.get('/', (req, res) => { res.send("please login") }) 
app.listen(8080, () => console.log('Server is ready!'))