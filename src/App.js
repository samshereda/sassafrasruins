import logo from './images/logo.png';
import './App.css';
import Carousel, { CarouselItem } from './Carousel';
import Gallery, { GalleryItem } from './Gallery';
import ContactForm from './ContactForm';

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
      <header id="main-header">
        <div className="header-inner">
          <img id="logo" src={logo} className="App-logo" alt="logo" />
          <nav>
            <div>
              <a href="/#about-section">About</a>
            </div>
            <div id="history">
              <a href="/#map-section">Our Property</a>
            </div>
            {/* <div id="history">
              <a href="/#history-section">History</a>
            </div> */}
            <div id="gallery">
              <a href="/#gallery-section">Gallery</a>
            </div>
            {/* <div>
              <a href="/#pricing-section">Pricing</a>
            </div> */}
            <div>
              <a href="/#contact-section">Contact</a>
            </div>
          </nav>
        </div>
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
      <section id="about-section">
        <header>
          <h1 id="announcement">Opening Summer 2022</h1>
        </header>
        <p>
          On a mountaintop in the Hudson Valley, nestled between the Berkshires
          and the Taconics, lies a 78-acre estate imbued with pure magic.
        </p>

        <h2>Step back in history to celebrate your future.</h2>

        <p>
          Once the settlement of 80 Shakers, The Ruins at Sassafras Farm
          resonates with history and natural beauty and promises a setting that
          defines unique—truly one of a kind.
        </p>
        <br />
      </section>
      <section id="map-section" className="yellow-section">
        <header>
          <h1>Our Property</h1>
        </header>
        <p>
          Host your rehearsal dinner in the historic <b>barn ruins</b> as flames
          from two Indonesian fire pits illuminate your party and the rush of a
          mountain stream cools a summer night.
        </p>
        <br />
        <p>
          Did someone say cigar bar? The historic <b>hay ramp</b> ruins climb 10
          feet above the barn ruins. Sit down on high and enjoy a Havana.
        </p>
        <br />
        <p>
          Your wedding party can stay in the <b>stone house</b> with five en
          suite bedrooms, a sitting room, kitchen, and family room. This newly
          renovated former Shaker workshop combines original architecture with
          21st-century amenities. Terrace views transport you to Provence while
          exposed beams, original wide-board pine floors, and the simple
          elegance of 19th century woodwork ground you in America’s past.
        </p>
        <br />
        <p>
          The two-bedroom <b>Caretaker’s Cottage</b>, overlooking the Lebanon
          Valley, provides a rustic bridal suite, guest house, or pre-wedding
          prep location.
        </p>
        <br />
        <p>
          And for the adventurous, the <b>Smoke House</b> sleeps one or two
          guests in a stone and brick summer bedroom with full bath.
        </p>
        <br />
        <p>
          You can choose the scent of climbing roses and lavender to adorn your
          <b> Rose Dwelling</b> ceremony while musicians serenade you from the
          gazebo. Or exchange vows on the shores of <b>Deere Pond</b>, with a
          forest backdrop and willow tree canopy. Large-mouth bass and blue gill
          will attend.
        </p>
        <br />
        <p>
          <b>The Chair Factory</b>, a wooden barn structure built in 1847, was
          the last facility in the area to make a Shaker chair. Tables of wood
          recycled from the factory seat 250 guests. Two bathrooms, a bar,
          stage, dance floor, and terrace offer everything you need to celebrate
          with family and friends.
        </p>
        <br />
        <p>
          Situated on the border between Massachusetts and New York on historic
          Mt. Lebanon, <b>The Ruins at Sassafras Farm</b> offers so much more:
          hiking paths, a wild flower meadow, perennial gardens, and 200-year
          old stone walls.
        </p>
      </section>
      {/* <section id="history-section">
        <header>
          <h1>History</h1>
        </header>
        <div className="placeholder">
          <p>Coming Soon</p>
        </div>
      </section> */}
      <section id="gallery-section">
        <Gallery galleryImages={galleryImages} />
      </section>
      {/* <section id="pricing-section">
        <header>
          <h1>Pricing</h1>
        </header>
        <div className="placeholder">
          <p>Coming Soon</p>
        </div>
      </section> */}
      <section id="contact-section" className="yellow-section">
        <header>
          <h1>Contact</h1>
        </header>
        <p>
          We want to hear about your special day! Please fill in the details
          below, and we’ll get back to you soon.
        </p>
        <ContactForm />
      </section>
      <div className="pre-footer">
        <a href="https://www.instagram.com/sassafras.inc/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            // fill="rgb(244, 197, 52)"
            fill="rgb(243, 177, 32)"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/TheRuinsatSassafrasFarm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgb(243, 177, 32)"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
          </svg>
        </a>
      </div>
      <footer>
        <p>
          The Ruins at Sassafras Farm, 194 Darrow Road, New Lebanon NY 12125,
          USA
        </p>
        <p>617-990-4359</p>
      </footer>
    </div>
  );
}

export default App;
