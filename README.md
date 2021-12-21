# Chat application demo

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/github-hdjohr)

## Technologies

- Next.js
- Chakra UI -> Component library with good components, theme and accessibility
- React Query -> Library responsible for handling loading and error states when communication with an autocompletion
- React Testing library -> Write good test, which simulate the real behaviour of the user instead of implementation details
- StackBlitz -> good in the browser technology to have instant feedback

## Design decisions

- In a real world chat the request would come from the network and posted back for creating a new. I mimicked this behaviour by using promises to return results of elements in a static list
- I used React Query, instead of Redux because this is the solution I would use to handle this sceario instead of Redux as suggested in the exercise. After a long time using of Redux, it creates indirection in the way of handling data and you're required to "reinvent the wheel" many times. In addition to that, react-query is capable of managing the browser cache for us in an efficient way
- Intead of simpling adding a new comment to the list after a submit I tried and emulate a real world scenario with optimistic update. This can be seen by the fact that the new comment is intantly added to the list (and the user sees the spinner), which is removed after the sucessful "request" made to this fake API.
- On the addition of the new element, the comments list automatically scrolls to the bottom allowing the user to see the newly added comments

## Scripts

- `npm run dev`: Starts the dev server and allows for instant code updates
- `npm run types`: Runs the TypeScript type checker
- `npm run test`: Runs ths single test validating the flow to add a new comment to the list (with transitional loading state)
