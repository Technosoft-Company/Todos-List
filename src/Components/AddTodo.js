import React, {useState} from 'react'
import { Form, Button, Container } from "react-bootstrap";

const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title){
            alert("Title can't be blank!")
        }else{
            props.addTodo(title, desc);
        }
        setTitle("");
        setDesc("");
    }
    return (
        <Container>
            <h4 style={{marginTop:'2rem'}}>Add a todo</h4>
            <Form onSubmit={submit}>
                <Form.Group controlId="title">
                    <Form.Control type="text" value={title} placeholder="What is needed to be done..." onChange={(e)=>{
                        setTitle(e.target.value)}} autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="desc">
                    <Form.Control type="text" value={desc} placeholder="Short description about your work..." onChange={(e)=>{setDesc(e.target.value)}} autoComplete="off" />
                </Form.Group>
                <Button variant="success" type="submit">Add</Button>
            </Form>
        </Container>
    )
}

export default AddTodo;