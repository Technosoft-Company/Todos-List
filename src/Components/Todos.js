import React  from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import { Container } from "react-bootstrap";

const Todos = (props) => {
    return (
        <>
            <Container style={{minHeight:'62.2vh', 'marginBottom':'1rem'}}>
                <h2 style={{textAlign : 'center'}}>Todo List</h2>
                {props.todos.length===0? <h4>No todos to display</h4> :
                props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.no} onDelete={()=>{props.onDelete(todo)}} />
                })}
            </Container>  
        </>
    );
}

Todos.propTypes = {
    todos : PropTypes.array
};

export default Todos;