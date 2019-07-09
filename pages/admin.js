import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '../components/header';
import AppFooter from '../components/footer';
import ProductPage from '../components/product-page';
export default () => (
    <div>
        <AppHeader />
            <div className="container">
                <div className="py-5">
                    <ProductPage />
                </div>
            </div>
        <AppFooter />
    </div>
);