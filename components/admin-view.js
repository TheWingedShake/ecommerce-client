import React from 'React';
import { Link } from 'react-router-dom';

class AdminView extends React.Component{

    render(){
        return(
            <div>
                <Link to="/admin/abstract-product" className="btn btn-primary mr-5">Abstract product</Link>
                <Link to="/admin/product-details" className="btn btn-primary mr-5">Product details</Link>
                <Link to="/admin/product" className="btn btn-primary">Product</Link>
            </div>
        );
    }

}

export default AdminView;