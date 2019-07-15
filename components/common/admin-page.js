import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductPage from '../product/product-page';
import AdminView from './admin-view';
import ProductView from '../product/product-view';
import ProductDetailPage from '../product-detail/product-detail-page';
import ConcreteProductPage from '../concrete-product/concrete-product-page';

class AdminPage extends React.Component{

    render(){
        return(
            <div>
                <Router>
                    <Route path="/admin" exact component={AdminView} />
                    <Route path="/admin/abstract-product" exact component={ProductPage} />
                    <Route path="/admin/abstract-product/:id" component={ProductView} />
                    <Route path="/admin/product-details" exact component={ProductDetailPage} />
                    <Route path="/admin/product" exact component={ConcreteProductPage}></Route>
                </Router>
            </div>
        );
    }

}

export default AdminPage;