import React from 'react';

class ProductDetailCard extends React.Component{

    constructor(props){
        super();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(){
        this.props.handleEdit({id: this.props.detail.id});
    }

    handleDelete(){
        this.props.handleDelete({id: this.props.detail.id});
    }

    render(){
        return(
            <div className="card mb-4">
                <div className="card-header">{this.props.detail.name}</div>
                <div className="card-body">
                    {this.props.detail.description}
                </div>
                <div className="card-footer">
                    <button className="btn btn-info mr-4" onClick={this.handleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }

}

export default ProductDetailCard;