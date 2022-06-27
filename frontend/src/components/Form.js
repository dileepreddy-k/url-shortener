import React, { useState } from 'react';

import apiClient from '../api/api';

const Form = () => {

    const [url, setUrl] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        apiClient
            .post('http://localhost:4000/api/url/shorten', { longUrl: url })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    placeholder="Enter URL" 
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}    
                />
                <button type="submit">Shorten</button>
            </form>
        </>
    )
}

export default Form;