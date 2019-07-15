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
            isOpenForm: false
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

    handleCancelForm(){
        this.setState({
            isOpenForm: false
        });
    }

    handleSubmitForm(e){
        this.concreteProductService.create(e).then(data => {
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

    getForm(){
        return(<ConcreteProductForm handleCancel={() => this.handleCancelForm()} handleSubmit={(e) => this.handleSubmitForm(e)} products={this.state.products}></ConcreteProductForm>);
    }

    getOverview(){
        return (
            <React.Fragment>
                <div className="button-list pb-4">
                    <button className="btn btn-info" onClick={() => this.handleCreateClick()}>Create new product</button>
                </div>
                {this.state.concreteProducts.map(item => {
                    return <ConcreteProductCard key={item.id} product={item}></ConcreteProductCard>
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