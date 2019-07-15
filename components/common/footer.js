import React, { Fragment } from 'react';

class AppFooter extends React.Component{

    render(){
        return(
            <Fragment>
                <style jsx>{`
                    .blue {
                        background-color: #2196f3 !important;
                        text-align: center;
                    }
                    footer.page-footer .footer-copyright {
                        background-color: rgba(0,0,0,.2);
                    }
                    footer.page-footer a {
                        color: #fff;
                    }
                `}
                </style>
                <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://www.linkedin.com/in/yaroslav-garkusha-4159936b/" target="_blank"> Yaroslav Garkusha</a>
                    </div>
                </footer>
            </Fragment>
        );
    };

}

export default AppFooter;