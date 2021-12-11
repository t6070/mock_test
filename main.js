//ハンバーガーアイコン押下時
//メインメニューの開閉
const openMenu = () => {
  const naviMenuElem = document.getElementById("navi-menu");
  const naviMenuTopElem = document.getElementById("navi-menu-top");
  //transitionはcss側で入力済み
  naviMenuElem.style.opacity = "1";
  naviMenuElem.style.height = "147px";
  naviMenuTopElem.style.opacity = "1";
  naviMenuElem.classList.add("show");
};
