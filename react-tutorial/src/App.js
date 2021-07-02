import './App.css';
import React, {useState} from 'react';
import Form from  './components/Form'
import NoteList from './components/NoteList'
import {useSelector } from 'react-redux';
import Modal from './components/Modal'
import useModal from './components/useModal'
import image from './images/bulb.png'


export default function App() {

  const [selectNote, setSelectNote] = useState(null)
  const {isShowing, toggle} = useModal();
  const {notes = []} = useSelector(state => state.notes) 
   // Allows you to extract data from the Redux store state, using a selector function.
   console.log("notes",notes.length)
   
  const [showBtn, setShowBtn] = useState(false)

  const toggleHandler = (e) => {
    setSelectNote(null)
    toggle();
  }
  const noteHandler = (data) => {
      console.log("1", data)
      setSelectNote(data)
      setShowBtn(true)  
      toggle();
  }

  return (
      <>
      <div className="App">
      <Modal isShowing={isShowing} closeModal={toggleHandler} >
         <Form selectNote={selectNote} toggleHandler={toggleHandler} showBtn={showBtn}  />
      </Modal>
      <div className="outerFormWrapper">
        <Form/>
      </div>
      {notes.length > "0" ? 
        notes.map(note => (
        <NoteList note={note} key={note.id} noteHandler={noteHandler} />
        ))  : <div> <img className="img" src={image} alt="bulb"/>  
               <br/> 
               <div className="bulbTxt">Notes you add appear here </div>
              </div>
      }
      </div>
      </>
  );
}