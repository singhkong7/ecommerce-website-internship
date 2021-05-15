import React from 'react';
import './menu-item.scss';
import {withRouter} from 'react-router-dom';
const MenuItem= ({title,imageUrl,history,linkUrl,match}) =>
(

    <div style=
    {{
      backgroundImage : `url(${imageUrl})`
    }}  
    className="menu-item">
            <div className="content">
              <h1
                onClick={()=>history.push(`${match.url}${linkUrl}`)}  
                className="content-title">{title}</h1>
              <span className="content-subtitle">SHOP NOW</span>
            </div>
          </div>
)
export default withRouter(MenuItem);