import React from 'react';

const DisplayBook = ({ id, title, price, cover }) => {
  const imageStyle = {
    height: '250px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={id}>
      <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
        <img
          style={imageStyle}
          src={cover}
          alt="image"
        />
      </div>
      <div className="mt-3.5 text-gray-900 text-base">{title}</div>
      <div className="flex flex-row items-start justify-between mt-3 w-full">
        <div className="text-deep_orange-400 text-lg">
          Rp.{price.toString()},-
        </div>
        <img
          className="h-4 mt-0.5"
          src="src/assets/images/img_mobile.svg"
          alt="close"
        />
      </div>
    </div>
  );
};

export { DisplayBook };
