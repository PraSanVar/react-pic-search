import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID 54a4ecc0c27efe8ab15663f34afece59ff353a97639778d70d85121e28472f34'
    }
});