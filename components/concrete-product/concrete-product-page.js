import React from 'react';
import productService from '../../services/ProductService';
import productDetailService from '../../services/ProductDetailService';
import concreteProductService from '../../services/ConcreteProductService';
import ConcreteProductCard from './concrete-product-card';
import ConcreteProductForm from './concrete-product-form';

class ConctreteProductPage extends React.Component{

    constructor(props){
        super();
        this.state = {
            products: [],
            productDetails: [],
            concreteProducts: [],
            isOpenForm: false,
            selectedId: -1
        }
        this.productService = productService;
        this.productDetailService = productDetailService;
        this.concreteProductService = concreteProductService;
    }

    componentDidMount(){
        this.productService.getList().then(data => {
            this.setState({
                products: data
            })
        });
        this.productDetailService.getList().then(data => {
            this.setState({
                productDetails: data
            });
        });
        this.concreteProductService.getList().then(data => {
            this.setState({
                concreteProducts: data
            });
        });
    }

    handleCreateClick(){
        this.setState({
            isOpenForm: true
        });
    }

    handleEdit(e){
        this.setState({
            isOpenForm: true,
            selectedId: e.id
        });
    }

    handleCancelForm(){
        this.setState({
            isOpenForm: false,
            selectedId: -1
        });
    }

    handleSubmitForm(e){
        if(e.id){
            this.concreteProductService.edit({id:e.id ,name: e.name, description: e.description, product: {id: parseInt(e.productId, 10)}, productDetails: e.productDetails}).then(data => {
                this.setState({isOpenForm: false, selectedId: -1});
                if(data.id){
                    const concreteProducts = this.state.concreteProducts.slice();
                    this.setState({
                        concreteProducts: concreteProducts.map(item => {
                            if(item.id == data.id){
                                return data;
                            }
                            return item;
                        })
                    });
                }
            });
        }else{
            this.concreteProductService.create({name: e.name, description: e.description, product: {id: e.productId}, productDetails: e.productDetails}).then(data => {
                this.setState({isOpenForm: false});
                if(data.id){
                    const concreteProducts = this.state.concreteProducts.slice();
                    concreteProducts.push(data);
                    this.setState({
                        concreteProducts: concreteProducts
                    });
                }
            });
        }
    }

    handleDelete(e){
        this.concreteProductService.delete(e).then(data => {
            if(data.success){
                console.log('Product deleted successfully');
                const concreteProducts = this.state.concreteProducts.slice();
                this.setState({
                    concreteProducts: concreteProducts.filter(item => item.id != e.id)
                });
            }else{
                console.log('Error with product deleting');
            }
        })
    }

    getForm(){
        let concreteProduct = this.state.concreteProducts.find(item => item.id == this.state.selectedId);
        if(!concreteProduct){
            concreteProduct = {
                id: '',
                name: '',
                description: '',
                product: {id: ''},
                productDetails: []
            }
        }
        return(<ConcreteProductForm concreteProduct={concreteProduct} handleCancel={() => this.handleCancelForm()} handleSubmit={(e) => this.handleSubmitForm(e)} products={this.state.products} productDetails={this.state.productDetails}></ConcreteProductForm>);
    }

    getOverview(){
        return (
            <React.Fragment>
                <div className="button-list pb-4">
                    <button className="btn btn-info" onClick={() => this.handleCreateClick()}>Create new product</button>
                </div>
                {this.state.concreteProducts.map(item => {
                    return <ConcreteProductCard handleDelete={(e) => this.handleDelete(e)} handleEdit={(e) => this.handleEdit(e)} key={item.id} product={item}></ConcreteProductCard>
                })}
            </React.Fragment>
        )
    }

    render(){
        let view;
        if(this.state.isOpenForm){
            view = this.getForm();
        }else{
            view = this.getOverview();
        }
        return(
            <div>
                {view}
            </div>
        );
    }

}

export default ConctreteProductPage;