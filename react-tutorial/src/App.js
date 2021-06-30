import './App.css';
import React, {useState} from 'react';
import  styled from 'styled-components';
import Note from  './components/Note'
import NoteList from './components/NoteList'
import {useSelector } from 'react-redux';
import Modal from './components/Modal'
import useModal from './components/useModal'


export default function App() {

  const [selectNote, setSelectNote] = useState(null)
  const {isShowing, toggle} = useModal();
  const {notes = []} = useSelector(state => state.notes) 
     
// Allows you to extract data from the Redux store state, using a selector function.

  const toggleHandler = (e) => {
    console.log("test", e)
    toggle();
  }
  const noteHandler = (data) => {
      console.log("1", data)
      setSelectNote(data)
      toggle();
  }

  return (
      <>
      <div className="App">

      <Modal isShowing={isShowing} closeModal={toggleHandler}>
        <Note selectNote={selectNote} />
      </Modal>

      <Note/>

      {notes.map(note => (
        <NoteList note={note} key={note?.id} noteHandler={noteHandler}/>
        ))
      }
      </div>
      </>
  );
}