import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url, id }) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p key={id}>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}