let express = require('express')
let app = express()
let router = express.Router();
let cors = require('cors');
let bodyParser = require('body-parser');
app.use(cors());

app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let students = [{ 'id': 583512110, 'name':'Akarachai Pannoi', 'email': 'ballboo088@gmail.com' },
{ 'id': 5835512001 , 'name':'lord voldemort', 'email': 'voldemort@outlock.com' }
];

//router.route('/students').get( (req,res) => res.sed('Hello') )
router.route('/students')
    .get((req, res) => res.json(students))
    .post((req, res) => {
        let student = {}
        student.id = students[students.length - 1].id + 1
        student.name = req.body.name
        student.weight = req.body.weight
        students.push(student)
        res.json({ message: 'Bear created! ' })
    })

router.route('/students/:bear_id')
    .get((req, res) => {
        let id = req.params.bear_id
        let index = students.findIndex(student => (student.id === +id))
        res.json(students[index])                   // get a student
    })

    .put((req, res) => {                               // Update a student
        let id = req.params.bear_id
        let index = students.findIndex(student => (student.id === +id))
        students[index].name = req.body.name;
        students[index].weight = req.body.weight;
        res.json({ message: 'Bear updated!' + req.params.bear_id });
    })

    .delete((req, res) => {                   // Delete a student
        // delete     students[req.params.bear_id]
        let id = req.params.bear_id
        let index = students.findIndex(student => student.id === +id)
        students.splice(index, 1)
        res.json({ message: 'Bear deleted: ' + req.params.bear_id });
    })

app.get('/', (req, res) => { res.send('Hello world') })
app.listen(80, () => {
    console.log('server is runing 8080')
})