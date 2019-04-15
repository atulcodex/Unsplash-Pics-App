import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            "Client-ID 5f2c82c05766a0b7b3231df93895481ee5fd955f8c503005be307bde495b89e3"
    }
});