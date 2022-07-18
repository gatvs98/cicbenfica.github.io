import * as React from 'react';
import { CICSlideItem } from '../../models/CICSlideItem';


const CICSlide = (props: any) => {
    return(
        <div className='flex '>
            <img src={props.item.image} alt={props.item.alt} className='slide' />
            <p>{props.item.header}</p>
        </div>
    )
}


export default CICSlide;
