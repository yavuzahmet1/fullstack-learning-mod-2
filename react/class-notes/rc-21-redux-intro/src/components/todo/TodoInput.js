


const TodoInput = () => {





  return (
    <form >
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
