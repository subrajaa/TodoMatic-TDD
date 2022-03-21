import { useState } from "react";

const TaskDetails = (props) => {
    return (
        <li className="todo">
            <div className="task-details">
                <div className="task">
                    <input 
                        className="task-mark" data-testid="toggle"
                       id={`task-${props.id}`} 
                       type='checkbox' 
                       data-value={props.completed} 
                       defaultChecked={props.completed}
                    />
                    <label htmlFor={`task-${props.id}`} className='todo-label'>
                        <h2>{props.name}</h2>
                    </label>
                </div>
                <div className="task-buttons">
                    <button
                        id={`btn-edit-${props.id}`} 
                        className='btn-task btn-edit'
                    >
                        edit
                    </button>
                    <button
                        id={`btn-delete-${props.id}`} 
                        className='btn-task btn-delete'
                    >
                        delete
                    </button>
                </div>
            </div>
        </li>
    );
}

export default TaskDetails;