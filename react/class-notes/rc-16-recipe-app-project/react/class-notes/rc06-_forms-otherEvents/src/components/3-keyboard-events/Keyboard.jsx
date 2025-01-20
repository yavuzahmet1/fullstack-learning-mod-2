import React from "react";

const Keyboard = () => {
  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    // console.log(e.key);
    if (e.key === "Enter") {
      alert("form submitted");
    }
  };

  const handleCopy = (e) => {
    e.preventDefault(); //? kopyalama özelliğini engelledik
    alert("bu metin kopyalanamaz");
  };

  const handleCut = (e) => {
    e.preventDefault(); //? kesme özelliğini engelledik
    alert("bu metin kesilemez");
  };

  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>

      <input onKeyDown={handleKeyDown} type="text" className="form-control" />

      <div className="mt-3">
        <p>{}</p>
      </div>

      <div>
        <textarea
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
          onCopy={handleCopy}
          onCut={handleCut}
        ></textarea>
      </div>
    </div>
  );
};

export default Keyboard;
