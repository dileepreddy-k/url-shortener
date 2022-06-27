import React from 'react';
import Footer from '../components/Footer';

import Form from '../components/Form'; 
import Header from '../components/Header';
import UrlsList from '../components/UrlsList';

const Homepage = () => {
    return (
        <>
            {/* Header with logo & link to github repo */}
            <Header />
            {/* Input field to add long url with submit button */}
            <Form />
            {/* List of added urls from the cookies/localstorage */}
            <UrlsList />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Homepage;