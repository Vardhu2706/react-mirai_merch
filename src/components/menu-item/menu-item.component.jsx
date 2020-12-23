// Imports
import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
// Functional Component
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() =>history.push(`${match.url}${linkUrl}`)} >
        <div 
            className='background-image'
            style={{
                backgroundImage : `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>
                {title}
            </h1>
            <span className='subtitle'>
                Shop Now
            </span>
        </div>
    </div>
)
// Exports
export default withRouter(MenuItem);