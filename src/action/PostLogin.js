var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();

var config = {
    method: 'post',
    url: 'http://127.0.0.1:8000/acc/login',
    headers: {
        ...data.getHeaders()
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });