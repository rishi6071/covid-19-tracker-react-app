import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './Header.css';
import logo from '../../images/covid19.png';
import { Container } from '@material-ui/core';

const Header = () => {

    return (
        <>
            <Container>
                <img src={logo} className="covid19_logo" alt="Covid-19 Tracker" />
            </Container>
        </>
    );
}

export default Header;