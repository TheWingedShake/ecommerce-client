import React from 'react';

class ProductCard extends React.Component {

    constructor(props){
        super();
        this.state = {
            name: props.name,
            description: props.description
        };
    }

    render() {
        return (
            <div className="card mb-4">
                <div className="card-header">{this.state.name}</div>
                <div className="card-body">
                    {this.state.description}
                </div>
            </div>
        );
    }

}

export default ProductCard;