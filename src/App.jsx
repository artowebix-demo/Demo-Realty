
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const properties = [
  {
    id: 1,
    name: "The Grand Residence",
    type: "Luxury 3 BHK",
    location: "Mira Road East",
    price: "₹1.48 Cr",
    area: "1,420 sq.ft.",
    status: "Ready to Move",
    image: `${import.meta.env.BASE_URL}property1.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property3.jpg`,
      `${import.meta.env.BASE_URL}property4.png`,
    ],
    description:
      "A refined 3 BHK residence designed around generous living spaces, elegant interiors and effortless connectivity to Mumbai.",
    features: ["3 Bedrooms", "3 Bathrooms", "2 Parking", "Club Access"],
  },
  {
    id: 2,
    name: "Urban Heights",
    type: "Premium 2 BHK",
    location: "Mira Road East",
    price: "₹98 L",
    area: "980 sq.ft.",
    status: "New Launch",
    image: `${import.meta.env.BASE_URL}property2.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property6.jpg`,
      `${import.meta.env.BASE_URL}property2.jpg`,
    ],
    description:
      "A sophisticated urban home combining modern planning, lifestyle amenities and excellent access to Mumbai's western corridor.",
    features: ["2 Bedrooms", "2 Bathrooms", "1 Parking", "Gym & Pool"],
  },
  {
    id: 3,
    name: "Signature Residences",
    type: "Luxury 4 BHK",
    location: "Thane West",
    price: "₹1.72 Cr",
    area: "1,850 sq.ft.",
    status: "Limited Units",
    image: `${import.meta.env.BASE_URL}property3.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property6.jpg`,
      `${import.meta.env.BASE_URL}property2.jpg`,
    ],
    description:
      "An expansive family residence with elevated finishes, larger rooms and premium lifestyle amenities.",
    features: ["4 Bedrooms", "4 Bathrooms", "2 Parking", "Private Lounge"],
  },
  {
    id: 4,
    name: "Palm Avenue",
    type: "Premium 3 BHK",
    location: "Bhayandar East",
    price: "₹1.21 Cr",
    area: "1,280 sq.ft.",
    status: "Available",
    image: `${import.meta.env.BASE_URL}property5.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property6.jpg`,
      `${import.meta.env.BASE_URL}property2.jpg`,
    ],
    description:
      "A contemporary residence for buyers looking for space, comfort and convenient access to the Mira-Bhayandar region.",
    features: ["3 Bedrooms", "2 Bathrooms", "2 Parking", "Garden View"],
  },
  {
    id: 5,
    name: "The Metropolitan",
    type: "Modern 2 BHK",
    location: "Kandivali West",
    price: "₹1.35 Cr",
    area: "1,050 sq.ft.",
    status: "Featured",
    image: `${import.meta.env.BASE_URL}property2.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property6.jpg`,
      `${import.meta.env.BASE_URL}property2.jpg`,
    ],
    description:
      "A modern city residence with smart planning, premium finishes and a location designed for everyday convenience.",
    features: ["2 Bedrooms", "2 Bathrooms", "1 Parking", "Fitness Centre"],
  },
  {
    id: 6,
    name: "Lakeview Estate",
    type: "Luxury 3 BHK",
    location: "Goregaon West",
    price: "₹1.89 Cr",
    area: "1,490 sq.ft.",
    status: "Premium",
    image: `${import.meta.env.BASE_URL}property6.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property6.jpg`,
      `${import.meta.env.BASE_URL}property2.jpg`,
    ],
    description:
      "A premium urban address offering elegant interiors, spacious planning and an elevated lifestyle.",
    features: ["3 Bedrooms", "3 Bathrooms", "2 Parking", "Lake View"],
  },
  {
    id: 7,
    name: "The Crown Villa",
    type: "Luxury 4 BHK Villa",
    location: "Mira Road",
    price: "₹2.35 Cr",
    area: "2,400 sq.ft.",
    status: "Exclusive",
    image: `${import.meta.env.BASE_URL}property4.png`,
    gallery: [
      `${import.meta.env.BASE_URL}property2.jpg`,
      `${import.meta.env.BASE_URL}property6.jpg`,
      `${import.meta.env.BASE_URL}property2.jpg`,
    ],
    description:
      "An exclusive villa-style residence created for buyers who want exceptional space, privacy and premium living.",
    features: ["4 Bedrooms", "5 Bathrooms", "3 Parking", "Private Terrace"],
  },
];

