const Image = (props) => {
  const { src, alt, classImg } = props;
  return (
    <>
      <img src={src} alt={alt} className={classImg} />
    </>
  );
};

export default Image;
