import AppHeader from "../app-header/app-header";
import AppMain from "../app-main/app-main";
import Footer from "../footer/footer";
import './app.css';
import {useState} from "react";


const App = () => {

    const [data, setData] = useState([
        {class: 'completed', value: 'Completed task', checked: true, createTime: 'created 17 seconds ago', id: 1},
        {class: 'editing', value: 'Editing task', checked: false, createTime: 'created 5 minutes ago', id: 2},
        {class: 'active', value: 'Active task', createTime: 'created 5 minutes ago', checked: false, id: 3}
    ]);



    function getActiveTasks() {
        return setData((state) => {
            return state.map((item) => {
                if(item.class !== 'active'){
                    item.class += ' hidden'
                    return item;
                }
                return item;
            })
        });
    }


    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
    }

    function createItem (e) {
        if (e.code === 'Enter') {
            return setData((state) => {
                const newState = [...state];
                const newTask = {value: e.target.value, createTime: 'created 5 minutes ago', checked: false, id: getRandomIntInclusive(data.length + 1, 1000000) };
                newState.push(newTask);
                e.target.value = '';
                return newState;
            });
        }
    }

    function completeItem (id) {
        return setData((state) => {
            const idx = state.findIndex(item => item.id === id);
            const newState = [...state];
            if (newState[idx].class === 'completed') {
                newState[idx].checked = false;
                newState[idx].class = 'active';
            } else {
                newState[idx].checked = true;
                newState[idx].class = 'completed';
            }
            return newState;
        })
    }

    function editItem (e, id) {
        return setData((state) => {
            const idx = state.findIndex(item => item.id === id);
            const newState = [...state];
            newState[idx].class = 'editing';
            return newState;
        })
    }

    function enterEdit (e, id) {
        if (e.code === 'Enter') {
            return setData((state) => {
                const idx = state.findIndex(item => item.id === id);
                const newState = [...state];
                newState[idx].value = e.target.value;
                newState[idx].class ='active';
                return newState;
            })
        }
    }

    function deleteItem (id) {
        return setData((state) => {
            const idx = state.findIndex(item => item.id === id);
            return state.toSpliced(idx, 1);
        })
    }

    return (
        <section className="todoapp">
            <AppHeader onCreateItem={createItem} />
            <AppMain tasks={data}
                     onCompleted={completeItem}
                     onDelete={deleteItem}
                     onEdit={editItem}
                     onEnterEdit={enterEdit}
            />
            <Footer tasks={data}
                    onActiveTask={getActiveTasks}/>
        </section>
    )
}

export default App;