import { IconButton, ListItem ,ListItemText} from "@mui/material";
import { DeleteOutline } from '@mui/icons-material'

interface ITodoListItems{
    todo:ITodo;
    toggleTodo:ToggleFn,
    deleteTodo:DeleteFn
}

const TodoListItems = ({todo,toggleTodo,deleteTodo}:ITodoListItems) => {
  return (
    <ListItem
    sx={{
        marginTop:"0.3rem",
        padding: "1rem",
        cursor: "pointer",
        backgroundColor: todo.isDone ? "#d4edda" : "#f3e5f5",
        borderRadius: "0.5rem",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: todo.isDone ? "#c3e6cb" : "#e1bee7",
          transform: "scale(1.02)",
        },
      }}
    secondaryAction={
        <IconButton onClick={()=>deleteTodo(todo.id)}   >
          <DeleteOutline sx={{ color: "#d32f2f", fontSize: "1.5rem", "&:hover": { color: "red" } }} />

        </IconButton>
    }
    >
        <ListItemText  primary={todo.task} 
        onClick={()=>toggleTodo(todo)}
        sx={{
            textDecoration: todo.isDone ? "line-through" : "none",
            color: todo.isDone ? "#6c757d" : "#4a148c",
            fontWeight: "bold",
          }}
        />
    </ListItem>
  )
}

export default TodoListItems