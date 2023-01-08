function runWeatherApp() {
  var weatherKey = "02e77d365cd44ea0a86182627230601";
  var weatherBaseUrl = "https://api.weatherapi.com/v1";

  var temperatureButtonEl = document.querySelector("#temperature-button");
  temperatureButtonEl.addEventListener("click", onTemperatureButtonClick);
  var temperatureContainerEl = document.querySelector("#temperature-container");

  function onTemperatureButtonClick() {
    var queryParams = "key=" + weatherKey + "&q=Cluj-Napoca";
    fetch(weatherBaseUrl + "/current.json?" + queryParams)
      .then(function (response) {
        return response.json();
      })
      .then(function (weather) {
        var myWeather = weather || {};
        var currentWeather = myWeather.current || {};
        var temperature = currentWeather.temp_c || null;
        if (temperature !== null) {
          temperatureContainerEl.style = null;
          var temperatureEl =
            temperatureContainerEl.querySelector("#temperature");
          temperatureEl.innerHTML = temperature;
        }
      });
  }
}

function runPostsApp() {
  var postsBaseUrl = "https://jsonplaceholder.typicode.com";
  var postsContainerEl = document.querySelector("#posts-container");

  function renderPostList(posts) {
    posts.forEach(function (post) {
      var postDiv = createPost(post);
      if (postDiv) {
        postsContainerEl.appendChild(postDiv);
      }
    });
  }

  function createPost(post) {
    var div = document.createElement("div");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    deleteButton.onclick = function () {
      fetch(postsBaseUrl + "/posts/" + post.id, {
        method: "DELETE",
      }).then((response) => {
        if (response) {
          div.remove();
        }
      });
    };

    editButton.onclick = function () {
      document
        .getElementById("updatePostModal")
        .classList.remove("modalHidden");
      document
        .getElementById("updatePostModal")
        .classList.add("modalDisplayed");
    };

    div.innerHTML =
      "<div class='post-title'>" +
      "<h2>" +
      post.title +
      "</h2>" +
      "</div><p class='post-body'>" +
      post.body +
      "</p>";
    div.appendChild(deleteButton);
    div.appendChild(editButton);
    return div;
  }

  fetch(postsBaseUrl + "/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      renderPostList(posts);
    });
}

var pageInit = function () {
  runWeatherApp();
  runPostsApp();
};

window.addEventListener("load", function () {
  pageInit();
});
