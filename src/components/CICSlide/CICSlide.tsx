import * as React from 'react';
import './CICSlide.scss'

const CICSlide = (props: any) => {
    return (
        <div className='slide w-full h-max'>
            <img src={props.item.image} alt={props.item.alt} className='slide w-full h-max' />
        </div>
    )
}


export default CICSlide;
