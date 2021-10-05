import logo from './images/logo.png';
import './App.css';
import Carousel, { CarouselItem } from './Carousel';
import Gallery, { GalleryItem } from './Gallery';

function importAll(r) {
  return r.keys().map((item, index) => {
    return r(item).default;
  });
}

const carouselImages = importAll(
  require.context('./images/carousel', false, /\.(png|jpe?g|svg)$/)
);

const galleryImages = importAll(
  require.context('./images/gallery', false, /\.(png|jpe?g|svg)$/)
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={logo} className="App-logo" alt="logo" />
      </header>
      <Carousel>
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <img className="carousel-image" src={image} />
            </CarouselItem>
          );
        })}
      </Carousel>
      <Gallery>
        {galleryImages.map((image, index) => {
          console.log(image);
          return (
            <GalleryItem key={index}>
              <img className="gallery-image" src={image} />
            </GalleryItem>
          );
        })}
      </Gallery>
    </div>
  );
}

export default App;
