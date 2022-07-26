import { useState } from 'react';
import {
  ButtonContainer,
  Container,
} from '@/components/layout/quizLayout/styles';
import Button from '@/components/layout/quizLayout/button';
// eslint-disable-next-line react/prop-types
const QuizLayout = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      {children}
      {/* <ButtonContainer> */}
      {/*   <Button active={active} /> */}
      {/* </ButtonContainer> */}
    </Container>
  );
};

export default QuizLayout;
