import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";


const TodoItem = () => {


  return (
    <div
      style={{
       
        borderRadius: "5px",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"

      
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
