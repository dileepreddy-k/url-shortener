import React from 'react';

const UrlsList = ({ urlsList }) => {

    return (
        <>
            {
                urlsList && urlsList.map((el) => {
                    return (
                        <div key={el.urlCode}>
                            {el.longUrl}
                            {el.shortUrl}
                        </div>
                    )
                })
            }
        </>
    )
}

export default UrlsList;