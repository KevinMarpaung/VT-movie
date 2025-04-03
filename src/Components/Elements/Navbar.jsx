const Navbar = () => {
  return (
    <div className="text-white flex justify-between  items-center  p-2 ">
      <div className="flex mx-10 gap-20 ">
        <h1>
          <span className="text-red-500 text-2xl font-bold">VT</span> movie
        </h1>
        <input
          className="border p-2 rounded-3xl px-30"
          placeholder="cari filim kesukaanmu🔍"
        ></input>
      </div>
      <div className="flex gap-15">
        <p>kategori</p>
        <p>Bangsa</p>
        <p>Film</p>
        <p>Drama</p>
        <p>Tahun rilis</p>
      </div>
    </div>
  );
};

export default Navbar;
