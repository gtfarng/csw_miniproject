import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Student = () => {
    const [students, setStudents] = useState({});
    const [id , setId] = useState(0) ;
    const [name, setName] = useState('') ; 
    const [email, setEmail] = useState('') ;

    useEffect(() => {

    }, []);

    const getStudents = async () => {
        const result = await axios.get(`http://localhost/api/students`) ;
        console.log(result.data)
        setStudents(result.data)
    }
    const getStudent = async () => {
        const result = await axios.get(`http://localhost/api/students/${id}`)
        console.log(result.data)
        setId(result.data.id)
        setName(result.data.name)
        setEmail(result.data.email)
    }
    const updateStudent = async (id) => {
        const result = await axios.put(`http://localhost/api/students/${id}`, {
            id,
            name,
            email
        }) ;
    }
    const addStudent = async () => {
        const result = await axios.post(`http://localhost/api/students`, {
            id,
            name,
            email
        }) ;
        console.log(result.data)
        setId(result.data.id)
        setName(result.data.name)
        setEmail(result.data.email)
        getStudents()
    }
    const deleteStudent = async () => {
        const result = await axios.delete(`http://localhost/api/students/${id}`) ;
        getStudents()
    }

    const printStudent = () => {
        if (students && students.length )
            return students.map((student, index) => {
                <li key={index} >
                    {student.id} : {student.name} : {student.email}
                    <button onClick={() => getStudent(student.id)} >Get</button>
                    <button onClick={() => deleteStudent(student.id)} >Del</button>
                    <button onClick={() => updateStudent(student.id)} > Update</button>
                </li>
            })
        else {
            return (<h2> Nothing Student</h2>)
        }
    }

    return(
        <div>
            <h2> Get Student</h2>
            <ol>
                {printStudent()}
            </ol>
            Student: {id}, {name}, {email}
            ID = <input type="text" name="id" onChange={(e) => setId(e.target.value)} /> <br/>
            Name = <input type="text" name="name" onChange={(e) => setName(e.target.value)} /> <br/>
            Email = <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} /> <br/>
            <button onClick={addStudent}> Add </button>
            
        </div>
    )
    
}
export default Student ; 