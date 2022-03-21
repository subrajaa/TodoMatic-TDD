const AddTask = () => {
    return (
        <form>
            <h2>
                <label htmlFor="todo-input">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="todo-input"
                autoCorrect="off"
                className="input-text"
                name="todo-title"
             />
             <button type="submit" className="btn-add">
                 Add
             </button>
        </form>
    );
}

export default AddTask;