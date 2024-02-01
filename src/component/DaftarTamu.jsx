import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import guests from './Data';
import { convertToSlug } from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const copyToClipboard = (text) => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('✔ Pesan dan link undangan berhasil di salin! Bagikan melalui WhatsApp atau media sosial lainnya.');
};

const DaftarTamu = () => {
  useEffect(() => {
    document.title = `Daftar Tamu Undangan`;
  });
  return (
    <div>
      <section id="daftar-nama">
        <div className="container">
          <div className="daftar-tamu-wrapper">
            <p>Daftar Tamu</p>
            <Link className="daftar-tamu-home" to="/">
              Undangan umum
            </Link>
          </div>
          <div className='icon-slide'>
            <FontAwesomeIcon icon={faInfoCircle} /> Klik tombol "Salin & Bagikan" sesuai dengan nama tamu, kemudian bagikan pesan undangan melalui WhatsApp atau media sosial lainnya. <span>(scroll)</span>  <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="table-container">
            <div className="table-box">
              <table>
                <thead>
                  <tr>
                    <th className="table-header vr-line">No</th>
                    <th className="table-header vr-line">Nama</th>
                    <th className="table-header vr-line">Link Undangan</th>
                    <th className="table-header">Share</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map((guest, index) => (
                    <tr key={index}>
                      <td className="daftar-link table-number vr-line">{index + 1}</td>
                      <td className="daftar-link vr-line">{guest}</td>
                      <td className="daftar-link vr-line">https://kkn-umt.netlify.app/{`${convertToSlug(guest)}`}</td>
                      <td className="daftar-link aksi">
                        <button
                          className="btn-copy"
                          onClick={() =>
                            copyToClipboard(`Kepada Yth. Bapak/Ibu/Saudara/i,
*${guest}*

Assalamualaikum Wr. Wb.
Salam sejahtera bagi kita semua.

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk berkenan menghadiri acara yang akan kami selenggarakan bersama anak Difabel pada waktu dan tempat di bawah ini :

Hari/tgl :
Waktu :
Tempat :

Berikut link undangan acara :

https://kkn-umt.netlify.app/${convertToSlug(guest)}

Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir memenuhi undangan ini. Terima kasih.

Wassalamualaikum Wr. Wb.
Salam sejahtera.`)
                          }
                        >
                          Salin & Bagikan
                        </button>
                        <Link className="btn-lihat" to={`/${convertToSlug(guest)}`}>
                          Lihat
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='link-bottom'>
              <p>Data tamu tiap kelompok by: sekretaris</p>
              <a className='link-googledocs' href="https://docs.google.com/spreadsheets/d/1_EzhZcUMmbEofyamjiN7hQx9e9S2eajUz-49chHjgmU/edit#gid=0" target='_blank'>https://docs.google.com/spreadsheets/d/1_EzhZcUMmbEofyamjiN7hQx9e9S2eajUz-49chHjgmU/edit#gid=0</a>
            </div>
          </div>

          <p className='tabel-note'>*Saran: Gunakan nama lengkap</p>
        </div>
      </section>
    </div>
  );
};

export default DaftarTamu;
