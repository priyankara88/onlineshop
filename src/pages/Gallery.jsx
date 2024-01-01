import { useRef } from "react";
import { fetchImages } from "../libs/FetchImage";

const Gallery = () => {
  const slideImageRef = useRef([]);
  const MiddleImage = useRef();

  return (
    <div className="w-full h-80 flex  bg-red-800 overflow-hidden">
      {/* left div */}
      <div className="w-[30%] overflow-auto ">
        {fetchImages.map((ele, index) => {
          return (
            <div
              ref={(imgRef) => {
                slideImageRef.current[index] = imgRef;
              }}
              key={index}
              style={{ backgroundImage: `url(${ele.Url})` }}
              className={`${
                slideImageRef.current[index] === index
                  ? "border-2 to-blue-600"
                  : "border-none"
              } bg-center bg-no-repeat bg-cover w-28 h-36 bg-blue-500 m-2`}
              onClick={() => {
                console.log(
                  "slideImageRef.current[index]",
                  slideImageRef.current.key
                );
                MiddleImage.current.style.backgroundImage =
                  slideImageRef.current[index].style.backgroundImage;
              }}
            />
          );
        })}
      </div>
      {/* right div */}
      {fetchImages.map((ele, index) => {
        if (index == 0) {
          return (
            <div
              ref={MiddleImage}
              key={index}
              style={{ backgroundImage: `url(${ele.Url})` }}
              className="w-[70%] h-full bg-cover bg-center bg-no-repeat "
              onClick={() => {
                console.log("slideImageRef", slideImageRef);
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default Gallery;
