import { useState, useEffect } from 'react'
import { Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Tasks from './Tasks'


const Completed = ({tasks , onDelete, onEdit, onToggle}) => {

    return(
              
              <>
              <h3>Completed tasks</h3>
              {tasks.length > 0 ? (
                   <Tasks
                      tasks={tasks}
                      onDelete={onDelete}
                      status={'completed'}
                      showSelect={false}
                      onEdit={onEdit}
                      onToggle={onToggle}
                      />
                ) : (
                  'No Tasks To Show'
                )}
                <br/>
                <Link to='/'>Go Back</Link>
                </>
    )
}



export default Completed