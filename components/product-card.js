import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {

    constructor(props){
        super();
        this.state = {
            name: props.name,
            description: props.description,
            id: props.id
        };
    }

    render() {
        const path = `/admin/abstract-product/${this.state.id}`;
        return (
            <div className="card mb-4">
                <div className="card-header">{this.state.name}</div>
                <div className="card-body">
                    {this.state.description}
                </div>
                <div className="card-footer">
                    <Link className="btn btn-primary" to={path}>View</Link>
                </div>
            </div>
        );
    }

}

export default ProductCard;