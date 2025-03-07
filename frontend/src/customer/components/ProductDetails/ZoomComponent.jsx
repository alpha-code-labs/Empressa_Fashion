import React, { useRef, useState, useEffect } from "react";

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

console.log(detectDeviceType(), 'device type...')
const ZoomComponent = ({ src, imageUrl, handleActiveImageShow}) => {
  console.log(src, imageUrl, 'scr + image urla')
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [scaleFactor, setScaleFactor] = useState(2.2);  // Adjust this as needed
  const zoomRef = useRef(null);
  const lensRef = useRef(null);

  useEffect(() => {
    setBackgroundImage(`url(${src})`);
    const updateImageWidth = () => {
      if (zoomRef.current) {
        console.log('image width', zoomRef.current.offsetWidth);
      }
    };
    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
    return () => {
      window.removeEventListener("resize", updateImageWidth);
    };
  }, [src]);

  const handleMouseMove = (e) => {
    if (!zoomRef.current) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const { width, height } = zoomRef.current.getBoundingClientRect();

    // Ensure the lens position and size are correctly calculated
    const lensSize = 100;  // Adjust the size of the lens
    const lens = lensRef.current;
    const posX = offsetX - lensSize / 2;
    const posY = offsetY - lensSize / 2;

    if(lens){
      // Adjust lens position without exceeding image boundaries
      lens.style.left = `${Math.max(0, Math.min(posX, width - lensSize))}px`;
      lens.style.top = `${Math.max(0, Math.min(posY, height - lensSize))}px`;
    }
    

    // Calculate background position for zoom effect
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;
    setBackgroundPosition(`${xPercent}% ${yPercent}%`);
  };

  const [showLens, setShowLens] = useState(false);

  const handleMouseEnter = () => {
    if(detectDeviceType() == 'Mobile') return;
    setShowLens(true);
  };

  const handleMouseLeave = () => {
    setShowLens(false);
  };

  return (
    <div className="relative flex items-start">
      <div className="flex flex-col lg:flex-row  lg:flex-row-reverse lg:gap-4">
        <div className="relative zoom px-1 h-full w-full lg:w-[calc(100%-80px)] object-contain" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} ref={zoomRef}>
          <img src={src} alt="Zoomable" className="w-full h-auto" />
          {showLens  && <div
            ref={lensRef}
            className="absolute border border-black w-24 h-24"
            style={{ pointerEvents: "none" }}
          ></div>}
        </div>

        <div className="flex flex-row lg:flex-col justify-between px-1 py-2 md:py-0 z-[1]">
            {imageUrl?.map((image, index) => (
              <div  
                key={index}
                className="h-24 lg:h-26 rounded cursor-pointer"
                onClick={() => handleActiveImageShow(image)}
              >
                <img
                  src={`${image}@lq`}
                  className={`w-full h-full object-contain ${src == image && 'ring-1 lg:ring-2 ring-gray-300'}`}
                  alt={`Product ${index + 1}`}
                />
              </div>
            ))}
          </div>

      </div>

      {showLens && <div
        className="zoom-result absolute z-[100] -top-14 xl:top-0 -right-[420px] border border-gray-100 rounded-sm shadow-lg"
        style={{
          width: "396px",
          height: "600px",
          backgroundImage,
          backgroundSize: `${scaleFactor * 100}% ${scaleFactor * 100}%`, // Adjusted background size based on scaleFactor
          backgroundPosition,
        }}
      ></div>}
    </div>
  );
};

export default ZoomComponent;
