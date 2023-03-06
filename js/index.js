// pageable
const pageable = new Pageable("#container");

// 네비바에 이름 추가
(function pageName() {
  const nav = document.querySelector(".pg-pips");
  const list = nav.querySelectorAll("ul>li>a>span");
  let navList = ["main", "portfolio", "skills", "contact"];

  for (i = 0; i < list.length; i++) {
    list[i].textContent = `${navList[i]}`;
  }
})();

// 포트폴리오 목록 생성, 미리보기
const links = document.querySelector(".view-link");
const viewList = [
  {
    name: "portfolio-page",
    link: "https://mysterious-dinosaur-a2b.notion.site/PORTFOLIO-page-6628acc2c1dc436da33546cdc6c4b242",
    src: "./images/open-graph.png",
  },
  {
    name: "nuenofashion",
    link: "https://mysterious-dinosaur-a2b.notion.site/NUENO-digital-fashion-16d3d0d9df9e4de2b1afa2497d4505c5",
    src: "./images/pf2.jpg",
  },
  {
    name: "메타토이드래곤즈",
    link: "https://mysterious-dinosaur-a2b.notion.site/84886c403b4f4e128657e54fa55511a4",
    src: "./images/pf1.png",
  },
  {
    name: "COMING SOON",
    link: "#",
    src: "https://via.placeholder.com/960x540/D6E4E5/000?text=COMING-SOON...",
  },
];

viewList.forEach((item, idx) => {
  links.innerHTML += `<li><a href="${item.link}" target="_blank" class="more-link">${item.name}</a></li>`;
});

function changeMore() {
  const more = links.querySelectorAll(".more-link");
  const preview = document.querySelector(".view");

  // default
  preview.style.background = `url(${viewList[0].src}) no-repeat center/cover`;

  // change
  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("mouseover", () => {
      preview.style.background = `url(${viewList[i].src}) no-repeat center/cover`;
      more[i].innerText = `MORE`;
      more[i].style.textAlign = `center`;
    });
  }
  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("mouseout", () => {
      more[i].innerText = `${viewList[i].name}`;
      more[i].style.textAlign = ``;
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
