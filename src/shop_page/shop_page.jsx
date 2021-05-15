import React from 'react';
import Shop_data from './shop_data';
import Collection from "../collection/shop_collection";
class Shop_page extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            collections: Shop_data
        }
    }
    render()
    {
        const {collections}=this.state;
        return(
            <div className="shop_page">
                {
                    collections.map(({id, ...otherCollectionProps }) => (
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}
export default Shop_page;