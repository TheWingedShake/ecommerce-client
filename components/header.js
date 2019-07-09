import React from 'react';
import { Link } from 'react-router-dom';

class AppHeader extends React.Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default AppHeader;