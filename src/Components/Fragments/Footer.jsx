const Footer = () => {
  return (
    <>
      <div className="flex justify-between mt-20 mx-20">
        <div>
          <h1>
            <span className="text-red-500 text-2xl font-bold">VT</span> movie
          </h1>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>peraturan</h1>
          <h1>Ketentuan Penggunaan</h1>
          <h1>Kebijakan dan Peraturan Umum</h1>
          <h1>Kebijakan Privasi</h1>
          <h1>Kebijakan Kekayaan Intelektual</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Membantu</h1>
          <h1>Tanya Jawab </h1>
          <h1>Kontak </h1>
          <h1>Komentar </h1>
        </div>
      </div>
      <div className="my-20 mx-8">
        <h1>Perusahaan Saham Gabungan Pengembangan Film VT</h1>
        <h1>Email: support@vtmovie.vn | Hotline: 012.345.678 (Gratis)</h1>
        <h1>
          Izin Penyelenggaraan Jasa Radio dan Televisi Berbayar No. 192/GP-BTTTT
          dikeluarkan pada tanggal 2 Agustus 2021.
        </h1>
      </div>
    </>
  );
};

export default Footer;
