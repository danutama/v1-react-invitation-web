import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import hook useLocation dari react-router-dom

const DisqusComments = () => {
  const location = useLocation(); // Gunakan useLocation hook
  const universalIdentifier = 'kkn-umt'; // Tentukan identifier yang sama untuk semua halaman (diubah sesuai kebutuhan)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kkn-umt.disqus.com/embed.js';
    script.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(script);

    // Update Disqus configuration dengan menggunakan URL dari halaman saat ini
    window.disqus_config = function () {
      this.language = 'en'; // Atur bahasa jika perlu
      this.page.identifier = universalIdentifier; // Gunakan identifier yang sama di semua halaman
      this.page.title = 'Judul Halaman'; // Ganti dengan judul halaman Anda
      this.page.url = window.location.origin + location.pathname; // Gunakan URL dari halaman saat ini
      this.callbacks.onReady.push(function () {
        // Mengubah teks placeholder kotak komentar default
        document.querySelector('.textarea__placeholder').innerHTML = 'Kirim Ucapan';
      });
    };
  }, [location.pathname]); // Tambahkan location.pathname ke dependency array useEffect untuk memperbarui saat URL berubah

  return <div id="disqus_thread"></div>;
};

export default DisqusComments;
