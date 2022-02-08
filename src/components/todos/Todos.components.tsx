import { useEffect, useRef, useState } from "react";

import TodoItemComponents from "./TodoItem.components";
import { ITodoModel } from "./TodoGeneric";

import "./Todos.style.scss";

const TodosComponents = () => {
    const [name, setName] = useState("");
    const txtBox = useRef<HTMLInputElement>(null)
    const [listTodo, setListTodo] = useState<ITodoModel[]>([]);

    useEffect(() => txtBox.current?.focus(), [])

    const handleRemove = (id: number) => {
        setListTodo([...listTodo.filter((td) => td.id !== id)]);
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (name.length === 0) {
            alert("Name?");
            return;
        }

        let todo = {
            todoName: name,
            id: +new Date(),
            completed: false,
        } as ITodoModel;

        setListTodo([...listTodo, todo]);
        setName("");
        txtBox.current?.focus()
    };

    return (
        <div className="todos">
            <h2>List :v todo (teach/test)</h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <input
                    ref={txtBox}
                    autoComplete='off'
                    type="text"
                    name="todoName"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="add-button">
                    +
                </button>
            </form>

            {/* List */}
            <div className="todo-list">
                {listTodo.map((item) => (
                    <TodoItemComponents
                        todo={item}
                        key={item.id}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>

            {/* Message */}
            {listTodo.length ? (
                <div className="clear-button">
                    <h5>You have {listTodo.length} pending tasks</h5>
                    <button onClick={() => setListTodo([])}>Clear All</button>
                </div>
            ) : (
                <h5 style={{ color: "Red", marginTop: "10px" }}>
                    Please add a todo..
                </h5>
            )}
        </div>
    );
};

export default TodosComponents;
