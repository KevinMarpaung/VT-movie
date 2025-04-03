const CardFilim = ({ title, deskripsi, gambar, bahasa, rate, release }) => {
  return (
    <div className="w-[200px] text-center h-[330px]   shadow-md border rounded-sm shadow-red-500 p-2">
      <img className="w-full h-[200px] " src={gambar} />
      <h1 className="text-center font-black ">{title}</h1>{" "}
      <p className="text-start italic opacity-60">bahasa:{bahasa}</p>
      <p className="text-start italic opacity-60">rating:{rate}</p>
      <p className="text-start italic opacity-60"> release:{release}</p>
    </div>
  );
};

export default CardFilim;
