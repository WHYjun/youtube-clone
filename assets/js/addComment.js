import axios from "axios";
import routes from "../../routes";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};
const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const handleRemove = async event => {
  console.log("hello");
  const target = event.target;
  const commentId = target.id;
  const response = await axios({
    url: `${routes.api}/${commentId}/comment/remove`,
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    removeComment(commentId, target);
  }
};

const removeComment = (id, target) => {
  const span = target.parentElement;
  const li = span.parentElement;
  commentList.removeChild(li);
  decreaseNumber();
};

const addComment = (comment, commentID) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  const btn = document.createElement("button");
  btn.id = String(commentID);
  btn.innerHTML = "Remove";
  btn.addEventListener("click", handleRemove);
  span.appendChild(btn);
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    var commentID = response.data._id;
    addComment(comment, commentID);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  addCommentForm.addEventListener("submit", handleSubmit);
};

if (addCommentForm) {
  init();
}
