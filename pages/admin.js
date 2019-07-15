import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from '../components/common/header';
import AppFooter from '../components/common/footer';
import dynamic from 'next/dynamic';
const DynanicProductPage = dynamic(
    () => import('../components/common/admin-page.js'),
    {
        ssr: false
    }
);
export default () => (
    <div>
        <AppHeader />
            <div className="container">
                <div className="py-5">
                    <DynanicProductPage />
                </div>
            </div>
        <AppFooter />
    </div>
);