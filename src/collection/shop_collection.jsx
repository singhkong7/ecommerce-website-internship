import React from "react";
import './shop_collection.scss';
import CollectionItem from "./collection-item/collection-item";
const Collection= ({title,items}) =>
(
    <div className="Collection">
        <h1 className={title}>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.map(({id, ...otherItemProps}) =>(
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);
export default Collection;