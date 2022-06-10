import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Page } from "./Page/Page";

import "./Carousel.css";

import { CarouselContext } from "./carousel-context";

export const CarouselCompound = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(450);

  const windowElRef = useRef();

  useEffect(() => {
    const resizeHandler = () => {
      const _width = windowElRef.current.offsetWidth;
      setWidth(_width);
      // Сделать чтобы определяло страницу
      setOffset(0);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (children.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CarouselContext.Provider value={{ width }}>
      <div className="main-container">
        <FaChevronLeft className="arrow" onClick={handleLeftArrow} />
        <div className="window" ref={windowElRef}>
          <div
            className="all-pages-container"
            style={{
              transform: `translateX(${offset}px)`
            }}
          >
            {children}
          </div>
        </div>
        <FaChevronRight className="arrow" onClick={handleRightArrow} />
      </div>
    </CarouselContext.Provider>
  );
};

CarouselCompound.Page = Page;
