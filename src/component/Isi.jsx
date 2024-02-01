import React from 'react';
import CountdownTimer from './Countdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

const Isi = () => {
  return (
    <div>
      <section id="section-2">
        <div className="container">
          <div className="undangan-detail">
            <span className="shape-star">
              <FontAwesomeIcon icon={faStarOfLife} />
            </span>
            <p className="undangan-info undangan-title text-shadow" data-aos="fade-up" data-aos-duration="1000">Acara</p>
            <p className="undangan-info deskripsi" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Dengan hormat, kami mengundang Bapak/Ibu untuk berkenan menghadiri acara yang akan kami selenggarakan bersama anak Difabel pada waktu dan tempat di bawah ini :</p>
            <p className="undangan-info calendar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </p>
            <p className="undangan-info" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Sabtu, 20 Januari 2024</p>
            <p className="undangan-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">Pukul 11.00 s.d. 16.00 WIB</p>
            <p className="undangan-info" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">Atrium Mall Bassura, Jakarta Timur</p>

            <CountdownTimer />

            <iframe
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2983301052977!2d106.8780611!3d-6.224338700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f324a4f3d8ad%3A0x610648e929845480!2sMall%40Bassura!5e0!3m2!1sid!2sid!4v1703744934094!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <div className="undangan-wrapper">
            <img src={undangan} className="undangan" alt="undangan" data-aos="fade-up" data-aos-duration="2000" />
          </div> */}

          <div className="narasumber">
            <p className="narasumber-title text-shadow" data-aos="fade-up" data-aos-duration="1000">Dimeriahkan Oleh</p>
            <div className="rundown-box">
            <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Mahasiswa Universitas Mpu Tantular</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">Disabilitas Sentra Terpadu Pangudi Luhur</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">Serepina Tiur Maida - Praktisi Komunikasi, Coach PS & Assesor BNSP</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">Weshley Hutagalung - Pengamat Olahraga & Konsultan Media</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">Sigit Nugroho - ICON PR Indonesia</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">Dr. dr. Dicky Yulius, MARS</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">Nita Putri - Dancer</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">Dhea Zauta</span>
            </div>
          </div>

          <div className="rundown">
            <p className="rundown-title text-shadow" data-aos="fade-up" data-aos-duration="1000">Susunan Acara</p>
            <div className="rundown-box">
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">1. Talk show</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">2. Vocal</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">3. Dance</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">4. Pijat Refleksi</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">5. Simulasi Gadget Difabel</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">6. Simulasi Catur Difabel</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1400">7. Simulasi Bola Difabel</span>
              <span className="rundown-item" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">8. Uji Kecerdasan</span>
            </div>
          </div>
          <div className="pengantar-wrapper">
            <p className="sambutan text-shadow" data-aos="fade-up" data-aos-duration="1000">Sambutan</p>
            <p className="kata-pengantar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Segala puji dan syukur kami panjatkan kepada Tuhan Yang Maha Esa yang telah melimpahkan berkat dan rahmat-Nya kepada kita semua.
              <br />
              <br />
              Kegiatan "Senandung Isyarat Hati" merupakan program Kuliah Kerja Nyata (KKN) yang bertujuan memberikan dukungan dan wadah bagi anak-anak penyandang kebutuhan khusus atau Difabel. Hal ini juga mengutamakan perhatian terhadap
              orang tua lansia, menunjukkan kasih sayang kepada mereka, serta meningkatkan kesadaran akan kepedulian terhadap sesama. Pada tahap awal, kegiatan dimulai dengan Pra-KKN yaitu memberikan penyuluhan kepada masyarakat melalui
              kegiatan Podcast dan media sosial sebagai sarana penyampaian informasi. Kami memanfaatkan era digital ini untuk memperkenalkan karya-karya yang telah dihasilkan sehingga dapat diakses oleh berbagai kalangan di seluruh dunia.
              Selain fokus pada kegiatan yang langsung memberikan manfaat kepada anak-anak dan lansia, mahasiswa KKN juga berperan dalam memperkenalkan profil Universitas Mpu Tantular melalui karya nyata yang berkolaborasi dan bersinergi
              dengan berbagai pihak.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Isi;
