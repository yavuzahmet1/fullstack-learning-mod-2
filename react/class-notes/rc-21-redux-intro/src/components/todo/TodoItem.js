import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { degistir, sil } from "../../redux/actions/todoActions";

const TodoItem = ({ a }) => {
  console.log(a);
  
  const dispatch=useDispatch()

  return (
    <div
      style={{
        background: a.completed ? "lightgray" : "orange",
        textDecoration: a.completed ? "line-through" : "none",
        borderRadius: "5px",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{a.task}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"

            onClick={()=>dispatch(degistir(a.task))}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
             onClick={()=>dispatch(sil(a))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
