import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
        <div className="button">
            {tasks.length > 0 && (
                <>
                    <button className="button__buttons">
                        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                    </button>
                    <button 
                        className="button__buttons" 
                        autofocus disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </button>
                </>
            )}
        </div>   
);


export default Buttons;