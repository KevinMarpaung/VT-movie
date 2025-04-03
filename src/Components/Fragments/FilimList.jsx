import { useState, useEffect } from "react";
import CardFilim from "../Elements/CardFilim";

const FilimList = () => {
  const [value, setValue] = useState([]);

  const data = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=21a30c4cb89700aa5a0e6008dde69b54"
      );
      const json = await response.json();
      setValue(json.results);
      console.log(json);
    } catch (error) {
      console.log("data gagal diambil", error);
    }
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <h1 className="mx-20 text-2xl p-2 shadow shadow-amber-600 rounded-2xl w-fit my-2">
        Action
      </h1>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        {value.map((val) => {
          const imgUrl = val.poster_path
            ? `https://image.tmdb.org/t/p/w500${val.poster_path}`
            : "'https://via.placeholder.com/200';";
          return (
            <CardFilim
              key={val.id}
              title={val.title}
              deskripsi={val.overview}
              gambar={imgUrl}
              bahasa={val.original_language}
              rate={val.vote_average}
              release={val.release_date}
            ></CardFilim>
          );
        })}
      </div>

      {/* <h1 className="mx-20 text-2xl p-2 shadow shadow-amber-600 rounded-2xl w-fit my-2">
        Horor
      </h1>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        <CardFilim></CardFilim>
      </div>

      <h1 className="mx-20 text-2xl p-2 shadow shadow-amber-600 rounded-2xl w-fit my-2">
        Romantis
      </h1>
      <div className="flex gap-10 items-center justify-center">
        <CardFilim></CardFilim>
      </div> */}
    </div>
  );
};

export default FilimList;
