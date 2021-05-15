import React from 'react';
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
class Directory extends React.Component
{
    constructor()
    {
        super();
        this.state={
            sections:[
                {
                    title: 'HATS',
                    imageUrl:'Images/image1.jpeg',
                    id:1,
                    linkUrl: 'Hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl:'/Images/image2.jpeg',
                    id:2,
                    linkUrl:'Jackets'
                },
                {
                    title: 'SNEAKERS',
                    imageUrl:'Images/image3.jpeg',
                    id:3,
                    linkUrl:'Sneakers'
                },
                {
                    title: 'MEN',
                    imageUrl:'Images/image4.jpeg',
                    id:4,
                    linkUrl:'Men'
                },
                {
                    title: 'WOMEN',
                    imageUrl:'Images/image5.jpeg',
                    id:5,
                    linkUrl:'Women'
                },
            ]
        }
    }
    render()
    {
        return(
            <div className="directory-menu">
               { this.state.sections.map(({title, imageUrl,id,linkUrl}) =>
                (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
                ))}
            </div>
        )
    }

}
export default Directory;