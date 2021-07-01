import React, {useEffect, useState} from 'react';
import  styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { notesActions } from '../actions'


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

const Form = ({selectNote, toggleHandler, showBtn}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(DEFAULT_DATA)
  
    useEffect(() => {
        setFormData(selectNote)
    },[selectNote]);
    const handleChange = (e) => {
       const { name, value } = e.target
       const newForm = { ...formData};
       newForm[name] = value
       setFormData(newForm)
    }
    const saveBtn = e => {
        e.preventDefault();
        console.log("add note", formData)
        dispatch(notesActions.addNote(formData))
    }
    const updateBtn = (e) => {
        e.preventDefault();
        console.log("update note", formData)
        dispatch(notesActions.updateNote(formData))
        toggleHandler();
    }
    const handleClear = e =>{
        e.preventDefault();
        setFormData(DEFAULT_DATA)
    }

    const handleDelete = e => {
        e.preventDefault();
        console.log("s", formData)
        dispatch(notesActions.deleteNote(formData))
        toggleHandler();
    }

    return (
     <>
        <form>
           <Input id="title" type="text" name="title" value={formData?.title} placeholder="Title..."  onChange={handleChange} ></Input>
           <TEXTAREA id="description" type="text" name="description" placeholder="Take a note..." value= {formData?.description} 
            onChange={handleChange}></TEXTAREA>
            {showBtn ? <Button onClick={handleDelete}>Delete</Button>: <Button onClick={handleClear} >Clear</Button> }
           {showBtn ? <Button onClick={updateBtn}>Update</Button> : <Button onClick={saveBtn}>Save</ Button> }
        </form>
     </>
    )
}

export default Form;