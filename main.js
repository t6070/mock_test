const openMenu = () => {
  console.log("action");
  const naviMenuElem = document.getElementById("navi-menu");
  const naviMenuTopElem = document.getElementById("navi-menu-top");
  naviMenuElem.style.opacity = "1";
  naviMenuElem.style.height = "147px";
  naviMenuTopElem.style.opacity = "1";
  naviMenuElem.classList.add("show");
};
