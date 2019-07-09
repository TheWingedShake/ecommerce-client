import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default ( { children } ) => (
    <div>
        <Router>
            <AppHeader />
                <div className="container">
                    <div className="py-5">
                    { children }
                    </div>
                </div>
            <AppFooter />
        </Router>
    </div>
);
