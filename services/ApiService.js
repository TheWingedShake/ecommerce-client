import axios from 'axios';

class ApiService{

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    async getRequest(path, params = {}){
        const res = await axios.get(`${this.apiUrl}/${path}`, {
            params: params
        })

        return res;
    }

    async postRequest(path, params = {}){
        const res = await axios.post(`${this.apiUrl}/${path}`, params);

        return res
    }

    async putRequest(path, params = {}){
        const res = await axios.put(`${this.apiUrl}/${path}`, params);

        return res;
    }

    async deleteRequest(path = '', params = {}){
        const res = await axios.delete(`${this.apiUrl}/${path}`, {data: params});

        return res;
    }

}

const apiService = new ApiService('http://localhost:3000');

export default apiService;