import apiService from './ApiService';

class ProductDetailService{

    constructor(apiService){
        this.apiService = apiService;
        this.apiPath = 'product-detail';
    }

    async getList(){
        const res = await this.apiService.getRequest(this.apiPath);
        return res.data;
    }

    async create(params){
        const res = await this.apiService.postRequest(this.apiPath, params);
        return res.data;
    }

    async edit(params){
        const res = await this.apiService.putRequest(this.apiPath, params);
        if(res.status == 200){
            return {success: true};
        }else{
            return {success: false};
        }
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

const productDetailService = new ProductDetailService(apiService);

export default productDetailService;