let searchBar = document.getElementById("search-bar");
let sideBar = document.getElementById("side-bar");
let sideBarBtn = document.getElementById("side-bar_button");

searchBar.addEventListener("keyup", function() {
  sidebar.buildList(searchBar.value);
});

sideBarBtn.addEventListener("click", function() {
  sideBarBtn.classList.toggle("side-bar_button-active");
  sideBar.classList.toggle("side-bar_active");
  if (sideBar.classList.contains("side-bar_active")) {
    searchBar.focus();
  }
  searchBar.value = "";
  setTimeout(function() {
    sidebar.buildList("");
  }, 200);
});
