import React, { useState } from 'react';

const Form = () => {

    const [url, setUrl] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
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