document.getElementById("submitButton").addEventListener("click", function () {
  var comment = document.getElementById("commentInput").value;

  var commentElement = document.createElement("div");
  commentElement.classList.add("comment");
  commentElement.innerText = comment;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    commentElement.remove();
  });

  commentElement.appendChild(deleteButton);

  document.getElementById("commentsContainer").appendChild(commentElement);

  document
    .getElementById("submitButton")
    .addEventListener("click", function () {
      var comment = document.getElementById("commentInput").value;
      document.getElementById("commentInput").value = "";
    });
});
