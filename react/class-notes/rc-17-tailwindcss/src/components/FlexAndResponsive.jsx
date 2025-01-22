import React from "react";

const FlexAndResponsive = () => {
  return (
    <div>
      <h1 className="text-center">Flex And Responsive</h1>
      <div className="flex flex-wrap">
        <div className="bg-fuchsia-200 basis-1/4">01</div>
        <div className="bg-fuchsia-300 basis-1/4">02</div>
        <div className="bg-fuchsia-400 basis-1/4">03</div>
        <div className="bg-fuchsia-500 basis-1/4">04</div>
        <div className="bg-fuchsia-600 basis-2/4">05</div>
        <div className="bg-fuchsia-700 basis-2/4">06</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {Array.from({ length: 8 }, (_, item) => (
          <div className="bg-teal-500">{item} </div>
        ))}
      </div>
    </div>
  );
};

export default FlexAndResponsive;
