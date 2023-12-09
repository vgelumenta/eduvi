import React from 'react';

const DisplayCourses = ({ id, title, price, cover }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={id}>
      <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] hover:shadow-bs1 hover:w-full w-full">       
       <img
          className=" md:h-auto object-cover rounded-[10px] w-full"
          src={cover}
          alt="image"
        />
      </div>
      
      <div className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtMetropolisSemiBold24">{title}</div>
      <div className="flex flex-row items-start justify-between mt-3 w-full">
        <div className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl">
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

export { DisplayCourses };