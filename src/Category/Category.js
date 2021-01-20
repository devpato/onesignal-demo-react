import React from 'react';
import './Category.css'
const Category = ({label, url, tag, color, onSubscribe}) => (
    <div className="category">
        <iframe src={url} id={tag }title={tag} width="320" height="240" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <button className={`btn btn--${color}`} onClick={()=>onSubscribe(tag)}>Subscribe to {label}</button>
    </div>
);

export default Category;