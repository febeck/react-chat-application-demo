import type { Comment } from '../../types/comment';
import { Box, Spinner, Text } from '@chakra-ui/react';

type CommentItemProps = {
  comment: Comment;
};

export const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <Box
      bg="gray.100"
      p={2}
      w="100%"
      borderRadius={5}
      data-testid="comment-item"
    >
      <Text fontSize="xs" as="b">
        {comment.author}
      </Text>
      <Text mt={2}>{comment.text}</Text>
      <Text mt={2} fontSize="xs" as="i" display="block" textAlign="right">
        {comment.createdAt ? (
          comment.createdAt
        ) : (
          <>
            <Spinner size="xs" /> sending...
          </>
        )}
      </Text>
    </Box>
  );
};
