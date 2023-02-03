// pageable
let pageable = new Pageable("#container");

// 네비바에 이름 추가
(function pageName() {
  const nav = document.querySelector(".pg-pips");
  const list = nav.querySelectorAll("ul>li>a>span");
  let navList = ["main", "portfolio", "skills", "contact"];

  for (i = 0; i < list.length; i++) {
    list[i].textContent = `${navList[i]}`;
  }
})();

// cursor
function circleCursor() {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("DOMContentLoaded", () => {
    document.body.onmousemove = function (e) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      // cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
  });
}
circleCursor();

// 포트폴리오 목록 생성, 미리보기
const links = document.querySelector(".view-link");
const viewList = [
  {
    name: "포트폴리오1",
    link: "#",
    src: "https://via.placeholder.com/960x540/497174/fff.png",
  },
  {
    name: "포트폴리오2",
    link: "#",
    src: "https://via.placeholder.com/960x540/EB6440/fff?text=portfolio2.png",
  },
  {
    name: "포트폴리오3",
    link: "#",
    src: "./images/open-graph.png",
  },
  {
    name: "포트폴리오4",
    link: "#",
    src: "https://via.placeholder.com/960x540/D6E4E5/000?text=portfolio4.png",
  },
];

viewList.forEach((item) => {
  links.innerHTML += `<li><a href="${item.link}" class="more-link">${item.name}</a></li>`;
});

function changeMore() {
  const more = links.querySelectorAll(".more-link");
  const preview = document.querySelector(".view");
  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("mouseover", () => {
      preview.style.background = `url(${viewList[i].src}) no-repeat center/cover`;
      more[i].innerText = `MORE`;
    });
  }

  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("mouseout", () => {
      more[i].innerText = `${viewList[i].name}`;
    });
  }
}
changeMore();

// contact mouseover
function contactOver() {
  const moon = document.querySelector(".contact-bg");
  const over = document.querySelectorAll(".contact-a");

  for (let i = 0; i < over.length; i++) {
    over[i].addEventListener("mouseover", () => {
      moon.style.transition = `1s`;
    });
  }

  over[0].addEventListener("mouseover", () => {
    moon.style.boxShadow = `inset 0 0 50px #fff, inset 20px 0 60px #0081B4,
    inset -20px 0 60px #EFA3C8, inset 20px 0 300px #0081B4,
    inset -20px 0 300px #EFA3C8, 0 0 50px #fff, -10px 0 60px #0081B4,
    10px 0 60px #EFA3C8`;
  });

  over[1].addEventListener("mouseover", () => {
    over[0].style.opacity = `.4`;
    over[1].style.opacity = `1`;
    moon.style.boxShadow = `inset 0 0 50px #fff, inset 20px 0 60px #8e8e8e,
    inset -20px 0 60px #8e8e8e, inset 20px 0 300px #8e8e8e,
    inset -20px 0 300px #8e8e8e, 0 0 50px #fff, -10px 0 60px #EFA3C8,
    10px 0 60px #0081B4`;
  });

  for (let i = 0; i < over.length; i++) {
    over[i].addEventListener("mouseout", () => {
      over[0].style.opacity = ``;
      over[i].style.opacity = ``;
      moon.style.boxShadow = ``;
    });
  }
}
contactOver();
