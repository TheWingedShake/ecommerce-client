import React from 'react';

class ConcreteProductForm extends React.Component{

    constructor(props){
        super();
        this.state = {
            id: props.concreteProduct.id,
            name: props.concreteProduct.name,
            description: props.concreteProduct.description,
            productId: props.concreteProduct.product.id,
            productDetails: props.concreteProduct.productDetails,
            selectedDetailId: -1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddDetail = this.handleAddDetail.bind(this);
        this.handleDetailChange = this.handleDetailChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(){
        this.props.handleSubmit(this.state);
    }

    handleCancel(){
        this.props.handleCancel();
    }

    handleDetailChange(e){
        let {value} = e.target;
        this.setState({
            selectedDetailId: value
        });
    }

    handleAddDetail(){
        const selectedDetails = this.state.productDetails.slice();
        selectedDetails.push(this.props.productDetails.find(item => item.id == this.state.selectedDetailId));
        this.setState({
            productDetails: selectedDetails
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input id="name" name="name" className="form-control" value={this.state.name} placeholder="name" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Based on <span className="required">*</span></label>
                    <select id="productId" name="productId" className="form-control" value={this.state.productId} onChange={this.handleInputChange}>
                        <option></option>
                        {this.props.products.map(value => {
                            return <option key={value.id} value={value.id}>{value.name}</option>
                        })}
                    </select> 
                </div>
                {this.state.productDetails.map((value, index) => {
                    return <div key={value.id} className="form-group"><label>{value.name}</label></div>
                })}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <select className="form-control" id="productDetails" onChange={this.handleDetailChange}>
                            <option></option>
                            {this.props.productDetails.map(value => {
                                return <option key={value.id} value={value.id}>{value.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <button className="btn btn-primary" type="button" onClick={this.handleAddDetail}>Add detail</button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={this.state.description} className="form-control" rows="3" onChange={this.handleInputChange}></textarea>
                </div>
                <div className="button-list">
                    <button className="btn btn-primary" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button className="btn btn-primary ml-2" type="button" onClick={this.handleSubmit}>Save</button>
                </div>
            </form>
        )
    };

}

export default ConcreteProductForm;