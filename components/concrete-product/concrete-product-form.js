import React from 'react';

class ConcreteProductForm extends React.Component{

    constructor(props){
        super();
        this.state = {
            name: '',
            description: '',
            productId: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name <span className="required">*</span></label>
                    <input id="name" name="name" className="form-control" value={this.state.name} placeholder="name" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Based on <span className="required">*</span></label>
                    <select id="productId" name="productId" className="form-control" onChange={this.handleInputChange}>
                        <option></option>
                        {this.props.products.map(value => {
                            return <option key={value.id} value={value.id}>{value.name}</option>
                        })}
                    </select> 
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