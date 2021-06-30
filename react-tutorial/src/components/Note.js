import React, {useState} from 'react';
import  styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { notesActions } from '../actions'



const Wrapper = styled.div` 
    width: 704px;
    padding: 1em;
    border-radius: 7px;
    box-shadow: 1px 1px 5px #cdcdcd;
    margin: 70px auto;
`
const Input = styled.input`
    width: 89%;
    border: 0px solid;
    font-size: 28px;
    font-weight: bold;
    padding: 23px;
    width: 89%;
    font-size: 28px;
    font-weight: bold;
    padding: 20px;
    margin-top: 20px;
`
const TEXTAREA = styled.textarea`
    width: 89%;
    font-size: 28px;
    font-weight: bold;
    padding: 23px;
    width: 89%;
    border: 5px dashed  #ccc;
    font-size: 28px;
    font-weight: bold;
    padding: 20px;
    margin-bottom: 30px;
`
const Button = styled.button`
    width: 120px;
    background-color: #ef476f;
    color: #fff;
    padding: 8px;
    font-size: 19px;
    font-weight: bold;
    margin-right:10px;
    border: 1px dashed #ffc8dd; 
`
const DEFAULT_DATA = {
    title: "",
    description:""
}

const NoteWrapper = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(DEFAULT_DATA)
    
    const handleChange = (e) => {
       const { name, value } = e.target
       const newForm = { ...formData};
       newForm[name] = value
       setFormData(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("add note", formData)
        dispatch(notesActions.addNote(formData))
    }

    const handleClear = e =>{
        e.preventDefault();
        setFormData(DEFAULT_DATA)
    }

    return (
         <>
            <Wrapper>
                   <form onSubmit={handleSubmit}>
                          <Input id="title" type="text" name="title" value={formData?.title} placeholder="Title..." onChange={handleChange} ></Input>
                          <TEXTAREA id="description" type="text" name="description" placeholder="Take a note..." value={formData?.description} onChange={handleChange}></TEXTAREA>
                          <Button onClick={handleClear}>Clear</Button>
                          <Button type="submit" value="submit">Add</Button>
                   </form>
            </Wrapper>
        </>
    )
}

export default NoteWrapper