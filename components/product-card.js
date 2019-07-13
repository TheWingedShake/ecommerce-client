import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {

    constructor(props){
        super();
    }

    handleDelete(){
        this.props.handleDelete({
            name: 'delete product',
            id: this.props.id
        });
    }

    handleEdit(){
        this.props.handleEdit({
            name: 'edit product',
            id: this.props.id
        });
    }

    render() {
        const path = `/admin/abstract-product/${this.props.id}`;
        return (
            <div className="card mb-4">
                <div className="card-header">{this.props.name}</div>
                <div className="card-body">
                    {this.props.description}
                </div>
                <div className="card-footer">
                    <Link className="btn btn-primary mr-4" to={path}>View</Link>
                    <button className="btn btn-info mr-4" onClick={() => this.handleEdit()}>Edit</button>
                    <button className="btn btn-danger" onClick={() => this.handleDelete()}>Delete</button>
                </div>
            </div>
        );
    }

}

export default ProductCard;