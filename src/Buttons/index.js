import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
        <div className="button">
            {tasks.length > 0 && (
                <>
                    <button 
                        onClick={toggleHideDone}
                        className="button__buttons">
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </button>
                    <button 
                        className="button__buttons" 
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </button>
                </>
            )}
        </div>   
);


export default Buttons;