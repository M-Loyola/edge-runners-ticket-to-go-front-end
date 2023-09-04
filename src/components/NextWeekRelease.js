import React, { useEffect } from "react";
import { StackedCarousel, ResponsiveContainer} from "react-stacked-center-carousel";
import "../assets/styles/Slide.css";
import { Slide } from "./Slide";


const data = [
    {
      image: "https://drive.google.com/uc?export=view&id=1eh7EchMv_StrywlmyNZqxOTwlSfEbB94",
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1z5Af__DAlXjKD-KTQLwPnUu9gAdG4am6",
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1IvO_A0v4jBZOZb-yGCdPusW9cQJy-5Ma",
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1mTxKPskOLuhhQzPRmPENkFFUNgQCzzu2",
    },
    {
      image: "https://drive.google.com/uc?export=view&id=1ZatEQ02aIVKbaZ3Tw-G-_FSEraIgkjL1",
    },
  ];

export const NextWeekRelease = () => {
  const ref = React.useRef(StackedCarousel);

  useEffect(() => {
    setInterval(stuff, 100000);
    console.log();
  }, []);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <>
    <div className="carousel-banner">
        <h1 className="banner-text">Unlocking Next Week's Release!</h1>
      </div>
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={500}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={3}
                disableSwipe
                transitionTime={450}
              />
            );
          }}
        />
      
    </div>
    </div>
    </>
  );
};