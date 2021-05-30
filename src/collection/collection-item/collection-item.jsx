import React from 'react';

import './collection-item.scss';
import CustomButton from "../../custom-button/custom-button";

const CollectionItem= ({id,name,price,imageUrl})=>
(
    <div className="collection-item">
        <div 
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}  
         />
        <div className="Footer">
            <span className="key">{id}</span>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
);
export default CollectionItem;