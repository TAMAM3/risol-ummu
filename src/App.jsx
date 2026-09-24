import "./App.css";
import React, { useState } from "react";

/*
=========================================================
LINK / KONTAK
=========================================================
*/

const WHATSAPP_NUMBER = "6281263834834";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Risol Ummu, saya ingin memesan risol."
  )}`;

const INSTAGRAM_URL =
  "https://www.instagram.com/risolummu/";


// Sementara diarahkan ke halaman utama.
// Kalau nanti sudah punya link outlet langsung,
// cukup ganti dua URL ini.
const GOFOOD_URL =
  "https://gofood.co.id/";

const SHOPEEFOOD_URL =
  "https://www.shopeefood.co.id/";



/*
=========================================================
APP
=========================================================
*/

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="website">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="navbar-inner">

<a
  href="#home"
  className="brand"
  onClick={() => setMenuOpen(false)}
>

  <div className="brand-avatar">
    <div className="avatar-placeholder">
      👩🏻‍🍳
    </div>
  </div>

  <div className="brand-name">
    Risol Ummu
  </div>

</a>



          <nav className={`navigation ${menuOpen ? "open" : ""}`}>

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#tentang"
              onClick={() => setMenuOpen(false)}
            >
              Tentang Kami
            </a>

            <a
              href="#produk"
              onClick={() => setMenuOpen(false)}
            >
              Produk
            </a>

            <a
              href="#outlet"
              onClick={() => setMenuOpen(false)}
            >
              Outlet
            </a>

            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
            >
              Kontak
            </a>

          </nav>


          <div className="nav-social">

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="nav-instagram"
              aria-label="Instagram Risol Ummu"
            >
              ◎
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="nav-whatsapp"
              aria-label="WhatsApp Risol Ummu"
            >
              ☎
            </a>

          </div>


          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>


        </div>

      </header>




      {/* =================================================
          HERO
      ================================================= */}

<section className="hero" id="home">

  {/* Background hero.jpg */}
  <div className="hero-background"></div>

  {/* Gradient gelap di kiri supaya tulisan terbaca */}
  <div className="hero-overlay"></div>

  <div className="hero-content">

    <div className="hero-text">

      <div className="mini-label">
        OLEH-OLEH KHAS MEDAN
      </div>

      <h1>
        Risol Lezat,
      </h1>

      <h2>
        Oleh-Oleh Hebat dari Medan!
      </h2>

      <div className="hero-divider"></div>

      <p>
        Halal &amp; Tanpa Pengawet Sejak 2014
      </p>

      <div className="hero-buttons">

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-gold"
        >
          Pesan via WhatsApp
        </a>

        <a
          href="#produk"
          className="btn btn-white"
        >
          Lihat Produk
        </a>

      </div>

      <div className="hero-order-links">

        <span>
          Pesan online:
        </span>

        <a
          href={GOFOOD_URL}
          target="_blank"
          rel="noreferrer"
        >
          GoFood
        </a>

        <b>•</b>

        <a
          href={SHOPEEFOOD_URL}
          target="_blank"
          rel="noreferrer"
        >
          ShopeeFood
        </a>

      </div>

    </div>

  </div>


  {/* Wave bawah hero */}
  <div className="hero-waves">

    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
    >

      <path
        className="wave-gold"
        d="
          M0,65
          C180,120 330,120 490,72
          C650,23 785,25 930,73
          C1085,125 1245,128 1440,65
          L1440,160
          L0,160
          Z
        "
      />

      <path
        className="wave-paper"
        d="
          M0,78
          C180,133 330,133 490,85
          C650,36 785,38 930,86
          C1085,138 1245,141 1440,78
          L1440,160
          L0,160
          Z
        "
      />

    </svg>

  </div>



</section>




      {/* =================================================
          PAPER CONTENT
      ================================================= */}

      <main className="paper">


        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          className="about-section"
          id="tentang"
        >

          <div className="about-text">

            <SectionTitle title="Tentang Kami" />

            <h3>
              Dari Pasar Tradisional Hingga Favorit Keluarga
            </h3>

            <p>
              Berdiri sejak 2014, Risol Ummu dimulai dari
              usaha kecil yang berawal berjualan di pasar
              tradisional Medan.
            </p>

            <p>
              Dengan resep yang dipertahankan dan bahan
              berkualitas, Risol Ummu menghadirkan jajanan
              tradisional yang cocok untuk keluarga maupun
              oleh-oleh.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="small-red-button"
            >
              Hubungi Kami
            </a>

          </div>



          {/* FOTO PEMILIK */}

          <div className="about-photo">

            <div className="photo-placeholder">

              <div className="placeholder-icon">
                👩🏻
              </div>

              <span>
                FOTO PEMILIK
              </span>

              <small>
                Tempat gambar pemilik
              </small>

            </div>

          </div>

        </section>



        <DecorativeLine />



        {/* =================================================
            PRODUCTS
        ================================================= */}

        <section
          className="products-section"
          id="produk"
        >

          <SectionTitle title="Produk Kami" />

          <p className="section-description">
            Risol &amp; Kue Tradisional Nusantara
          </p>


          <div className="products-grid">


            <ProductCard
              title="Risol Frozen"
              description="Praktis untuk disimpan di rumah"
            />


            <ProductCard
              title="Kue Tradisional"
              description="Jajanan tradisional favorit keluarga"
            />


            <div className="product-card">

              <div className="product-image">

                <div className="photo-placeholder">

                  <div className="placeholder-icon">
                    🍽️
                  </div>

                  <span>
                    FOTO PRODUK
                  </span>

                  <small>
                    Tempat gambar
                  </small>

                </div>

              </div>


              <div className="product-content">

                <h3>
                  100% Halal &amp; Fresh
                </h3>

                <p>
                  Halal &amp; Tanpa Pengawet
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="product-button"
                >
                  Pesan
                </a>

              </div>

            </div>

          </div>

        </section>



        {/* =================================================
            OUTLET
        ================================================= */}

        <section
          className="outlet-section"
          id="outlet"
        >

          <SectionTitle title="Outlet Kami" />

          <p className="section-description">
            Kunjungi Cabang Kami di Medan
          </p>


          <div className="outlet-grid">


            <OutletCard
              address="Jl. Setia Budi No. 3"
              city="Medan Selayang"
              mapQuery="Risol Ummu Jl Setia Budi Medan"
            />


            <OutletCard
              address="Jl. Kenanga Raya No. 7"
              city="Medan Selayang"
              mapQuery="Risol Ummu Jl Kenanga Raya Medan"
            />


            <OutletCard
              address="Jl. Teuku Cik Ditiro No. 72"
              city="Medan Polonia"
              mapQuery="Risol Ummu Teuku Cik Ditiro Medan"
            />

          </div>

        </section>



        <DecorativeLine />



        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          className="contact-section"
          id="kontak"
        >

          <SectionTitle title="Hubungi Kami" />

          <h3>
            Pesan Sekarang!
          </h3>

          <p className="opening-hours">
            Hubungi kami untuk pemesanan dan informasi produk
          </p>



          {/* NOMOR */}

          <div className="phone-list">

            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
            >
              <span className="phone-icon">
                ☎
              </span>

              0812 6383 4834
            </a>

          </div>



          {/* SOCIAL / ORDER */}

          <div className="contact-buttons">

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-button whatsapp"
            >
              <span className="contact-button-icon">
                ☎
              </span>

              <span>
                <small>
                  CHAT LANGSUNG
                </small>

                WhatsApp
              </span>

            </a>


            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-button instagram"
            >
              <span className="contact-button-icon">
                ◎
              </span>

              <span>
                <small>
                  FOLLOW KAMI
                </small>

                Instagram
              </span>

            </a>


            <a
              href={GOFOOD_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-button gofood"
            >
              <span className="contact-button-icon">
                🛵
              </span>

              <span>
                <small>
                  PESAN ONLINE
                </small>

                GoFood
              </span>

            </a>


            <a
              href={SHOPEEFOOD_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-button shopee"
            >
              <span className="contact-button-icon">
                🛍️
              </span>

              <span>
                <small>
                  PESAN ONLINE
                </small>

                ShopeeFood
              </span>

            </a>

          </div>



          {/* MAIN CTA */}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="main-order-button"
          >

            <span>
              💬
            </span>

            Pesan Risol Sekarang

          </a>

        </section>

      </main>



      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-copy">

            © 2026 Risol Ummu.
            All Rights Reserved.

          </div>


          <div className="footer-social">

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              ☎
            </a>

            <a
              href={GOFOOD_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GoFood"
            >
              🛵
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}



/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({ title }) {

  return (

    <div className="section-title">

      <h2>
        {title}
      </h2>

      <div className="title-decoration">

        <span></span>

        <i>
          ◆
        </i>

        <span></span>

      </div>

    </div>

  );
}



/* =========================================================
   DECORATIVE LINE
========================================================= */

function DecorativeLine() {

  return (

    <div className="decorative-line">

      <span></span>

      <i>
        ◆
      </i>

      <span></span>

    </div>

  );
}



/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  title,
  description
}) {

  return (

    <div className="product-card">

      <div className="product-image">

        <div className="photo-placeholder">

          <div className="placeholder-icon">
            🍽️
          </div>

          <span>
            FOTO PRODUK
          </span>

          <small>
            Tempat gambar
          </small>

        </div>

      </div>


      <div className="product-content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="product-button"
        >
          Pesan
        </a>

      </div>

    </div>

  );
}



/* =========================================================
   OUTLET CARD
========================================================= */

function OutletCard({
  address,
  city,
  mapQuery
}) {

  const mapUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      mapQuery
    )}`;


  return (

    <div className="outlet-card">

      <div className="outlet-header">

        <div className="location-circle">
          ●
        </div>

        <div className="outlet-address">

          <strong>
            {address}
          </strong>

          <span>
            {city}
          </span>

        </div>

      </div>


      <div className="outlet-image">

        <div className="photo-placeholder">

          <div className="placeholder-icon">
            🏪
          </div>

          <span>
            FOTO OUTLET
          </span>

          <small>
            Tempat gambar outlet
          </small>

        </div>

      </div>


      <div className="outlet-footer">

        <a
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          📍 Lihat di Google Maps
        </a>

      </div>

    </div>

  );
}


export default App;
