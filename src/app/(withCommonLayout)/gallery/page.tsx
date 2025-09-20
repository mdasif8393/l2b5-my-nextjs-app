import Image from "next/image";
import React from "react";
import nextImage from "@/assets/nextImage.jpg";

const Gallery = () => {
  return (
    <div>
      {/* url imaga */}
      <Image
        src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg"
        alt="image"
        height={500}
        width={500}
        className="mx-auto"
      />
      {/* local image from asset folder */}
      <Image
        src={nextImage}
        alt="s"
        height={500}
        width={500}
        className="mx-auto"
      />
      {/* local image from public folder */}
      <Image
        src="/nextImage.jpg"
        alt="s"
        height={500}
        width={500}
        className="mx-auto"
      />
    </div>
  );
};

export default Gallery;
