import NewTaskForm from "../new-task-form/new-task-form";
import "./app-header.css";


const AppHeader = ({onCreateItem}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm
                onCreateItem={onCreateItem}/>
        </header>
    )
}
export default AppHeader;