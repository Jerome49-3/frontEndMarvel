import { useState } from "react";

const Image = (props) => {
  const { src, alt, classImg } = props;
  const imgNotFound = "/imgs/imgNotFound.png";
  const [onError, setOnError] = useState(false);
  console.log("onError:", onError);

  return (
    <>
      <img
        src={!onError ? src : `${imgNotFound}`}
        alt={alt}
        className={classImg}
        onError={() => {
          setOnError(true);
        }}
      />
    </>
  );
};

export default Image;
