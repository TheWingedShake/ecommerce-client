import React from 'react';
import ProductCard from './product-card';
import productService from '../services/ProductService';
import ProductForm from './product-form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ProductPage extends React.Component {

    constructor(props){
        super();
        this.productService = productService;
        this.state = {
            products: [],
            isOpenProductForm: false
        };
        this.refreshProducts();
    }

    refreshProducts(){
        this.productService.getList().then(data => {
            this.setState({products: data});
        });
    }

    getProducts(){
        return this.state.products;
    }

    handleCreateProductClick(){
        this.setState({isOpenProductForm: true});
    }

    getProductForm(){
        return(
            <React.Fragment>
                <ProductForm handleForm={(e) => {this.handleForm(e)}} />
            </React.Fragment>
        );
    }

    handleForm(e){
        if(e.isSubmit){
            productService.create(e.data).then(
                data => {
                    this.setState({isOpenProductForm: false});
                    if(data.id){
                        const products = this.state.products.slice();
                        products.push(data);
                        this.setState({
                            products: products
                        });
                    }
                }
            );
        }else{
            this.setState({isOpenProductForm: false});
        }
    }

    getProductsOverview(){
        return(
            <React.Fragment>
                <div className="button-list pb-4">
                    <button className="btn btn-info" onClick={() => this.handleCreateProductClick()}>Create product</button>
                </div>
                {this.getProducts().map((value, index) => {
                    return <ProductCard key={value.id} name={value.name} description={value.description} />
                })}
            </React.Fragment>
        )
    }

    render(){
        let view;
        if(this.state.isOpenProductForm){
            view = this.getProductForm();
        }else{
            view = this.getProductsOverview();
        }
        return(
            <div>
                {view}
            </div>
        );
    }

}

export default ProductPage;