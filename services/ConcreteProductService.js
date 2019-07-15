import apiService from './ApiService';

class ConcreteProductService {

    constructor(apiService){
        this.apiService = apiService;
        this.apiPath = 'concrete-product';
    }

    async getList(){
        const res = await this.apiService.getRequest(this.apiPath);
        return res.data;
    }

    async create(params){
        const res = await this.apiService.postRequest(this.apiPath, params);
        return res.data;
    }

}

const concreteProductService = new ConcreteProductService(apiService);

export default concreteProductService;