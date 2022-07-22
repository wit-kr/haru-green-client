import {
  ButtonContainer,
  Container,
} from '@/components/layout/quizLayout/styles';
import Button from '@/components/layout/quizLayout/button';
import ProgressBar from '@/components/layout/quizLayout/progressBar';
import Result from '@/components/layout/quizLayout/result';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const QuizLayout = ({ children }) => {
  const [quiznumber,setQuiznumber]=useState(0);
  const [resultPage,setResultPage]=useState(false);
  const clickbutton=()=>{
    if(quiznumber<2){
      setQuiznumber(quiznumber+1);
    }
    else if(quiznumber==2){
      setResultPage(true);
      setQuiznumber(quiznumber+1);
    }
    else{
      setQuiznumber(0);
      setResultPage(false);
    }
  }
  return(
  <Container>
    {resultPage?(<Result />)
      :(<ProgressBar quiznumber={quiznumber} />)}
      {children}
    <ButtonContainer>
      <Button clickbutton={clickbutton} quiznumber={quiznumber} resultPage={resultPage}/>
    </ButtonContainer>
  </Container>
)};

export default QuizLayout;
