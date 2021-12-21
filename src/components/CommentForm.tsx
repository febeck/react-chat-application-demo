import * as React from 'react';
import { FormControl, FormLabel, Input, Flex, Button } from '@chakra-ui/react';
import { useCommmentsMutation } from '../hooks/comments';

export const CommentForm = () => {
  const mutation = useCommmentsMutation();

  const formElement = React.useRef<HTMLFormElement | null>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const comment = formData.get('comment') as string;

    // Don't do anything if the input is empty or the mutation is running
    if (!comment || mutation.isLoading) return;
    mutation.mutate(comment);
    formElement.current.reset();
  }

  return (
    <Flex flex="none" w="100%" pb={4}>
      <form
        name="comment-form"
        onSubmit={handleSubmit}
        ref={formElement}
        style={{ width: '100%' }}
      >
        <Flex align="flex-end" gap={4}>
          <FormControl id="comment">
            <FormLabel>Enter a new comment</FormLabel>
            <Input
              autoComplete="off"
              type="text"
              name="comment"
              aria-label="comment"
            />
          </FormControl>
          <Button type="submit" colorScheme="pink" px={6}>
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
