import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import guests, { convertToSlug } from './Data';
import shape from '../assets/hero.svg';
import logo from '../assets/logo-kkn.png';
import umt from '../assets/umt.png';
import notfound from '../assets/notfound.svg';
import Isi from './Isi';
import Footer from './Footer';
import Navbar from './Navbar';

const GuestInvitation = () => {
  const { name } = useParams();
  const formattedName = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const guest = guests.find((guest) => convertToSlug(guest) === name); 

  useEffect(() => {
    if (guest) {
      document.title = `${guest} | Senandung Isyarat Hati`;
    } else {
      document.title = 'Nama tidak terdaftar';
    }

    window.scrollTo(0, 0);
  }, [guest]);

  return (
    <div>
      {guest ? (
        <section id="hero">
          <div className="container">
            <div className="logo-wrapper">
              <img src={umt} className="hero-logo umt" alt="logo" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200" />
              <img src={logo} className="hero-logo" alt="logo" data-aos="fade-right" data-aos-duration="2000" />
            </div>

            <img src={shape} className="hero-shape" alt="shape" />
            <img src={shape} className="hero-shape-2" alt="shape" />
            <p className="subtitle-2" data-aos="fade-right" data-aos-duration="2000">
              Universitas Mpu Tantular
            </p>
            <p className="subtitle" data-aos="fade-right" data-aos-delay="200" data-aos-duration="2000">
              Kuliah Kerja Nyata Kolaborasi Bersama Anak Difabel 20.01.2024
            </p>
            <div className="hero-title hero-title-1">
              <span data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
                Senandung
              </span>
            </div>
            <div className="hero-title hero-title-2">
              <span data-aos="fade-left" data-aos-delay="600" data-aos-duration="2000">
                Isyarat Hati
              </span>
            </div>
            <div className="label-tamu">
              <p className="salam-yth" data-aos="fade-up" data-aos-duration="2000">
                Undangan
                <br />
                Kepada Yth. Bapak/Ibu/Saudara/i :
              </p>
              <p className="nama-tamu" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">{guest}</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="not-found">
          <div className="container">
            <h1>Not Found</h1>
            <p>
              Maaf, undangan atas nama '{formattedName}' tidak tersedia.{' '}
              <Link to="/" className="back-btn">
                Silakan kembali
              </Link>
            </p>
            <img src={notfound} alt="Not Found" className="image-404" />
          </div>
        </section>
      )}

      {guest && (
        <>
          <Isi />
          <Footer />
          <Navbar />
        </>
      )}
    </div>
  );
};

export default GuestInvitation;
