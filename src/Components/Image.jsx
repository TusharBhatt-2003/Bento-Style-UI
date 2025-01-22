const Image = ({ imgSrc }) => {
    return (
      <div 
        className={`bg-[url('${imgSrc}')] bg-cover bg-center w-1/3 rounded-lg overflow-hidden`}
      ></div>
    );
  };
  
  export default Image;
  