import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d3L_M1GTh7atEUYFeeJuwOSc-Srigz7YYmbdcb8rEwE'
    }
});