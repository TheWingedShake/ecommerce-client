import React from 'react';
import ProductCard from './product-card';
import productService from '../../services/ProductService';
import ProductForm from './product-form';
import ProductView from './product-view';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ProductPage extends React.Component {

    constructor(props){
        super();
        this.productService = productService;
        this.state = {
            products: [],
            isOpenProductForm: false,
            selectedProductId: -1
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
        let product = this.state.products.find(item => item.id == this.state.selectedProductId);
        if(!product){
            product = {
                id: '',
                name: '',
                description: ''
            };
        }
        return(
            <React.Fragment>
                <ProductForm product={product} handleForm={(e) => {this.handleForm(e)}} />
            </React.Fragment>
        );
    }

    handleForm(e){
        if(e.isSubmit){
            if(e.data.id){
                productService.edit(e.data).then(
                    data => {
                        const products = this.state.products.slice();
                        this.setState({
                            isOpenProductForm: false,
                            selectedProductId: -1,
                            products: products.map(item => {
                                if(item.id == e.data.id){
                                    return e.data;
                                }
                                return item;
                            })
                        });
                    }
                );
            }else{
                productService.create({name: e.data.name, description: e.data.description}).then(
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
            }            
        }else{
            this.setState({isOpenProductForm: false});
        }
    }

    handleDeleteProduct(e){
        if(e.id){
            this.productService.delete({id: e.id}).then(data => {
                if(data.success){
                    console.log('Product deleted');
                    const products = this.state.products.slice();
                    this.setState({
                        products: products.filter(item => item.id != e.id)
                    });
                }else{
                    console.log('Error with product deleting');
                }
            });
        }
    }

    handleEditProduct(e){
        if(e.id){
            this.setState({
                selectedProductId: e.id,
                isOpenProductForm: true
            });
        }
    }

    getProductsOverview(){
        return(
            <React.Fragment>
                <div className="button-list pb-4">
                    <button className="btn btn-info" onClick={() => this.handleCreateProductClick()}>Create product</button>
                </div>
                {this.getProducts().map((value, index) => {
                    return <ProductCard key={value.id} id={value.id} name={value.name} description={value.description} handleEdit={(e) => this.handleEditProduct(e)} handleDelete={(e) => {this.handleDeleteProduct(e)}} />
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