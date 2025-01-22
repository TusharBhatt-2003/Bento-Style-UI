const Image = ({ imgSrc }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgSrc})` }}
      className="bg-cover bg-center w-1/3 rounded-lg overflow-hidden"
    ></div>
  );
};

export default Image;
