export const REPLY_PLACEHOLDER = "Write your reply...";
export const POST_REPLY = "Post Reply";
export const CANCEL = "Cancel";
export const REPLY = "Reply";
export const DELETE = "Delete";

export const DUMMY_COMMENTS_DATA = {
  1: {
    id: 1,
    comment: "Hello folks how are you doing? :)",
    parentId: null,
    childrens: [3],
  },
  2: {
    id: 2,
    comment: "Doing Great!!",
    parentId: null,
    childrens: [5],
  },
  3: {
    id: 3,
    comment: "Chal raha hai bhai",
    parentId: 1,
    childrens: [4],
  },
  4: {
    id: 4,
    comment: "All Good!! 👍",
    parentId: 3,
    childrens: [],
  },
  5: {
    id: 5,
    comment: "Everything nice dude 😊",
    parentId: 2,
    childrens: [],
  },
};
