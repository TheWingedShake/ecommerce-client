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

    putRequest(path, params = {}){

    }

    deleteRequest(path, params = {}){

    }

}

const apiService = new ApiService('http://localhost:3000');

export default apiService;