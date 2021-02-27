
import React, { useState ,useEffect } from 'react';
import {Button } from 'react-bootstrap';



const Pagination = ({ currentPage, totalPages,paginate }) => {
  const [showNext, setShowNext] = useState(false);
  const [showPreviuos, setShowPreviuos] = useState(false);

  const current =currentPage; 

const getPrevious =(current) =>{
  if(current>1){
   const newCurrent = current -1;
   paginate(newCurrent,totalPages);
  }
  
}

const getNext =(current) =>{
  if(current < totalPages){
    current  = current+1 ;
    paginate(current,totalPages);
  }
}
const showButtons =() =>{
  if(totalPages === 1){
    setShowPreviuos(true);
    setShowNext(true);
  }
  else if(currentPage === 1){
    setShowPreviuos(true);
  }
  else if(currentPage ===totalPages){
    setShowNext(true);
    setShowPreviuos(false);
  }
  else {
    setShowNext(false);
    setShowPreviuos(false);
  }
}


useEffect(() => {
   showButtons();
},[currentPage,totalPages]);


  return (
        <>
         <Button onClick={() => paginate(1)} > First </Button>
         <Button onClick={() => getPrevious(current)} disabled ={showPreviuos}>Previous </Button>
         <span>{`page ${current} of ${totalPages}`}</span>
         <Button onClick={() => getNext(current)} disabled ={showNext}>Next</Button>
         <Button onClick={() => paginate(totalPages)}>Last </Button>
        </>
  );
};

export default Pagination;