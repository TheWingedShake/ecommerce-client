import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductPage from './product-page';
import AdminView from './admin-view';
import ProductView from './product-view';

class AdminPage extends React.Component{

    render(){
        return(
            <div>
                <Router>
                    <Route path="/admin" exact component={AdminView} />
                    <Route path="/admin/abstract-product" exact component={ProductPage} />
                    <Route path="/admin/abstract-product/:id" component={ProductView} />
                </Router>
            </div>
        );
    }

}

export default AdminPage;