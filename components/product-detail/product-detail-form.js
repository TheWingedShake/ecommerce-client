import React from 'react';

class ProductDetailForm extends React.Component{

    constructor(props){
        super();
        this.state = {
            id: props.detail.id,
            name: props.detail.name,
            description: props.detail.description
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(e){
        this.props.handleSubmit({data: this.state});
    }

    handleCancel(){
        this.props.handleCancel();
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
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
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={this.state.description} className="form-control" rows="3" onChange={this.handleInputChange}></textarea>
                </div>
                <div className="button-list">
                    <button className="btn btn-primary" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button className="btn btn-primary ml-2" type="button" onClick={this.handleSubmit}>Save</button>
                </div>
            </form>
        );
    }

}

export default ProductDetailForm;