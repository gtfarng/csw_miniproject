let express = require('express')
let app = express()
let router = express.Router();
let cors = require('cors');
let bodyParser = require('body-parser');
app.use(cors());

app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = [{ 'id': 5835512110, 'name':'Akarachai Pannoi', 'email': 'ballboo088@gmail.com' },
{ 'id': 5835512001 , 'name':'Lord Voldemort', 'email': 'voldemort@outlock.com' }
];

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

app.get('/', (req, res) => { res.send('Hello world') })
app.listen(80, () => {
    console.log('server is runing 8080')
})