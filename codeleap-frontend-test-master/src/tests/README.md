# Here is some ideas to test it!

## Organize it in folders

1. Create a folder with tests.
2. Inside of the folder, create tests for the two pages.
3. Use React Testing Library to test like the user would.
4. Create a folder with helpers.
5. Inside of the helpers' folder, create functions to help test Redux and its routes.

## Testing pages

### Login:

1. Test if everything is rendering correctly:

- Heading:
screen.getByRole('heading', {  name: /welcome to codeleap network!/i})
- Text:
screen.getByText(/please enter your username/i)
- Input:
screen.getByPlaceholderText(/John doe/i)
- Button:
screen.getByText(/Enter/i)

2. Test if the button is disabled when the input is empty - and if it's clickable when the user types in the input.

3. Test if clicking on "Enter" button, the route is "/posts".

4. Test if heading "CodeLeap Network" is visible.

### Posts:

1. Test if everything is rendering correctly:
- Heading:
screen.getByRole('heading', {  name: /what's on your mind\?/i})
- Title and input:
screen.getByText(/title/i)
screen.getByPlaceholderText(/hello world/i)
- Content and input:
screen.getByText(/content/i)
screen.getByPlaceholderText(/content here/i)
- Button:
screen.getByRole('button', {  name: /create/i})

2. Test if the button "Create" is disabled when both inputs are empty - and if it's clickable when the user types on the inputs.

3. Test if clicking on "Create" button a new post will appear bellow.

4. Test if the post card is in the document.

5. Test if there is two icons to delete and edit the post card.

6. Test if when clicking on the delete icon, it will show an alert on browser. - After that, test if the card is not in the document.

7. Test if when clicking on the edit icon, it will show an edit card. - And test if there is two inputs to edit and a "Save" button.

8. Test if editing the post it will show up edited.

9. Test if after a while the user will have to login again.
screen.getByText(/Login to create posts/i)

10. Test if when clicking the link, it will be redirected to Login page.