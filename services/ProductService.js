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

    async edit(params){
        const res = await this.apiService.putRequest(this.apiPath, params);
        return res.data;
    }

    async delete(params){
        const res = await this.apiService.deleteRequest(this.apiPath, params);
        if(res.status == 200){
            return {success: true};
        }else{
            return {success: false};
        }
    }

}

const productService = new ProductService(apiService);

export default productService;