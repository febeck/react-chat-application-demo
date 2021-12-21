import { Comment } from '../../types/comment';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const defaultAuthor = 'You';

const comments: Comment[] = [
  {
    author: 'Fernando',
    createdAt: new Date('2021-12-01 13:45').toLocaleString(),
    text: 'This is my beautiful comment system. Have fun',
  },
  {
    author: 'Chris',
    createdAt: new Date('2021-12-01 13:47').toLocaleString(),
    text: 'Wow Fernando, this is indeed super nice! Hey Franco, what do you think?',
  },
  {
    author: 'Franco',
    createdAt: new Date('2021-12-01 13:49').toLocaleString(),
    text: 'Yes, this looks nice, but those are all static comments. Does it actually work if I add a new one?',
  },
  {
    author: 'Fernando',
    createdAt: new Date('2021-12-01 13:52').toLocaleString(),
    text: 'You bet it does work, all you have to do is write something in the input. It will appear immediately, with a sweet optimistic update confirming the message has been sent after the 2 seconds have run by.',
  },
];

function fetchComments(): Promise<Comment[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 100);
  });
}

function createComment(text: string): Promise<Comment> {
  const newComment = {
    author: defaultAuthor,
    createdAt: new Date().toLocaleString(),
    text,
  };
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      comments.push(newComment);
      resolve(newComment);
    }, 2000);
  });
}

export function useCommentsQuery() {
  return useQuery(['comments'], fetchComments);
}

export function useCommmentsMutation() {
  const queryClient = useQueryClient();

  return useMutation(createComment, {
    onMutate: async (text) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries('comments');
      // Snapshot the previous value
      const previousComments = queryClient.getQueryData('comments');

      // Optimistically update to the new value
      queryClient.setQueryData('comments', (old: Comment[]) => [
        ...old,
        { author: defaultAuthor, text },
      ]);

      // Return a context object with the snapshotted value
      return { previousComments };
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (
      err,
      newText: string,
      context: { previousComments: Comment[] }
    ) => {
      queryClient.setQueryData('comments', context.previousComments);
    },
    // Always refetch after error or success:
    onSettled: () => {
      // Invalidates the result for list of comments, making the new one appear in the list
      queryClient.invalidateQueries('comments');
    },
  });
}
