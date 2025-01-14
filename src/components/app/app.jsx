import { useState } from 'react'

import AppHeader from '../app-header/app-header'
import AppMain from '../app-main/app-main'
import Footer from '../footer/footer'
import './app.css'

const App = () => {
  const [data, setData] = useState([])

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function createItem(e) {
    e.preventDefault()
    return setData((state) => {
      const newState = [...state]
      const taskName = e.nativeEvent.target[0]
      const taskTimeMinutes = e.nativeEvent.target[1]
      const taskTimeSeconds = e.nativeEvent.target[2]
      if (!/^\d+$/.test(taskTimeSeconds.value) || !/^\d+$/.test(taskTimeMinutes.value)) {
        taskName.value = ''
        taskTimeMinutes.value = ''
        taskTimeSeconds.value = ''
        return newState
      }
      if (taskTimeMinutes.value.length < 1 && taskTimeSeconds.value.length < 1) {
        taskName.value = ''
        taskTimeMinutes.value = ''
        taskTimeSeconds.value = ''
        return newState
      }

      if (taskTimeMinutes.value < 0) {
        taskTimeMinutes.value = ''
        return newState
      }
      if (taskTimeSeconds.value < 0) {
        taskTimeSeconds.value = ''
        return newState
      }

      if (taskTimeMinutes.value.length < 1) {
        taskTimeMinutes.value = 0
      }
      if (taskTimeSeconds.value.length < 1) {
        taskTimeSeconds.value = '00'
      }

      if (taskName.value.trim() !== '') {
        const newTask = {
          class: 'active',
          value: taskName.value,
          valueMinutes: taskTimeMinutes.value.trim(),
          valueSeconds:
            taskTimeSeconds.value.length === 1 ? '0' + taskTimeSeconds.value.trim() : taskTimeSeconds.value.trim(),
          createTime: new Date(),
          checked: false,
          id: getRandomIntInclusive(data.length + 1, 1000000),
        }
        newState.push(newTask)
      }
      taskName.value = ''
      taskTimeMinutes.value = ''
      taskTimeSeconds.value = ''
      return newState
    })
  }

  function completeItem(id) {
    return setData((state) => {
      const idx = state.findIndex((item) => item.id === id)
      const newState = [...state]
      if (newState[idx].class === 'completed') {
        newState[idx].checked = false
        newState[idx].class = 'active'
      } else {
        newState[idx].checked = true
        newState[idx].class = 'completed'
      }
      return newState
    })
  }

  function editItem(e, id) {
    return setData((state) => {
      const idx = state.findIndex((item) => item.id === id)
      const newState = [...state]
      newState[idx].class = 'editing'
      return newState
    })
  }

  function enterEdit(e, id) {
    if (e.code === 'Enter') {
      return setData((state) => {
        const idx = state.findIndex((item) => item.id === id)
        const newState = [...state]
        if (e.target.value.trim() !== '') newState[idx].value = e.target.value
        newState[idx].class = 'active'
        return newState
      })
    }
  }

  function deleteItem(id) {
    return setData((state) => {
      const idx = state.findIndex((item) => item.id === id)
      return state.toSpliced(idx, 1)
    })
  }

  function getActiveTasks() {
    return setData((state) => {
      return state.map((item) => {
        item.class = item.class.split(' ')[0]
        if (item.checked) {
          item.class += ' hidden'
          return item
        }
        return item
      })
    })
  }

  function getCompleteTasks() {
    return setData((state) => {
      return state.map((item) => {
        item.class = item.class.split(' ')[0]
        if (!item.checked) {
          item.class += ' hidden'
          return item
        }
        return item
      })
    })
  }

  function getAllTasks() {
    return setData((state) => {
      return state.map((item) => {
        item.class = item.class.split(' ')[0]
        return item
      })
    })
  }

  function clearCompleteItems() {
    return setData((state) => {
      const newState = [...state]
      return newState.filter((item) => !item.checked)
    })
  }

  return (
    <section className="todoapp">
      <AppHeader onCreateItem={createItem} />
      <AppMain
        tasks={data}
        onCompleted={completeItem}
        onDelete={deleteItem}
        onEdit={editItem}
        onEnterEdit={enterEdit}
      />
      <Footer
        tasks={data}
        onAllTasks={getAllTasks}
        onActiveTasks={getActiveTasks}
        onCompleteTasks={getCompleteTasks}
        onClearCompleteItems={clearCompleteItems}
      />
    </section>
  )
}

export default App
