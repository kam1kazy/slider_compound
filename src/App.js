import { Carousel } from "./Carousel/Carousel-base/Carousel";
import { CarouselCompound } from "./Carousel/Carousel-components/Carousel-component";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Classic Carousel</h2>

      <Carousel>
        <div className="item item-1">Item 1</div>
        <div className="item item-2">Item 2</div>
        <div className="item item-3">Item 3</div>
      </Carousel>

      <br />
      <hr />
      <br />

      <h2>Compound Carousel</h2>

      <CarouselCompound>
        <CarouselCompound.Page>
          <div className="item item-1">Item 1</div>
        </CarouselCompound.Page>

        <CarouselCompound.Page>
          <div className="item item-2">Item 2</div>
        </CarouselCompound.Page>

        <CarouselCompound.Page>
          <div className="item item-3">Item 3</div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  );
}
