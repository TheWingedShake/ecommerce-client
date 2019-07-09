import apiService from './ApiService';

class ProductService{

    constructor(apiService){
        this.apiService = apiService;
        this.apiPath = 'product';
    }

    async getList(){
        const res = await this.apiService.getRequest(this.apiPath);
        return res.data;
    }

    getOne(){

    }

    async create(params){
        const res = await this.apiService.postRequest(this.apiPath, params);
        return res.data;
    }

    edit(){

    }

}

const productService = new ProductService(apiService);

export default productService;