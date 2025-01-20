import React, { useState } from "react";

//* Onmousemove olayı, fare işaretçisi div öğesinin üzerinde her hareket ettiğinde tetiklenir.

//* Mouseover olayı, fare işaretçisi div öğesine ve onun alt öğelerine girdiğinde tetiklenir.

//* Mouseenter olayı yalnızca fare işaretçisi div öğesine girdiğinde tetiklenir.

//? pageX/Ykoordinatlar, oluşturulan sayfanın tamamının sol üst köşesine göredir (kaydırılarak gizlenen parçalar dahil),

//? clientX/YKoordinatlar sayfanın görünen kısmının sol üst köşesine göredir ve tarayıcı penceresinden "görünür" .

//? screenX/Yfiziksel ekrana göredir.

const MouseEvents = () => {
  const [visible, setVisible] = useState(false);
  const [coordX, setCoordX] = useState("");
  const [coordY, setCoordY] = useState("");

  const handleDoubleClick = (e) => e.target.classList.toggle("bg-danger");

  const handleMouseMove = (e) => {
    //? mutlak koordinatlar
    // console.log("X:", e.pageX);
    // console.log("Y:", e.pageY);
    // console.log("X:", e.clientX);
    // console.log("Y:", e.clientY);

    //? göreceli koordinatlar
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <div
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        id="todo-1"
        className="bg-success text-light w-50 p-4"
      >
        onMouseOver & onMouseLeave
      </div>
      {visible && <p className="text-danger">Mouse üzerimde</p>}
      <div
        onDoubleClick={handleDoubleClick}
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
      >
        onDoubleClick
      </div>
      <div
        onMouseMove={handleMouseMove}
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
      >
        <span>onMouseMove</span>
      </div>
      <div
        onMouseOver={handleMouseMove}
        id="todo-4"
        className="bg-success text-light w-50 p-4 my-4"
      >
        <span>onMouseOver</span>
      </div>
      <div
        onMouseEnter={handleMouseMove}
        id="todo-5"
        className="bg-success text-light w-50 p-4 my-4"
      >
        <span>onMouseEnter</span>
      </div>
      X: {coordX} and Y:{coordY}
    </div>
  );
};

export default MouseEvents;
