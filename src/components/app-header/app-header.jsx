import NewTaskForm from "../new-task-form/new-task-form";
import "./app-header.css";
import PropTypes from "prop-types";


const AppHeader = ({onCreateItem}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm
                onCreateItem={onCreateItem}/>
        </header>
    )
}

AppHeader.defaultProps = {
    onCreateItem: () => {},
}

AppHeader.propTypes = {
    onCreateItem: PropTypes.func,
}

export default AppHeader;