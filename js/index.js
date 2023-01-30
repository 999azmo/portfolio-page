// pageable
let pageable = new Pageable("#container");

// 네비바에 이름 추가
function pageName() {
  let navList = ["main", "portfolio", "skills", "contact"];
  const nav = document.querySelector(".pg-pips");
  const list = nav.querySelectorAll("ul>li>a>span");

  for (i = 0; i < list.length; i++) {
    list[i].textContent = `${navList[i]}`;
  }
}
pageName();
