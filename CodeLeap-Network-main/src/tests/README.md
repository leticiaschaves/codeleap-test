# Here is some ideas to test it!

## Organize it in folders

1. Create a folder with tests.
2. Inside of the folder, create tests for the four pages.
3. Use React Testing Library to test like the user would act.
4. Create a folder with helpers.
5. Inside of the helpers' folder, create functions to help test Redux and its routes.

## Bugs I have found

- * As soon as I ran the application, this warning showed up on console's browser: *

next-dev.js:60 Warning: Prop `className` did not match. Server: "sc-hHLeRK ipTiih" Client: "sc-bczRLJ gYfIVm"

- * When I deleted a post, this warning showed up: *

next-dev.js:60 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
