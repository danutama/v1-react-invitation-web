const guests = [
  'Danu Pratama',
  'Ava Brown',
];

export const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[.,\s]+/g, '-') // Menghapus koma, titik, dan mengganti spasi dengan strip
    .replace(/-+/g, '-') // Menghilangkan strip berlebih
    .replace(/[^\w\s-&,]/g, '') // Memperbolehkan koma, strip, dan karakter & dalam URL
    .replace(/-$/, ''); // Menghapus strip dari akhir teks jika ada
      // .replace(/[^a-z0-9-,]/g, '') // Memperbolehkan koma dan strip dalam URL
};

export default guests;
