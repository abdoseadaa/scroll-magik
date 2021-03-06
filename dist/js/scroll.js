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
      let data = elm.getAttribute("data-scroll").replace(/\s/g, "").split(",");
      (data.includes("hide") || data.includes("hidden")) ? elm.parentElement.style.overflow = "hidden" : null;
      elm.style.animationDuration = data[1]
      elm.classList.add(data[0])
      


    }
  }
};
