let firebase = require('firebase')
//let admin = require("firebase-admin");
let express = require('express')
let app = express()
let router = express.Router();
let cors = require('cors');
let bodyParser = require('body-parser');
let soap = require('soap')
let url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';

let config = require('./key.json')
let privatekey = require('./privatekey.json')
firebase.initializeApp(config);



// admin.initializeApp({
//   credential: admin.credential.cert(privatekey),
//   databaseURL: "https://miniproject242311.firebaseio.com"
// });

app.use(cors());

app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = [{ 'id': 5835512110, 'name':'Akarachai Pannoi', 'email': 'ballboo088@gmail.com' },
{ 'id': 5835512001 , 'name':'Lord Voldemort', 'email': 'voldemort@outlock.com' }
];


// router.route('/')
//     .get((req, res) => { res.send('Hello world') })

//router.route('/students').get( (req,res) => res.sed('Hello') )
router.route('/students')
    .get((req, res) => res.json(students))
    .post((req, res) => {
        let student = {}
        student.id = req.body.id
        student.name = req.body.name
        student.email = req.body.email
        students.push(student)
        res.json({ message: 'Student created! ' })
    })

router.route('/students/:id')
    .get((req, res) => {
        let id = req.params.id
        let index = students.findIndex(student => (student.id === +id))
        res.json(students[index])                   // get a student
    })

    .put((req, res) => {                               // Update a student
        let id = req.params.id
        let index = students.findIndex(student => (student.id === +id))
        students[index].name = req.body.name;
        students[index].email = req.body.email;
        res.json({ message: 'Student updated!' + req.params.id });
    })

    .delete((req, res) => {                   // Delete a student
        // delete     students[req.params.id]
        let id = req.params.id
        let index = students.findIndex(student => student.id === +id)
        students.splice(index, 1)
        res.json({ message: 'Student deleted: ' + req.params.id });
    })


router.route('/login')
   .get((req, res) => {
       res.status(200).send("please login with .post")
   })
   .post((req, res) => {
       soap.createClient(url,{ session: false }, (err, client) => {
           if (err) {
              let login ={}
              login.code = 401
              login.massage = 'Unauthorized'
              res.status(401).json(login)
              console.error(err);
           } else {
               let user = {}
               user.username = req.body.username
               user.password = req.body.password
               client.GetStaffDetails(user,  (err, response)=> {
                   // client.GetStudentDetails(args, function(err, response) {
                   if (err) console.error(err);
                   else {
                       //console.log(response);
                       //console.log(Object.keys(response).length);
                       if (response.GetStaffDetailsResult.string[0]) {
                        //req.session.access_token = '123'
                        //req.session.expires = 60000
                        //console.log(response.GetStaffDetailsResult.string)
                        let login ={}
                        login.code = 200
                        login.massage = 'OK!'
                        login.PSU_ID = response.GetStaffDetailsResult.string[0]
                        login.P_ID = response.GetStaffDetailsResult.string[3]
                        login.Name = response.GetStaffDetailsResult.string[1]+' '+response.GetStaffDetailsResult.string[2]
                        login.Year = response.GetStaffDetailsResult.string[4]
                        res.status(200).json(login)
                        //res.redirect("http://localhost:3001")
                     } else {
                        let login ={}
                        login.code = 401
                        login.massage = 'Unauthorized'
                        res.status(401).json(login)
                     }
                   }
               });
           }
       });
   })

router.route('/getStudents')
   .get((req,res,next) => {
       let Data = {student:[]}
       Data.code = 200
       Data.message = "OK"
       let data = firebase.database().ref("/Students/");
        data.on("value", 
            (snapshot) => {
                Data.student = snapshot.val()
                res.status(200).json(Data)

                data.off("value");
            }, 
            (errorObject) => {
                console.log("The read failed: " + errorObject.code);
                res.send("The read failed: " + errorObject.code);
            });   
   })
   .post((req,res,next) => {
        let obj = req.body
        let Data = {student:[]}
        
        let data = firebase.database().ref("/Students/");
        data.on("value", 
            (snapshot) => {

                Data.student = snapshot.val()
                let id = Data.student.length                 
                data.child(id).set({
                    email: obj.email,
                    name: obj.name,
                    psuid: obj.psuid,
                    tel: obj.tel,
                    update: Date(Date.now())
                })
                Data.code = 200
                Data.message = "insert complate"
                res.status(200).json(Data) 
                data.off("value");
                
            }, 
            (errorObject) => {
                console.log("The read failed: " + errorObject.code);
                res.send("The read failed: " + errorObject.code);
            });   
    })



app.listen(80, () => { console.log('Server is runing 80')})