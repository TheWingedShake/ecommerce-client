import React from 'react';

class ProductForm extends React.Component{

    constructor(props){
        super();
        this.state = {
            name: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel(){
        this.props.handleForm({
            isSubmit: false
        });
        return;
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        this.props.handleForm({
            isSubmit: true,
            data: this.state
        });
        return;
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input id="name" name="name" className="form-control" placeholder="name" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="form-control" rows="3" onChange={this.handleInputChange}></textarea>
                </div>
                <div className="button-list">
                    <button className="btn btn-primary" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button className="btn btn-primary ml-2" type="button" onClick={this.handleSubmit}>Save</button>
                </div>
            </form>
        );
    }

}

export default ProductForm;