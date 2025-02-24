

interface ITodoList{
    todos:ITodo[];
}

const TodoList:React.FC<ITodoList[]> = ({todos}) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList