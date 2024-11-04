import AppHeader from "../app-header/app-header";
import AppMain from "../app-main/app-main";
import Footer from "../footer/footer";
import './app.css';


const App = () => {

    const tasks = [
        {class: 'completed', text: 'Completed task', createTime: 'created 17 seconds ago', id: 1},
        {class: 'editing', text: 'Editing task', createTime: 'created 5 minutes ago', id: 2},
        {text: 'Active task', createTime: 'created 5 minutes ago', id: 3}
    ]

    return (
        <section className="todoapp">
            <AppHeader/>
            <AppMain tasks={tasks}/>
            <Footer/>
        </section>
    )
}

export default App;