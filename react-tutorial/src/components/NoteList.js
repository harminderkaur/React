import React from 'react';
import  styled from 'styled-components';
import {useSelector } from 'react-redux';

const BOX = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin:0 auto
`

const DIV = styled.div`
   width: 300px;
   padding: 1em;
   border-radius: 7px;
   border: 1px dashed #e5b3fe; 
   margin-right: 12px;
   background-color:#c8e7ff
`

const NoteListIteam = () => {
    const {notes = []} = useSelector(state => state.notes)
    console.log("a", notes)
    return(
       <BOX>
             {notes.map((note) => (
               <DIV>
                <span key={note?.id}> {note.title} </span>
                </DIV>
             ))}
       </BOX>
    )
}

export default NoteListIteam;