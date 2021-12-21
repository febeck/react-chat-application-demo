import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import { CommentItem } from './CommentItem';
import { useCommentsQuery } from '../hooks/comments';

export const CommentsList = () => {
  const comments = useCommentsQuery();

  const listElement = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (
      listElement.current &&
      listElement.current.scrollHeight > listElement.current.clientHeight
    ) {
      listElement.current.scroll(0, listElement.current.scrollHeight);
    }
  }, [comments.data]);

  if (!comments.data) return null;

  return (
    <VStack
      ref={listElement}
      spacing={4}
      my={6}
      display="flex"
      flex="auto"
      overflow="auto"
    >
      {comments.data.map((comment, i) => (
        <CommentItem key={i} comment={comment} />
      ))}
    </VStack>
  );
};
