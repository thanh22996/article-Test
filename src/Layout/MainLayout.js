import React from 'react';
// import { Footer } from './Footer';
import { Header } from '../components/Common/Header';
import { Footer } from '../components/Common/Footer';

function MainLayout(props) {
    return (
        <div className="wrapper-layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default MainLayout;