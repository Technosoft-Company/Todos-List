import React from 'react';
import {Button} from 'react-bootstrap'

const TodoItem = (props) => {
    return (
        <>
            <h4>{props.todo.title}</h4>
            <h5>{props.todo.desc}</h5>
            <Button variant="danger" size="sm" onClick={props.onDelete}>Delete</Button>
            <br/><br/>
        </>
    )
}

export default TodoItem;