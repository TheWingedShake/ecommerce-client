import React from 'react';
import productDetailService from '../../services/ProductDetailService';
import ProductDetailCard from './product-detail-card';
import ProductDetailFrom from './product-detail-form';

class ProductDetailPage extends React.Component{

    constructor(props){
        super();
        this.productDetailService = productDetailService;
        this.state = {
            productDetails: [],
            isOpenForm: false,
            selectedId: -1
        };
    }

    componentDidMount(){
        this.productDetailService.getList().then(data => {
            this.setState({
                productDetails: data
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

    handleDelete(e){
        if(e.id){
            this.productDetailService.delete({id: e.id}).then(data => {
                if(data.success){
                    console.log('Product detail deleted successfully');
                    const productDetails = this.state.productDetails.slice();
                    this.setState({
                        productDetails: productDetails.filter(item => item.id != e.id)
                    });
                }else{
                    console.log('Error with product detail deleting');
                }
            });
        }
    }

    handleSubmitForm(e){
        if(e.data.id){
            this.productDetailService.edit(e.data).then(data => {
                this.setState({isOpenForm: false, selectedId: -1});
                if(data.success){
                    const productDetails = this.state.productDetails.slice();
                    this.setState({
                        productDetails: productDetails.map(item => {
                            if(item.id == e.data.id){
                                return e.data;
                            }
                            return item;
                        })
                    });
                }
            });
        }else{
            this.productDetailService.create({name: e.data.name, description: e.data.description}).then(data => {
                this.setState({
                    isOpenForm: false
                });
                if(data.id){
                    const productDetails = this.state.productDetails.slice();
                    productDetails.push(data);
                    this.setState({
                        productDetails: productDetails
                    });
                }
            });
        }
    }

    handleCancelForm(){
        this.setState({
            isOpenForm: false,
            selectedId: -1
        });
    }

    getOverview(){
        return(
            <React.Fragment>
                <div className="button-list pb-4">
                    <button className="btn btn-info" onClick={() => this.handleCreateClick()}>Create product detail</button>
                </div>
                {this.state.productDetails.map((value, index) => {
                    return <ProductDetailCard key={value.id} detail={value} handleEdit={(e) => this.handleEdit(e)} handleDelete={(e) => this.handleDelete(e)}></ProductDetailCard>
                })}
            </React.Fragment>
        );
    }

    getForm(){
        let selectedDetail = this.state.productDetails.find(item => item.id == this.state.selectedId);
        if(!selectedDetail){
            selectedDetail = {
                id: '',
                name: '',
                description: ''
            };
        }
        return(
           <ProductDetailFrom detail={selectedDetail} handleCancel={() => this.handleCancelForm()} handleSubmit={(e) => this.handleSubmitForm(e)}></ProductDetailFrom> 
        );
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
        )
    };

}

export default ProductDetailPage;