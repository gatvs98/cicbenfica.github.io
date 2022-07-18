import React from "react";
import ReactDOM from "react-dom";
import { CICSlideItem } from "../../models/CICSlideItem";
import CICSlide from "../CICSlide/CICSlide";
import "./CICSlideshow.scss";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function CICSlideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const slideItems: CICSlideItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "alt_text_x",
      header: 'ABC',
      text: 'ABC'
    },
    {
      image:
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      alt: "alt_text_x",
      header: 'ABC',
      text: 'ABC'
    },
    {
      image:
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "alt_text_x",
      header: 'ABC',
      text: 'ABC'
    },
    {
      image:
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      alt: "alt_text_x",
      header: 'ABC',
      text: 'ABC'
    },
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slideItems.map((item, index) => (
            <div className="slideshowDots">
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                } }
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CICSlideshow;
