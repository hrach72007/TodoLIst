import { Task } from '../../types/Task'
import styles from './style.module.css'
import {convert} from '../../lib/convert'

interface CurrentProps{
    task:Task
    onComplete: (task:Task) => void
    onCancel: (task:Task) => void
}
const ToDoItem:React.FC<CurrentProps> = (props) => {
    const {task, onComplete, onCancel} = props

    const st = task.done ? styles.completed : styles.task

    return <div className={st}>
        <h3>{task.text}</h3>
        <p>added on <b>{convert(task.timeAdded)}</b> </p>
        {
            task.timeCompleted && <p>completed on <b>{convert(task.timeCompleted)}</b></p>
        }
        {
            !task.done
                ? <button onClick={() => onComplete(task)} >Complete</button>
                : <button onClick={() => onCancel(task)}>Cancel</button>
        }
        
    </div>
}
export default ToDoItem