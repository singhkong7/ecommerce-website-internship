import React from 'react';
import {connect} from "react-redux";
import {addItem} from "../../Redux/cart/cart-action";
import './collection-item.scss';
import CustomButton from "../../custom-button/custom-button";

const CollectionItem= ({item,addItem})=>
{
    const {id,name,price,imageUrl}=item
    return(
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
            <span className="price">${price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
    )
};
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);