import React from 'react';
import  styled from 'styled-components';
// import {useSelector } from 'react-redux';

const BOX = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin:0 auto
`

const LI = styled.li`
   width: 300px;
   padding: 1em;
   border-radius: 7px;
   border: 1px dashed #80ffdb; 
   margin-right: 12px;
   background-color:#06d6a0;
   list-style:none;
   color:#fff;
   font-weight:bold
`

const SPAN = styled.span `
   padding-top:10px;
   text-align:left;
   float:left;
   font-weight: normal;
`

export default function NoteListIteam ({note, noteHandler}) {
   const {
     title,
     description
   } = note;
   
   

    return(
       <BOX onClick={() => noteHandler(note)}>
         <LI> 
            {title} 
            <br></br>
            <hr></hr>
            <SPAN>
                  {description}
            </SPAN>
         </LI>    
       </BOX>
    )
}

