import React, {useState} from 'react';
import  styled from 'styled-components';
import NoteList from './NoteList'
import { useDispatch } from 'react-redux';
import { notesActions } from '../actions'
import Modal from './Modal'
import useModal from './useModal'




const Wrapper = styled.div` 
    width: 704px;
    padding: 1em;
    border-radius: 7px;
    box-shadow: 1px 1px 5px #cdcdcd;
    margin: 70px auto;;
`
const Input = styled.input`
    width: 89%;
    border: 0px solid;
    font-size: 28px;
    font-weight: bold;
    padding: 23px;
    width: 89%;
    border: 0px solid;
    font-size: 28px;
    font-weight: bold;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}
`
const Button = styled.button`
    width: 120px;
    background-color: #f3c4fb;
    color: #264653;
    border-radius: 3px;
    padding: 8px;
    font-size: 19px;
    font-weight: bold;
    margin-right:10px;
    border: none
`
const H1 = styled.h1`
   font-size:34px;
   color: #8d99ae
`
const DEFAULT_DATA = {
    title: "",
}


const NoteWrapper = () => {
    const dispatch = useDispatch();
    const [showIteams, setShowItem] = useState(false);
    const [formData, setFormData] = useState(DEFAULT_DATA)
    const {isShowing, toggle} = useModal();

    
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
        setShowItem(true)
    }

    const handleClear = e =>{
        e.preventDefault();
        setFormData(DEFAULT_DATA)
    }

    const toggleHandler = (e) => {
        console.log("test", e)
        toggle();
    }

    return (
        <div>
            <Modal isShowing={isShowing} closeModal={toggleHandler}>
              shfdfjhdfhjhdfhjh
            </Modal>

            <Wrapper>
                   <form onSubmit={handleSubmit}>
                       <Input id="title" type="text" name="title" value={formData?.title}    placeholder="Take a note..." onChange={handleChange} ></Input>
                       <Button onClick={handleClear}>Clear</Button>
                       <Button type="submit" value="submit">Add</Button>
                   </form>
            </Wrapper>
            { showIteams 
              ? <NoteList onClick={toggleHandler} closeModal={toggleHandler}/>
              : <H1>Notes you add appear here</H1>
            }
        </div>
    )
}

export default NoteWrapper