import { fetchImages } from "../libs/FetchImage";

const Gallery = () => {
  return (
    <div className="w-full h-80 flex  bg-red-800">
      {/* left div */}
      <div className="w-full overflow-auto bg-green-600">
        {fetchImages.map((ele, index) => {
          return (
            <div
              style={{ backgroundImage: `url(${ele.Url})` }}
              className={`bg-center bg-no-repeat bg-cover w-28 h-36 bg-blue-500`}
            />
          );
        })}

        <div>priyankara</div>
      </div>
      {/* right div */}
      <div>right</div>
    </div>
  );
};

export default Gallery;
