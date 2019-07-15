import React from 'react';

class ConcreteProductCard extends React.Component{

    constructor(props){
        super();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(){

    }

    handleDelete(){

    }

    render(){
        return(
            <div className="card">
                <div className="card-header">{this.props.product.name}</div>
                <div className="card-body">
                    <div className="card-title">Based on {this.props.product.product.name}</div>
                    <div className="card-text">{this.props.product.description}</div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info mr-4" onClick={this.handleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }

}

export default ConcreteProductCard;