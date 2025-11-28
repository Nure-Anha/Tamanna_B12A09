import React from 'react';
import Navbar from '../Components/Navbar';
import PageError from './PageError';
import Footer from '../Components/Footer';

const ErrorLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}

            <PageError></PageError>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default ErrorLayout;