import React from 'react'
import TaskCounter from '../TaskCounter/TaskCounter'
import TaskSearch from '../TaskSearch/TaskSearch'
import TaskList from '../TaskList/TaskList'
import TaskItem from '../TaskItem/TaskItem'
import TaskButton from '../TaskButton/TaskButton'

export default function AppUI ({
  totalTask,
  completedTask,
  search,
  setSearch,
  searchList,
  markCompleted,
  deleteTask
}) {
  return (
    <div className='App'>
      <TaskCounter totalTask={totalTask} completedTask={completedTask} />
      <TaskSearch search={search} setSearch={setSearch} />
      <TaskList>
        {
          searchList.map(({ task, completed }) => (
            <TaskItem
              key={task}
              task={task}
              completed={completed}
              taskCompleted={() => markCompleted(task)}
              deleteTask={() => deleteTask(task)}
            />
          ))
        }
      </TaskList>
      <TaskButton />
    </div>
  )
}
