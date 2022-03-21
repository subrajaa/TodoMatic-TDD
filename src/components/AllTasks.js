import TaskDetails from "./TaskDetais";
const AllTasks = (props) => {

    const taskList = props.tasks.map(task => (
        <TaskDetails 
            id={task.id} 
            name={task.name} 
            completed={task.completed}
            key={task.id}
         />
    ));

    return (
        <ul className="all-tasks">
            {taskList}
        </ul>
    );
}

export default AllTasks;

