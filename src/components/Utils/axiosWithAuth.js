import axios from 'axios';

// * CUSTOM AXIOS INSTANCE
const axiosWithAuth = () => {

    const token = localStorage.getItem('token');

    return !!token === true ? axios.create({
        baseURL: 'https://bw-co-make.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
    }) : axios.create({
        baseURL: 'https://bw-co-make.herokuapp.com/',
        headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export default axiosWithAuth