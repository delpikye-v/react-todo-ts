import { ITodoItemProps } from './TodoGeneric';

const TodoItemComponents = ({ todo, handleRemove }: ITodoItemProps) => {
    return (
        <div className="todo-view">
            <div className="item">
                <p>{todo.todoName}</p>
            </div>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </div>
    );
};

export default TodoItemComponents;

