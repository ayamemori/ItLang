import axios from 'axios';

export const postCourses = async (user_array) => {
    try {
        let FormData = require('form-data')
        let data = new FormData()
        data.append('name', user_array[0])
        data.append('photo', user_array[1])
        data.append('desc', user_array[2])
        const response = await axios.post('http://127.0.0.1:8000/', data);
    } catch (e) {
        alert(e)
    }
}