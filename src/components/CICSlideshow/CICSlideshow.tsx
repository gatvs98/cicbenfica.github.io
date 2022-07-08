import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const CICSlideshow = () => {

    const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        easing: "ease",
        // TODO indicators: (i) => <div className="indicator">{i + 1}</div>
      };
      const slideImages = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      ];
      return (
        <div className="App">
          <h3>Slide Effect</h3>
          <div className="slide-container">
            <Slide {...properties}>
              {slideImages.map((each, index) => (
                <div key={index} className="each-slide">
                  <img className="lazy" src={each} alt="sample" />
                </div>
              ))}
            </Slide>
          </div>
        </div>
      );
    }

export default CICSlideshow;