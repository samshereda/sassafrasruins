import logo from './images/logo.png';
import map from './images/map_painting.jpg';
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
      {/* Under Construction */}
      <header id="main-header">
        <div className="header-inner">
          <img id="logo" src={logo} className="App-logo" alt="logo" />
          <nav>
            <div id="about">
              <a href="/#about-section">About</a>
            </div>
            <div id="history">
              <a href="/#map-section">Our Property</a>
            </div>
            <div id="gallery">
              <a href="/#history-section">History</a>
            </div>
            <div>
              <a href="/#gallery-section">Gallery</a>
            </div>
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
      <section id="about-section" className="text-section">
        <header>
          <h1 id="announcement">Coming Soon</h1>
        </header>
        <p>
          On a mountaintop in the Hudson Valley, nestled between the Berkshires
          and the Taconics, lies a 78-acre estate imbued with pure magic.
        </p>

        <h2>Step back in history to celebrate your future.</h2>

        <p>
          Once the settlement of 67 Shakers, The Ruins at Sassafras Farm
          resonates with history and natural beauty and promises a setting that
          defines unique—truly one of a kind.
        </p>
        <br />
      </section>
      <section id="map-section" className="yellow-section text-section">
        <img src={map} id="map" alt="map of the property" />
        <p>
          We are located a little over two hours from Boston and two and a half
          hours from New York city. Our property offers a variety of settings
          for your celebration and your guests will love exploring the woods,
          wild flower meadows, and historic artifacts. Extra metal detectors
          available for budding archeologists.
        </p>
        <br />
        <p>
          Host your rehearsal dinner in the historic <b>Barn Ruins</b> as flames
          from two Indonesian fire pits illuminate your party and the rush of a
          mountain stream cools a summer night.
        </p>
        <br />
        <p>
          Did someone say cigar bar? The historic <b>Hay Ramp</b> ruins climb 10
          feet above the barn ruins. Sit down on high and enjoy a Havana.
        </p>
        <br />
        <p>
          Your wedding party can stay in the <b>Stone House</b> with five
          <em> en suite</em> bedrooms, a sitting room, kitchen, and family room.
          This newly renovated former Shaker workshop combines original
          architecture with 21st-century amenities. Terrace views transport you
          to Provence while exposed beams, original wide-board pine floors, and
          the simple elegance of 19th century woodwork ground you in America’s
          past.
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
      </section>
      <section id="history-section" className="text-section">
        <header>
          <h1>History</h1>
        </header>
        <p>
          In February of 2020, Carol Reichert and Jerome Shereda purchased the
          Shaker Second Family settlement, 78 acres at 194 Darrow Road in New
          Lebanon, NY. We came from Newton, Massachusetts where we lived for 25
          years and raised our two children. Jerome is a photographer and
          musician. Carol is a writer and flamenco dancer. We restored our home
          in Newton, an 1800s farmhouse and barn and loved the process of
          bringing a dilapidated historic property back to life. After our
          children moved out, we began looking for another project. Within five
          minutes of seeing our future home, we knew.
        </p>

        <h2>This was it!</h2>
        <p>
          Within a month of taking ownership, we began the design for the
          restoration and renovation of this historic site where over 67 Shakers
          lived and worked from 1790 to 1938. The Brethren’s Workshop,
          caretaker’s cottage, chair factory, and former dwelling ruins were all
          in need of extensive work. Our love of history and restoration
          compelled us to preserve as much of the original buildings as
          possible, to use or repurpose existing materials, and to return the
          building façades to their original Shaker designs.
        </p>
        <br />
        <p>
          During the summer of 2020, as we pulled brambles, scrambling vines,
          and saplings from the lower property, we unearthed something amazing.
          Behind a nearly impenetrable wall of thickets were the ruins of more
          Shaker buildings. With the help of a local landscape construction
          company, we discovered the remains of the Shaker sister’s workshop, a
          barn, a hay ramp, an icehouse, and a dam. We discovered an underground
          water system the Shakers used to irrigate their crops. We discovered
          old plows, the icehouse tongs, oxen yokes, hundreds of shards of glass
          used by the Shakers and a perfectly intact bottle of Shaker Hair
          Restorer. As we collected our finds, one thing became clear to us.
        </p>
        <h2>Our treasure must be shared.</h2>
        <p>
          We decided to open an event venue and named it The Ruins at Sassafras
          Farm--The Ruins for obvious reasons and Sassafras Farm because the
          Shakers grew Sassafras trees and used the roots for medicine. Plus we
          liked the fiesty, fun quality of the name Sassafras.
        </p>
        <h3>The Shakers</h3>
        <p>
          Our property is one of five Shaker settlements, or families, in The
          Mount Lebanon Shaker Village, located on the west side of Mount
          Lebanon in New Lebanon, New York. Twelve years after founder Mother
          Ann Lee and her eight followers migrated to America to establish an
          American branch of the Shaker religion, the first Shaker building to
          be used for religious worship exclusively was erected on Mt. Lebanon,
          at New Lebanon, New York. Although the first Shaker settlement was
          established in 1776 near Watervliet, New York, the second settlement
          at New Lebanon served for approximately 150 years as the principal
          Shaker community. Here the central ministry resided, and in the peak
          years of Shakerism, there were 600 members and 100 buildings on 6,000
          acres.
        </p>
        <br />
        <p>
          The village, which is listed on The National Register of Historic
          Places, began in 1785. The village proper grew to consist of five
          families arranged linearly along a stretch of road approximately 1.3
          miles long. There were two peripheral families as well, the East
          Family located to the northeast of the village, and the West Family,
          located 1.75 miles southwest of the village. The idea of a Shaker
          "family" unit was first employed at Mount Lebanon and was established
          by Father Joseph Meacham. As he defined it, a family contained roughly
          60 adults, divided as equally as possible between the sexes. Each
          family had its own supervising elders, its own fields and workshops,
          and its own residence. The Shaker precept of celibacy dictated that
          the dwelling houses be divided into brothers wings and sisters wings,
          and that separate workshops be built to sustain this segregation.
          Eventually separate quarters for children were adopted as well. Thus,
          each of the five families; the North, Church, Center, Second, and
          South Families, had its own dwelling house (or houses as the community
          expanded) and workshops and outbuildings.{' '}
        </p>
        <br />
        <p>
          The Shakers attempted to assign each family specific crafts and
          duties, which were also regulated by sex, and so each family had
          workshops for its own particular pursuits. The construction dates of
          the Mount Lebanon structures range from 1785 to a general cutoff date
          of 1876. Following a disastrous fire in 1875 which destroyed several
          frame buildings, brick replacements were erected.{' '}
        </p>
        <br />
        <p>
          After this period, little significant building was done. The West
          Family buildings date from more modern times and cannot be considered
          sufficiently integral to be included in the landmark.
        </p>
        <br />
        <p>
          The Shaker style of architecture is characterized by functionalism and
          a clean simplicity of form. Materials range from frame through brick
          and stone masonry. There were no standard blueprints, the individual
          builders and carpenters fitted a building's form to its function and
          followed their basic tenets of sturdiness and simplicity.
        </p>
        <br />
        <p>
          With the decline in Shakerism, the Mount Lebanon community began to
          atrophy. In 1929-30, the Lebanon (now the Darrow) School purchased 300
          acres and forty buildings centered around the Church Family. The few
          remaining Shakers moved to the Second Family. In 1947, following the
          death of the last Mount Lebanon Shaker, the whole village was sold,
          the Darrow School acquiring most of the North, Center and Second
          Families. The South Family was acquired by a summer camp. The East
          Family had since been completely dismantled.
        </p>
        <br />
        <p>
          At the present time, the Darrow School owns the North, Church and
          Center Families, except for one of the northernmost buildings of the
          North Family. The Second Family (The Ruins at Sassafras Farm) is now a
          private residence and the South Family is owned and inhabited by a
          religious community called The Abode of the Message. There are at
          least thirty-four of the original Shaker buildings left in these five
          families in addition to scattered sheds and outbuildings with
          undetermined origins.
        </p>
      </section>
      <section id="gallery-section" className="yellow-section">
        <Gallery galleryImages={galleryImages} />
      </section>
      <section id="contact-section" className="text-section">
        <header>
          <h1>Contact</h1>
        </header>
        <iframe
          title="Weven Contact Form"
          id="contact-form"
          src="https://weven.co/embed/lead-form/534"
          sandbox="allow-same-origin allow-top-navigation allow-scripts allow-forms allow-popups"
          width="655"
          style={{
            border: 'none',
            maxWidth: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onload={() => {
            var self = this;
            window.addEventListener(
              'message',
              function (e) {
                if (
                  e.source === self.contentWindow &&
                  e.data &&
                  e.data.width &&
                  e.data.height
                ) {
                  self.width = e.data.width;
                  self.height = e.data.height;
                }
              },
              false
            );
          }}
        ></iframe>
        <p>
          We’re also pleased to offer our wedding clients complimentary access
          to an online planning portal to support the coordination of their
          event at The Ruins at Sassafras Farm.
        </p>

        <ul>
          <h3>This portal comes full of fun features like:</h3>
          <li>A planning checklist to help you stay on track.</li>
          <li>
            A custom wedding website builder to share important event details
            with guests.
          </li>
          <li>
            Vendor recommendations and a place to share vendor information with
            us, your host.
          </li>
          <li>A place to store and share documents.</li>
          <li>A messaging system to send us questions as needed.</li>
          <li>AND MORE!</li>
        </ul>
        <a
          id="weven-badge"
          href="https://weven.co/wedding-venue/534/The-Ruins-at-Sassafras-Farm"
          title="Powered By Weven."
        >
          <img
            src="https://cdn.weven.co/400x400/misc-img/Powered-By-Weven.png"
            alt="Powered By Weven. Partner since 2022"
          />
        </a>
      </section>
      <div className="pre-footer">
        <a href="https://www.instagram.com/sassafras.inc/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
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
          Photography: <a href="https://www.sheryllanzel.com/">Sheryl Lanzel</a>{' '}
          and <a href="https://www.janefeldman.com/">Jane Feldman</a>
        </p>
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
