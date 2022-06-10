import { useEffect, useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Carousel.css";

import { PAGE_WIDTH } from "../../constants/constants";

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`
          }
        });
      })
    );
  }, []);

  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };

  return (
    <div className="main-container">
      <FaChevronLeft className="arrow" onClick={handleLeftArrow} />
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className="arrow" onClick={handleRightArrow} />
    </div>
  );
};
