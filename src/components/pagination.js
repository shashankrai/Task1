
import React, { useState ,useEffect } from 'react';
import {Button } from 'react-bootstrap';
import { LOCALE} from '../constants'


const Pagination = ({ currentPage, totalPages,paginate }) => {
  const [showNext, setShowNext] = useState(false); 
  const [showPreviuos, setShowPreviuos] = useState(false);
  const {first,previous,next,last,page,of} = LOCALE;

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
  else {
    if(currentPage === 1){
      setShowPreviuos(true);
      setShowNext(false);
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

}


useEffect(() => {
   showButtons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[currentPage,totalPages]);


  return (
        <div className ="pagination">
         <Button onClick={() => paginate(1)} > {first} </Button>
         <Button onClick={() => getPrevious(current)} disabled ={showPreviuos}>{previous} </Button>
         <span>{`${page} ${current} ${of} ${totalPages}`}</span>
         <Button onClick={() => getNext(current)} disabled ={showNext}>{next}</Button>
         <Button onClick={() => paginate(totalPages)}>{last} </Button>
        </div>
  );
};

export default Pagination;