const advantages = [
  {
    number: "01",
    title: "Curated Properties",
    text: "We focus on properties that offer genuine lifestyle value, connectivity and long-term potential.",
  },
  {
    number: "02",
    title: "Location Intelligence",
    text: "Every recommendation considers infrastructure, transport, neighbourhood growth and everyday convenience.",
  },
  {
    number: "03",
    title: "Smarter Buying",
    text: "Understand pricing, EMI, appreciation and affordability before making a major decision.",
  },
  {
    number: "04",
    title: "Personal Guidance",
    text: "From the first shortlist to the final conversation, the experience stays simple and transparent.",
  },
];

const marketData = [
  { year: "2022", value: 42 },
  { year: "2023", value: 51 },
  { year: "2024", value: 64 },
  { year: "2025", value: 76 },
  { year: "2026", value: 89 },
];

const faqs = [
  {
    q: "Which areas do you cover?",
    a: "Our primary focus is Mira Road, Bhayandar, Thane and selected Mumbai suburbs. We can also help identify suitable properties in surrounding areas.",
  },
  {
    q: "Can I schedule a property visit?",
    a: "Yes. Select a property and contact us through WhatsApp or phone to arrange a convenient viewing.",
  },
  {
    q: "Do you help with home loans?",
    a: "We can help you understand indicative EMI calculations, affordability and the financial side of a property purchase.",
  },
  {
    q: "Are these property prices final?",
    a: "Prices shown are indicative for demonstration purposes and can change depending on inventory, floor, configuration and developer offers.",
  },
  {
    q: "Can I compare multiple properties?",
    a: "Yes. Use the property carousel to explore different configurations, locations, sizes and indicative pricing.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [propertyImage, setPropertyImage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });

  const propertyTrackRef = useRef(null);

  const [loanAmount, setLoanAmount] = useState(10000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanYears, setLoanYears] = useState(20);

  const [area, setArea] = useState(1000);
  const [areaUnit, setAreaUnit] = useState("sqft");

  const monthlyRate = interestRate / 12 / 100;
  const months = loanYears * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const formattedINR = (value) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(value);

  const convertedArea =
    areaUnit === "sqft"
      ? area * 0.092903
      : area / 0.092903;

  /*
    =========================================================
    EXTERNAL CONTACT LINKS
    =========================================================

    Using normal <a> links instead of window.open /
    window.location prevents GitHub Pages from navigating
    the SPA to a blank page.
  */

  const WHATSAPP_NUMBER = "919876543210";
  const PHONE_NUMBER = "+919876543210";

  const getWhatsAppLink = (propertyName = "a property") => {
    const message = encodeURIComponent(
      `Hi Demo Realty, I am interested in ${propertyName}. Please share more details.`
    );

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  useEffect(() => {
    document.body.style.overflow = selectedProperty ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProperty]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setSelectedProperty(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const moveProperties = (direction) => {
    if (!propertyTrackRef.current) return;

    const amount =
      window.innerWidth <= 768
        ? propertyTrackRef.current.clientWidth * 0.86
        : 420;

    propertyTrackRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const openProperty = (property) => {
    setSelectedProperty(property);
    setPropertyImage(0);
  };

  const handleHeroMouseMove = (event) => {
    const x =
      (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 2;

    setHeroMouse({
      x,
      y,
    });
  };

  return (
    <div className="site-shell">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            <span className="brand-mark">DR</span>

            <span className="brand-copy">
              <strong>DEMO</strong>
              <span>REALTY</span>
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("properties")}>
              Properties
            </button>

            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>

            <button onClick={() => scrollToSection("market")}>
              Market
            </button>

            <button onClick={() => scrollToSection("calculators")}>
              Calculators
            </button>

            <button onClick={() => scrollToSection("location")}>
              Location
            </button>

            <button onClick={() => scrollToSection("faq")}>
              FAQ
            </button>

            <button
              className="nav-contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>

          </nav>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="hero"
        onMouseMove={handleHeroMouseMove}
      >

        <div
          className="hero-background"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}living-room.jpg.png)`,
            transform: `
              translate3d(
                ${heroMouse.x * -10}px,
                ${heroMouse.y * -7}px,
                0
              )
              scale(1.06)
            `,
          }}
        />

        <div className="hero-vignette" />

        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />

        <div className="hero-grid" />

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            PREMIUM REAL ESTATE
            <span className="eyebrow-line" />
          </div>

          <p className="hero-location">
            MIRA ROAD EAST · MUMBAI
          </p>

          <h1>
            Find a home
            <span>worth coming home to.</span>
          </h1>

          <p className="hero-description">
            Discover carefully selected residences, intelligent
            investment opportunities and exceptional locations
            across Mumbai's most promising neighbourhoods.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => scrollToSection("properties")}
            >
              Explore Properties
              <span>↗</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("calculators")}
            >
              Calculate EMI
              <span>↓</span>
            </button>

          </div>

          <div className="hero-trust">

            <div>
              <strong>150+</strong>
              <span>Properties</span>
            </div>

            <div>
              <strong>12+</strong>
              <span>Locations</span>
            </div>

            <div>
              <strong>8+</strong>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

        <div className="hero-bottom">

          <span>SCROLL TO DISCOVER</span>

          <div className="scroll-indicator">
            <span />
          </div>

          <span>EST. 2018</span>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="intro-section">

        <div className="section-label">
          <span>01</span>
          THE DEMO REALTY EXPERIENCE
        </div>

        <div className="intro-grid">

          <h2>
            Property buying,
            <em> beautifully simplified.</em>
          </h2>

          <div>

            <p>
              Your next home should be more than an address.
              It should fit your lifestyle, your ambitions and
              your future.
            </p>

            <p>
              We combine local market knowledge with a curated
              approach to make property discovery easier,
              clearer and more enjoyable.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div className="stat-card">
          <strong>150+</strong>
          <span>Curated Properties</span>
        </div>

        <div className="stat-card">
          <strong>₹500Cr+</strong>
          <span>Property Value Tracked</span>
        </div>

        <div className="stat-card">
          <strong>12+</strong>
          <span>Prime Locations</span>
        </div>

        <div className="stat-card">
          <strong>4.9/5</strong>
          <span>Client Experience</span>
        </div>

      </section>


      {/* ================= PROPERTIES ================= */}

      <section
        id="properties"
        className="properties-section"
      >

        <div className="section-heading">

          <div>

            <div className="section-label">
              <span>02</span>
              FEATURED COLLECTION
            </div>

            <h2>
              Homes selected
              <em> for how you live.</em>
            </h2>

          </div>

          <p>
            Explore our featured residences across Mira Road,
            Thane and Mumbai. Swipe through the collection or
            use the arrows to discover more.
          </p>

        </div>


        <div className="property-carousel-wrapper">

          <button
            className="carousel-arrow carousel-prev"
            onClick={() => moveProperties("prev")}
            aria-label="Previous property"
          >
            ←
          </button>

          <div
            className="property-track"
            ref={propertyTrackRef}
          >

            {properties.map((property) => (

              <article
                className="property-card"
                key={property.id}
              >

                <div
                  className="property-image"
                  onClick={() => openProperty(property)}
                >

                  <img
                    src={property.image}
                    alt={property.name}
                  />

                  <div className="property-image-overlay" />

                  <span className="property-status">
                    {property.status}
                  </span>

                  <span className="property-view">
                    VIEW PROPERTY ↗
                  </span>

                </div>


                <div className="property-card-content">

                  <div className="property-card-top">

                    <div>

                      <span className="property-type">
                        {property.type}
                      </span>

                      <h3>{property.name}</h3>

                      <p>
                        <span>⌖</span>
                        {property.location}
                      </p>

                    </div>

                    <strong>
                      {property.price}
                    </strong>

                  </div>


                  <div className="property-card-bottom">

                    <span>
                      {property.area}
                    </span>

                    <button
                      onClick={() => openProperty(property)}
                    >
                      View Details
                      <span>↗</span>
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>


          <button
            className="carousel-arrow carousel-next"
            onClick={() => moveProperties("next")}
            aria-label="Next property"
          >
            →
          </button>

        </div>


        <div className="carousel-hint">
          <span>←</span>
          DRAG / SWIPE TO EXPLORE
          <span>→</span>
        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="experience-section"
      >

        <div className="section-label">
          <span>03</span>
          WHY DEMO REALTY
        </div>

        <div className="experience-header">

          <h2>
            More than property.
            <em> Better decisions.</em>
          </h2>

          <p>
            A premium property experience built around
            clarity, local knowledge and long-term value.
          </p>

        </div>


        <div className="advantages-grid">

          {advantages.map((item) => (

            <article
              className="advantage-card"
              key={item.number}
            >

              <span className="advantage-number">
                {item.number}
              </span>

              <div className="advantage-icon">
                +
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="advantage-arrow">
                ↗
              </span>

            </article>

          ))}

        </div>

      </section>


      {/* ================= LIFESTYLE GALLERY ================= */}

      <section className="gallery-section">

        <div className="section-label">
          <span>04</span>
          LIFE INSIDE
        </div>

        <div className="gallery-heading">

          <h2>
            Spaces that feel
            <em> like yours.</em>
          </h2>

          <p>
            Because the right home is not only about square
            feet. It is about how the space makes you feel.
          </p>

        </div>


        <div className="gallery-grid">

          <div className="gallery-main">

            <img
              src={`${import.meta.env.BASE_URL}hall.jpg`}
              alt="Luxury home interior"
            />

            <div className="gallery-caption">
              <span>01</span>
              Contemporary Living
            </div>

          </div>


          <div className="gallery-small">

            <img
              src={`${import.meta.env.BASE_URL}bedroom.jpg`}
              alt="Premium bedroom interior"
            />

            <div className="gallery-caption">
              <span>02</span>
              Quiet Luxury
            </div>

          </div>


          <div className="gallery-small">

            <img
              src={`${import.meta.env.BASE_URL}washroom.jpg`}
              alt="Luxury dining interior"
            />

            <div className="gallery-caption">
              <span>03</span>
              Modern Living
            </div>

          </div>

        </div>

      </section>


      {/* ================= MARKET ================= */}

      <section
        id="market"
        className="market-section"
      >

        <div className="section-label">
          <span>05</span>
          MARKET INTELLIGENCE
        </div>

        <div className="market-layout">

          <div className="market-copy">

            <h2>
              Know the market.
              <em> Own the opportunity.</em>
            </h2>

            <p>
              Real estate decisions become easier when you
              understand the numbers behind them.
            </p>

            <div className="market-highlight">

              <strong>+112%</strong>

              <span>
                Illustrative market growth
                <br />
                2022 — 2026
              </span>

            </div>

          </div>


          <div className="market-chart">

            {marketData.map((item) => (

              <div
                className="chart-column"
                key={item.year}
              >

                <div className="chart-value">
                  {item.value}
                </div>

                <div
                  className="chart-bar"
                  style={{
                    height: `${item.value * 2.5}px`,
                  }}
                />

                <span>
                  {item.year}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CALCULATORS ================= */}

      <section
        id="calculators"
        className="calculators-section"
      >

        <div className="section-label">
          <span>06</span>
          PROPERTY CALCULATORS
        </div>

        <div className="calculator-heading">

          <h2>
            Numbers made
            <em> beautifully simple.</em>
          </h2>

          <p>
            Get a quick estimate before your property
            conversation begins.
          </p>

        </div>


        <div className="calculator-grid">

          <div className="calculator-card">

            <div className="calculator-top">
              <span>01</span>
              HOME LOAN
            </div>

            <h3>Monthly EMI</h3>

            <div className="calculator-result">

              <small>
                Estimated monthly payment
              </small>

              <strong>
                ₹{formattedINR(emi)}
              </strong>

            </div>


            <label>
              Loan Amount
              <span>
                ₹{formattedINR(loanAmount)}
              </span>
            </label>

            <input
              type="range"
              min="1000000"
              max="50000000"
              step="100000"
              value={loanAmount}
              onChange={(e) =>
                setLoanAmount(Number(e.target.value))
              }
            />


            <label>
              Interest Rate
              <span>
                {interestRate}%
              </span>
            </label>

            <input
              type="range"
              min="5"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(Number(e.target.value))
              }
            />


            <label>
              Loan Tenure
              <span>
                {loanYears} Years
              </span>
            </label>

            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={loanYears}
              onChange={(e) =>
                setLoanYears(Number(e.target.value))
              }
            />


            <div className="calculator-summary">

              <div>
                <span>Total Interest</span>

                <strong>
                  ₹{formattedINR(totalInterest)}
                </strong>
              </div>

              <div>
                <span>Total Payment</span>

                <strong>
                  ₹{formattedINR(totalPayment)}
                </strong>
              </div>

            </div>

          </div>


          <div className="calculator-card area-calculator">

            <div className="calculator-top">
              <span>02</span>
              AREA CONVERTER
            </div>

            <h3>
              Understand your space.
            </h3>

            <div className="area-input">

              <input
                type="number"
                value={area}
                onChange={(e) =>
                  setArea(Number(e.target.value))
                }
              />

              <select
                value={areaUnit}
                onChange={(e) =>
                  setAreaUnit(e.target.value)
                }
              >

                <option value="sqft">
                  Sq. Ft.
                </option>

                <option value="sqm">
                  Sq. M.
                </option>

              </select>

            </div>


            <div className="area-result">

              <span>
                Approximate conversion
              </span>

              <strong>
                {convertedArea.toFixed(2)}
              </strong>

              <small>
                {areaUnit === "sqft"
                  ? "Square Metres"
                  : "Square Feet"}
              </small>

            </div>


            <div className="area-note">
              Useful when comparing property
              brochures, listings and floor plans.
            </div>

          </div>

        </div>

      </section>


      {/* ================= LOCATION ================= */}

      <section
        id="location"
        className="location-section"
      >

        <div className="location-copy">

          <div className="section-label">
            <span>07</span>
            BEST LOCATION
          </div>

          <h2>
            Mira Road.
            <em> Connected to more.</em>
          </h2>

          <p>
            A fast-evolving residential destination with
            improving connectivity, lifestyle infrastructure
            and strong access to Mumbai and Thane.
          </p>


          <div className="location-points">

            <div>
              <strong>01</strong>
              <span>Metro Connectivity</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Western Express Access</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Schools & Hospitals</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Retail & Lifestyle</span>
            </div>

          </div>


          {/* FIXED GOOGLE MAPS LINK */}

          <a
            className="map-button"
            href="https://maps.app.goo.gl/ivk7XAhoXLeTgWPm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Google Maps
            <span>↗</span>
          </a>

        </div>


        <div className="location-map">

          <div className="map-grid" />

          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-road road-three" />

          <div className="map-pin pin-mira">
            <span />
            MIRA ROAD
          </div>

          <div className="map-pin pin-thane">
            <span />
            THANE
          </div>

          <div className="map-pin pin-mumbai">
            <span />
            MUMBAI
          </div>

          <div className="map-distance">
            <strong>LOCATION</strong>
            <span>CONNECTED</span>
          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section
        id="faq"
        className="faq-section"
      >

        <div className="section-label">
          <span>08</span>
          FREQUENTLY ASKED
        </div>

        <div className="faq-layout">

          <div>

            <h2>
              Questions,
              <em> answered.</em>
            </h2>

            <p>
              Everything you need to know before starting
              your property search.
            </p>

          </div>


          <div className="faq-list">

            {faqs.map((faq, index) => (

              <div
                className={`faq-item ${
                  activeFaq === index ? "active" : ""
                }`}
                key={faq.q}
              >

                <button
                  onClick={() =>
                    setActiveFaq(
                      activeFaq === index ? null : index
                    )
                  }
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {faq.q}
                  </strong>

                  <i>
                    {activeFaq === index ? "−" : "+"}
                  </i>

                </button>


                <div className="faq-answer">

                  <p>
                    {faq.a}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT CTA ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-glow" />

        <div className="contact-content">

          <div className="section-label">
            <span>09</span>
            START YOUR SEARCH
          </div>

          <h2>
            Your next address
            <em> starts here.</em>
          </h2>

          <p>
            Tell us what you are looking for and let us
            help you discover the right property.
          </p>


          <div className="contact-buttons">

            {/* FIXED WHATSAPP */}

            <a
              className="primary-button"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
              <span>↗</span>
            </a>


            {/* FIXED PHONE */}

            <a
              className="secondary-button"
              href={`tel:${PHONE_NUMBER}`}
            >
              Call +91 98765 43210
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="brand">

              <span className="brand-mark">
                DR
              </span>

              <span className="brand-copy">
                <strong>DEMO</strong>
                <span>REALTY</span>
              </span>

            </div>

            <p>
              Curated homes.
              <br />
              Smarter property decisions.
            </p>

          </div>


          <div className="footer-column">

            <span>EXPLORE</span>

            <button
              onClick={() =>
                scrollToSection("properties")
              }
            >
              Properties
            </button>

            <button
              onClick={() =>
                scrollToSection("experience")
              }
            >
              Experience
            </button>

            <button
              onClick={() =>
                scrollToSection("market")
              }
            >
              Market
            </button>

          </div>


          <div className="footer-column">

            <span>TOOLS</span>

            <button
              onClick={() =>
                scrollToSection("calculators")
              }
            >
              EMI Calculator
            </button>

            <button
              onClick={() =>
                scrollToSection("location")
              }
            >
              Location
            </button>

            <button
              onClick={() =>
                scrollToSection("faq")
              }
            >
              FAQ
            </button>

          </div>


          <div className="footer-column">

            <span>CONTACT</span>

            {/* FIXED PHONE */}

            <a
              href={`tel:${PHONE_NUMBER}`}
            >
              +91 98765 43210
            </a>


            {/* FIXED WHATSAPP */}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <span>
              Mira Road East, Mumbai
            </span>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Demo Realty. All rights reserved.
          </span>

          <span>
            Designed for a premium property experience.
          </span>

        </div>

      </footer>


      {/* ================= PROPERTY MODAL ================= */}

      {selectedProperty && (

        <div
          className="property-modal"
          onClick={() =>
            setSelectedProperty(null)
          }
        >

          <div
            className="property-modal-inner"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedProperty(null)
              }
              aria-label="Close property details"
            >
              ×
            </button>


            <div className="modal-gallery">

              <img
                src={
                  selectedProperty.gallery[
                    propertyImage
                  ]
                }
                alt={selectedProperty.name}
              />


              <div className="modal-gallery-controls">

                <button
                  onClick={() =>
                    setPropertyImage(
                      (
                        propertyImage -
                        1 +
                        selectedProperty.gallery.length
                      ) %
                        selectedProperty.gallery.length
                    )
                  }
                >
                  ←
                </button>

                <span>
                  {propertyImage + 1} /{" "}
                  {selectedProperty.gallery.length}
                </span>

                <button
                  onClick={() =>
                    setPropertyImage(
                      (propertyImage + 1) %
                        selectedProperty.gallery.length
                    )
                  }
                >
                  →
                </button>

              </div>

            </div>


            <div className="modal-content">

              <span className="modal-type">
                {selectedProperty.type}
              </span>

              <h2>
                {selectedProperty.name}
              </h2>

              <p className="modal-location">
                ⌖ {selectedProperty.location}
              </p>


              <div className="modal-price">
                {selectedProperty.price}
              </div>


              <p className="modal-description">
                {selectedProperty.description}
              </p>


              <div className="modal-features">

                {selectedProperty.features.map(
                  (feature) => (

                    <div key={feature}>
                      <span>✓</span>
                      {feature}
                    </div>

                  )
                )}

              </div>


              <div className="modal-meta">

                <div>
                  <span>AREA</span>

                  <strong>
                    {selectedProperty.area}
                  </strong>
                </div>

                <div>
                  <span>STATUS</span>

                  <strong>
                    {selectedProperty.status}
                  </strong>
                </div>

              </div>


              <div className="modal-actions">

                {/* FIXED WHATSAPP */}

                <a
                  className="primary-button"
                  href={getWhatsAppLink(
                    selectedProperty.name
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp
                  <span>↗</span>
                </a>


                {/* FIXED PHONE */}

                <a
                  className="secondary-button"
                  href={`tel:${PHONE_NUMBER}`}
                >
                  Call Agent
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
