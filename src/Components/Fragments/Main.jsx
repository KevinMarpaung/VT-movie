import Navbar from "../Elements/Navbar";
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="bg-linear-to-r from-red-500 to-blue-black">
        <div className="flex p-10">
          <img src="img/image 1.png" alt="" />
          <div className="mx-10">
            <h1 className="text-7xl">Movie Poster</h1>
            <p className="w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
              facilisis ullamcorper egestas diam egestas sed placerat diam
              commodo. Amet et nisl a nam eget vitae. Integer ac id sed
              vulputate nunc amet. Nulla tincidunt sit odio amet porttitor. At
              auctor
            </p>
            <button className="bg-yellow-300 p-2 rounded-md text-black mt-8">
              Tonton Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
