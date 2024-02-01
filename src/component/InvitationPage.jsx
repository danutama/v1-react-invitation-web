// InvitationPage.jsx
import React, { useEffect } from 'react';
import shape from '../assets/hero.svg';
import logo from '../assets/logo-kkn.png';
import umt from '../assets/umt.png';
import Isi from './Isi';
import Footer from './Footer';
import Navbar from './Navbar';

const InvitationPage = () => {
  useEffect(() => {
    document.title = `Senandung Isyarat Hati`;
  });

  return (
    <div>
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
            <p className="nama-tamu" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">Masyarakat Umum</p>
          </div>
        </div>
      </section>

      <Isi/>
      <Footer/>
      <Navbar/>
    </div>
  );
};

export default InvitationPage;
