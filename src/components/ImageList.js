import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // const images = props.images.map((image) =>{
    //     return <img key={image.id} src={image.urls.thumb} alt={image.description}/>
    // });
    // const images = props.images.map(({description, id, urls}) =>{
    //     return <img key={id} src={urls.thumb} alt={description}/>
    // });
    const images = props.images.map((image) =>{
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className='image-list'>{images}</div>
};

export default ImageList;