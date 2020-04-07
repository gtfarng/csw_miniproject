import axios from 'axios'

export const delStudent = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/api/students/${id}`)
        .then((res) => {
            dispatch({
                type: 'DEL_STUDENT',
                playload : res.data.id
            });
        });
    }
}
export const addStudent = (data) => {
    return (dispatch) => {
        axios.post(`http://localhost:3001/api/students/`, data)
        .then((res) => {
            dispatch({
                type : 'ADD_STUDENT',
                playload: res.data
            });
        });
    }
}
export const editStudent = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:3001/api/students/${data.id}`, data)
        .then((res) => {
            dispatch({
                type : 'EDIT_STUDENT',
                playload: res.data
            });
        });
    }
}
export const getStudent = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/students/${id}`, data)
        .then(() => {
            dispatch({
                type : 'GET_STUDENT',
                playload: id
            });
        });
    }
}

export const getStudentList = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/api/students/`)
        .then((res) => {
            dispatch({
                type : 'GET_STUDENT_LISTS',
                playload: res.data
            });
        });
    }
}