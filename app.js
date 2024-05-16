const hambuggerOpenIcon = document.getElementById("hambuggerOpenIcon");
const hambuggerCloseIcon = document.getElementById("hambuggerCloseIcon");
const nav__links = document.getElementById("nav__links");
const navBar = document.getElementById("navBar");
const page = document.getElementById("body");

hambuggerOpenIcon.addEventListener("click", function () {
  hambuggerOpenIcon.style.display = "none";
  hambuggerCloseIcon.style.display = "flex";
  nav__links.style.right = "0%";
  nav__links.style.backgroundColor = "#5B5D90";
  navBar.style.backgroundColor = "#5B5D90";
  page.classList = "disable-scroll";
});

hambuggerCloseIcon.addEventListener("click", function () {
  hambuggerCloseIcon.style.display = "none";
  hambuggerOpenIcon.style.display = "flex";
  nav__links.style.right = "100%";
  nav__links.style.backgroundColor = "transparent";
  navBar.style.backgroundColor = "transparent";
  page.classList = "scroll";
});

const scrollBg = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0.5) {
    navBar.style.backgroundColor = "#5B5D90";
    navBar.style.boxShadow = "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.boxShadow = "none";
  }
};

document.addEventListener("scroll", scrollBg);
