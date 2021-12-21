import { Hero } from '../components/Hero';
import { Container } from '@chakra-ui/react';
import { CommentsList } from '../components/CommentsList';
import { CommentForm } from '../components/CommentForm';

const Index = () => {
  return (
    <Container
      maxW="container.lg"
      h="100vh"
      pb={0}
      display="flex"
      flexDirection="column"
    >
      <Hero />
      <CommentsList />
      <CommentForm />
    </Container>
  );
};

export default Index;
