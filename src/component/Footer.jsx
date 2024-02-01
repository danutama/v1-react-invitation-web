import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Video from './Video';
import DisqusComments from './Discus';
import stempel from '../assets/stempel.png';
import kkn1 from '../assets/kkn1.jpg';
import kkn2 from '../assets/kkn2.jpg';
import kkn3 from '../assets/kkn3.jpg';
import kkn4 from '../assets/kkn4.jpg';
import kkn5 from '../assets/kkn5.jpg';
import kkn6 from '../assets/kkn6.jpg';

const Footer = () => {
  return (
    <div>
      <section id="section-3">
        <div className="container">
          <p className="pra-kkn-title" data-aos="fade-right" data-aos-duration="1000">
            Dokumentasi Pra-KKN
          </p>

          <Video />

          <div className="images-wrapper">
            <img src={kkn5} className="pra-kkn" alt="pra-kkn" data-aos="fade-up" data-aos-duration="1000" />
            <img src={kkn6} className="pra-kkn" alt="pra-kkn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
            <img src={kkn1} className="pra-kkn" alt="pra-kkn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" />
            <img src={kkn2} className="pra-kkn" alt="pra-kkn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" />
            <img src={kkn3} className="pra-kkn" alt="pra-kkn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" />
            <img src={kkn4} className="pra-kkn" alt="pra-kkn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" />
          </div>
          <div className="terima-kasih-wrapper">
            <p className="terima-kasih">Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memenuhi undangan ini.</p>
            <img src={stempel} alt="stempel" />
            <p className="tanda-tangan">&mdash; Panitia Pelaksana &mdash;</p>
          </div>

          <DisqusComments />

          <p className="kolaborasi text-shadow">Kolaborasi</p>
          <p className="kolaborasi-text">Universitas Mpu Tantular - Sentra Terpadu Pangudi Luhur Bekasi - Kementerian Sosial RI</p>

          <div className="info-kampus">
            <p>
              Kampus A<br />
              Jl. Cipinang Besar No.2 Jakarta Timur
            </p>
            <a href="https://pmb.mputantular.ac.id" target="_blank">
              Informasi Penerimaan Mahasiswa Baru
            </a>
          </div>

          <div className="media-sosial-wrapper">
            <p>Media Sosial</p>
            <div className="media-sosial">
              <a href="https://www.youtube.com/@KreatifPembelajaran" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://instagram.com/kreatifpembelajaran" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://instagram.com/senandungisyarathati" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <p className="credit-footer">&copy;2024 KKN Kolaborasi<br/>Universitas Mpu Tantular</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
