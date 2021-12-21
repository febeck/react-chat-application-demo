import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Index from '../pages/index';
import theme from '../theme';

const queryClient = new QueryClient();

test('Super chat app', async () => {
  render(
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Index />
      </QueryClientProvider>
    </ChakraProvider>
  );

  // screen.debug();
  const newComment = 'My super new comment';

  // Hero text is correctly rendered
  screen.getByText('Fernando Beck super chat');

  const initialCommentsCount = (await screen.findAllByTestId('comment-item'))
    .length;
  // There are some initial comments put statically
  expect(initialCommentsCount).toBeGreaterThan(1);

  // Needs to force type to tell TS this is an input and hence there's a "value" property
  const input = screen.getByLabelText('comment') as HTMLInputElement;
  // Simulates user typing the text and then submitting the form by typing "Enter" key
  userEvent.type(input, `${newComment}{Enter}`);

  // Input field has been empties
  expect(input.value).toBe('');

  // New comment has been added to the list
  await screen.findByText('You');
  await screen.findByText(newComment);
  expect((await screen.findAllByTestId('comment-item')).length).toBe(
    initialCommentsCount + 1
  );
  // Initially it has the loading state
  await screen.findByText(/sending/);

  // After some time the loading state is removed and the date is shown
  await screen.findByText(
    new Date().toLocaleDateString(),
    { exact: false },
    { timeout: 3000 }
  );
  await waitFor(
    () => {
      expect(screen.queryByText(/sending/)).not.toBeInTheDocument();
    },
    { timeout: 3000 }
  );
});
