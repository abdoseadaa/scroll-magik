window.onload = function () {
  elementInViewPort();
};
window.onscroll = function () {
  elementInViewPort();
};

const elementInViewPort = () => {
  let elms = document.querySelectorAll("[data-scroll]");
  for (let index = 0; index < elms.length; index++) {
    let elm = elms[index];
    let bounding = elm.getBoundingClientRect();
    let elmHeight = elm.offsetHeight;
    let elmWidth = elm.offsetWidth;
    if (
      bounding.top >= -elmHeight &&
      bounding.left >= -elmWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          elmWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          elmHeight
    ) {
      let scroll_Class = elm.getAttribute("data-scroll").split(" ");
      elm.style.animationDuration = scroll_Class[1];
      elm.classList.add(scroll_Class[0]);
    }
  }
};
