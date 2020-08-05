import profileReducer from './profile-reducer';
import { addPostCreator } from './../ac/index';
let mock_state = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 10,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 50,
    },
    {
      id: 3,
      message: "Yo",
      likesCount: 2,
    },
  ],
};

it("we should add new post in state", () => {
  let action = addPostCreator("test");
  let newState = profileReducer(mock_state, action);
  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("test");
});


