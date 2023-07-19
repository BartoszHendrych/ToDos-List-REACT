import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask}) => (
    <ul className="tasks">
        {tasks.map(task =>(
            <li 
                className={`tasks__item 
                    ${task.done && hideDone ? 
                    "tasks__item--hidden" : ""}`}
                key={task.id}
            >
                <button 
                    className="tasks__button 
                    tasks__button--toggleDone "
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? 
                    "tasks__content--done" : ""}`}
                >
                    {task.content}
                </span>
                <button 
                    onClick={() => removeTask(task.id)}
                    className="tasks__button 
                        tasks__button--remove"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;