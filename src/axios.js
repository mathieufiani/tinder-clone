import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-clone-backend3456.herokuapp.com/"
});

export default instance;