import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css'

interface SlideItem {
    image: string,
    alt: string,
}

const CICSlideshow = () => {

    
    const slideItems: SlideItem[] = [
        {
            image: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            alt: 'alt_text_x'
        },
        {
            image: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
            alt: 'alt_text_x'
        },
        {
            image: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            alt: 'alt_text_x'
        },
        {
            image: "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            alt: 'alt_text_x'
        },
    ];

      return (
          
        <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover
        >
            {
                slideItems.map((item)=> {
                    return(
                        <div>
                            <img src={item.image} alt={item.alt} />
                        </div>
                    )
                })
            }
        </Carousel>
    );
      
    }

export default CICSlideshow;