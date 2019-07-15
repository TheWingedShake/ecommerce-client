import React from 'react';

class ProductView extends React.Component{

    constructor({ match }){
        super();
        this.state = {
            id: match.params.id
        };
    }

    render(){
        return(
            <div>
                ProductView for product with id {this.state.id}
            </div>
        );
    };

}

export default ProductView;