import React, {useRef} from 'react'
import styles from './style.module.css'
import CurrentProps from '../../types/Props'

type myprops = {
    handleAdd:(args:CurrentProps) => void
}

const ToDoForm:React.FC<myprops> = props => {
    const text = useRef<HTMLInputElement>(null)
    const form = useRef<HTMLFormElement>(null)

    return <form ref={form} onSubmit={e => props.handleAdd({e, text, form})} >
        <input ref={text} className={styles.control} />
        <button>Save</button>
    </form>
}

export default ToDoForm