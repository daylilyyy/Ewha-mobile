"use strict";
const get = target => document.querySelector(target);
const getAll = target => document.querySelectorAll(target);
/* 
[상단 수정 금지]
수정시 내용 공유

[형식]
*css
name-name
*js
nameName (camel)
*file
name_name (snake)

const 페이지명Init=()=>{
  const 컨텐츠명1Init=()=>{}
  const 컨텐츠명2Init=()=>{}
  const 컨텐츠명3Init=()=>{}...
  
  컨텐츠명1();
  컨텐츠명2();
  컨텐츠명3();
}

[기타]
arrow function 위주 사용
get/getAll로 잡은 변수는 변수명앞에 $표시

*/

// 헤더
const headerInit = () => {
  const $nav = get("#nav");
  const $menuUl = getAll("#nav .gnb > li > ul");
  const $close = get("#nav .close");
  const $body = get("body");
  const $allMenu = get(".all-menu");
  const $topBtn = get(".top-btn");
  const $menuLeft = getAll("#nav .gnbleft > li ");

  $allMenu.addEventListener("click", e => {
    $nav.classList.add("on");
    $menuUl[0].classList.add("on");
    $menuLeft[0].classList.add("on");
    $body.style.overflow = "hidden";
  });
  $close.addEventListener("click", e => {
    $nav.classList.remove("on");
    $body.style.overflow = "visible";
    setTimeout(() => {
      $menuUl.forEach(menu => {
        menu.classList.remove("on");
      });
    }, 300);
  });

  $topBtn.addEventListener("click", e => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const resetMenu = () => {
    $menuLeft.forEach(item => {
      item.classList.remove("on");
    });
    $menuUl.forEach(menu => {
      menu.classList.remove("on");
    });
  };
  $menuUl[0].classList.add("on");
  $menuLeft[0].classList.add("on");

  $menuLeft.forEach((item, idx) => {
    item.addEventListener("click", function (e) {
      resetMenu();
      item.classList.add("on");
      $menuUl[idx].classList.add("on");
    });
  });
};
// 메인페이지
const mainInit = () => {
  const visualInit = () => {
    const $activeBtn = get(".mainpage-mainvisual .active-btn");

    let mainVisualSwiper = new Swiper(".mainvisual-swiper", {
      speed: 400,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".mainvisual-swiper .swiper-pagination",
        clickable: true,
      },
    });
    $activeBtn.addEventListener("click", () => {
      let status = $activeBtn.children[0].classList.value;
      if (status === "xi-pause") {
        $activeBtn.children[0].classList.replace("xi-pause", "xi-play");
        mainVisualSwiper.autoplay.stop();
      } else {
        $activeBtn.children[0].classList.replace("xi-play", "xi-pause");
        mainVisualSwiper.autoplay.start();
      }
    });
  };
  const newsTodayInit = () => {
    let newsTodaySwiper = new Swiper(".news-today-swiper", {
      speed: 400,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      loop: true,
      slidesPerView: "auto",
    });
  };
  const storyInit = () => {
    const $activeBtn = get(".story-swiper .active-btn");
    let storySwiper = new Swiper(".story-swiper", {
      speed: 400,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".story-swiper .swiper-pagination",
        clickable: true,
      },
    });
    $activeBtn.addEventListener("click", () => {
      let status = $activeBtn.children[0].classList.value;
      if (status === "xi-pause") {
        $activeBtn.children[0].classList.replace("xi-pause", "xi-play");
        storySwiper.autoplay.stop();
      } else {
        $activeBtn.children[0].classList.replace("xi-play", "xi-pause");
        storySwiper.autoplay.start();
      }
    });
  };
  const eventInit = () => {
    const $eventSlide = getAll(".event .swiper-slide");
    let prevCnt = 0;
    let eventSwiper = new Swiper(".event-swiper", {
      speed: 400,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: "auto",
    });
    $eventSlide.forEach((item, idx) => {
      item.addEventListener("click", () => {
        $eventSlide[prevCnt].classList.remove("on");
        item.classList.add("on");
        prevCnt = idx;
      });
    });
  };
  const nowInit = () => {
    const $nowContent = get(".main .con-box.now"),
      $nowSwiperItem = getAll(".main .now .now-swiper .swiper-slide");
    let nowIsPlayed = false;
    let nowSwiper = new Swiper(".now-swiper", {
      speed: 400,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
    window.addEventListener("scroll", () => {
      let scrollStandard = window.innerHeight + window.scrollY - $nowContent.offsetHeight / 2;
      if (scrollStandard >= $nowContent.offsetTop && nowIsPlayed === false) {
        $nowSwiperItem.forEach(item => {
          let startNum = 999;
          let goalNum = parseInt(item.dataset.num);
          let speed = 30;
          let step = Math.ceil(Math.abs(startNum - goalNum) / 50);
          setInterval(() => {
            startNum -= step;
            if (startNum < goalNum) {
              startNum = goalNum;
            }
            item.children[1].textContent = startNum;
          }, speed);
        });
        nowIsPlayed = true;
      }
    });
  };
  const snsInit = () => {
    const $snsItems = getAll(".main .sns .sns-box li");
    const $snsTopMenuItems = getAll(".main .sns .top-menu li");
    let snsItemsPrevCnt = 0;
    let snsTopMenuPrevCnt = 0;
    $snsItems.forEach((item, idx) => {
      item.addEventListener("click", e => {
        $snsItems[snsItemsPrevCnt].classList.remove("on");
        $snsItems[idx].classList.add("on");
        snsItemsPrevCnt = idx;
      });
    });
    let snsSwiper = new Swiper(".sns-swiper", {
      speed: 400,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      on: {
        activeIndexChange: function () {
          $snsTopMenuItems[snsTopMenuPrevCnt].classList.remove("on");
          $snsTopMenuItems[this.realIndex].classList.add("on");
          snsTopMenuPrevCnt = this.realIndex;
        },
      },
    });
  };
  const shortcutInit = () => {
    let snsSwiper = new Swiper(".shortcut-swiper", {
      speed: 400,
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };
  const bannerInit = () => {
    const $bannerPaging = getAll(".main .banner .title-box .paging li");
    let bannerPrevCnt = 0;
    let bannerSwiper = new Swiper(".banner-swiper", {
      speed: 400,
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        activeIndexChange: function () {
          $bannerPaging[bannerPrevCnt].classList.remove("on");
          $bannerPaging[this.realIndex].classList.add("on");
          bannerPrevCnt = this.realIndex;
        },
      },
    });
  };
  const quickServiceInit = () => {
    let bannerSwiper = new Swiper(".quick-service-swiper", {
      speed: 400,
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  };
  const commonInit = () => {
    const webChatInit = () => {
      const $webChatBtn = get(".main .web-chat-container .web-chat-btn");
      $webChatBtn.addEventListener("click", () => {
        window.open("https://chat.ewha.ac.kr/chatbot/index.html", "_blank", "width=500,height=700");
      });
    };
    const quickMenuInit = () => {
      const $quickMenuBtn = get(".main .quick-menu-container .quick-menu-btn");
      const $quickMenuContainerBg = get(".main .quick-menu-container .quick-menu-bg");
      $quickMenuBtn.addEventListener("click", () => {
        $quickMenuBtn.classList.toggle("active");
        $quickMenuContainerBg.classList.toggle("on");
        if ($quickMenuContainerBg.classList.contains("on")) {
          get("body").style.overflow = "hidden";
        } else {
          get("body").style.overflow = "auto";
        }
      });
      $quickMenuContainerBg.addEventListener("click", () => {
        $quickMenuBtn.classList.remove("active");
        $quickMenuContainerBg.classList.remove("on");
        get("body").style.overflow = "auto";
      });
      window.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
          $quickMenuBtn.classList.add("on");
        } else {
          $quickMenuBtn.classList.remove("on");
        }
      });
    };
    webChatInit();
    quickMenuInit();
  };
  visualInit();
  newsTodayInit();
  storyInit();
  eventInit();
  nowInit();
  snsInit();
  shortcutInit();
  bannerInit();
  quickServiceInit();
  commonInit();
};
// 회원가입
const signupInit = () => {
  const confirm = document.querySelector(".password-con"),
    password = document.querySelector("input[id=user-password]"),
    password2 = document.querySelector("input[id=user-password2]");
  password2.addEventListener("keyup", () => {
    if (password.value === password2.value) {
      confirm.style.color = "#00664f";
      confirm.textContent = "비밀번호가 일치합니다";
    } else {
      confirm.style.color = "#e63b53";
      confirm.textContent = "비밀번호가 일치하지 않습니다.";
    }
  });
};
// 대학
const universityPageInit = () => {
  const $univList = get(".university-page .university .univ-list");
  const url = "../data/univ_graduate/univ_data.json";
  //  대학 리스트 생성
  const pageOpening = url => {
    axios.get(url).then(res => {
      res.data.university.forEach((item, idx) => {
        let univListItem = document.createElement("li");
        let imgBox = document.createElement("div");
        let textBox = document.createElement("div");
        let titleBox = document.createElement("div");
        let title = document.createElement("strong");
        let btnWrap = document.createElement("div");
        let readMoreBtn = document.createElement("button");
        let readMoreBtnIcon = document.createElement("i");
        let goMainBtn = document.createElement("button");
        let goMainBtnImg = document.createElement("img");
        let content = document.createElement("p");
        let departmentList = document.createElement("ul");
        imgBox.classList.add("img-box");
        imgBox.style.backgroundImage = item.src;
        textBox.classList.add("text-box");
        titleBox.classList.add("title-box");
        title.textContent = item.title;
        btnWrap.classList.add("btn-wrap");
        readMoreBtn.classList.add("read-more-btn");
        readMoreBtn.textContent = "상세내용보기";
        readMoreBtnIcon.classList.add("xi-angle-right");
        goMainBtn.classList.add("go-main-btn");
        goMainBtnImg.setAttribute("src", "../images/univ_graduate/visualQuick_home_white.png");
        goMainBtnImg.setAttribute("alt", "메인으로가기");
        content.textContent = item.content;
        departmentList.classList.add("department-list");
        item.department.forEach(item => {
          let departmentItem = document.createElement("li");
          let a = document.createElement("a");
          a.textContent = item;
          departmentItem.append(a);
          departmentList.append(departmentItem);
        });
        readMoreBtn.append(readMoreBtnIcon);
        goMainBtn.append(goMainBtnImg);
        btnWrap.append(readMoreBtn, goMainBtn);
        titleBox.append(title);
        textBox.append(titleBox, content, departmentList, btnWrap);
        univListItem.append(imgBox, textBox);
        if (idx % 2 === 0) {
          univListItem.setAttribute("data-aos", "fade-right");
        } else {
          univListItem.setAttribute("data-aos", "fade-left");
        }
        $univList.append(univListItem);
      });
    });
  };
  //////////////////////////////////////////////////////////////
  pageOpening(url);
};
// 대학원
const graduatePageInit = () => {
  const graduateBannerInit = () => {
    const $pagingList = getAll(".graduate-page .banner .paging li");
    let pagingPrevCnt = 0;
    let snsSwiper = new Swiper(".banner-swiper", {
      speed: 400,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        activeIndexChange: function () {
          $pagingList[pagingPrevCnt].classList.remove("on");
          $pagingList[this.realIndex].classList.add("on");
          pagingPrevCnt = this.realIndex;
        },
      },
    });
  };
  const noticeInit = () => {
    const $noticeMenu = getAll(".notice .menu-bar .menu-list li");
    const $noticeContentBox = get(".graduate-page .notice .content-box");
    const url = "../data/univ_graduate/graduate.json";
    let noticeArr = [];
    let noticeCurrentCnt = 0;
    let noticePrevCnt = 0;
    // .graduate-page .notice
    $noticeMenu.forEach((item, idx) => {
      item.addEventListener("click", () => {
        // 페이징
        noticeCurrentCnt = idx;
        $noticeMenu[noticePrevCnt].classList.remove("on");
        $noticeMenu[noticeCurrentCnt].classList.add("on");
        //  리스트 내용
        $noticeContentBox.innerHTML = "";
        axios.get(url).then(res => {
          for (let i = 0; i < res.data.notice[idx].content.length; i++) {
            let tempLi = document.createElement("li");
            let tempContent = document.createElement("strong");
            let tempDate = document.createElement("em");
            tempContent.textContent = res.data.notice[idx].content[i];
            tempDate.textContent = res.data.notice[idx].date[i];
            tempLi.append(tempContent, tempDate);
            $noticeContentBox.append(tempLi);
          }
        });
        noticePrevCnt = noticeCurrentCnt;
      });
    });
  };
  graduateBannerInit();
  noticeInit();
};
// 이화뉴스
const ewhaNewsInit = () => {
  const $pageBtn = getAll(".pagelist .btn-page");
  const $newsList = get(".news-info ul");
  const $newsMenu = getAll(".news-menu select");
  const $newsItems = Array.from($newsList.children);

  function shuffle() {
    $newsItems.sort(() => Math.random() - 0.5);
    $newsList.innerHTML = "";
    $newsItems.forEach(item => $newsList.appendChild(item));
  }

  $pageBtn.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      for (let i = 0; i < $pageBtn.length; i++) {
        $pageBtn[i].classList.remove("on");
      }
      e.target.classList.add("on");
      shuffle();
    });
  });

  $newsMenu.forEach(item => {
    item.addEventListener("click", e => {
      for (let i = 0; i < $newsMenu.length; i++) {
        $newsMenu[i].classList.remove("on");
      }
      e.target.classList.add("on");
      shuffle();
    });
  });
};
// 공지사항
const noticeInit = () => {
  const $pageBtn = getAll(".pagelist .btn-page");
  const $noticeMenu = getAll(".notice-menu ul li");

  $noticeMenu.forEach(item => {
    item.addEventListener("click", e => {
      for (let i = 0; i < $noticeMenu.length; i++) {
        $noticeMenu[i].classList.remove("on");
      }
      e.target.classList.add("on");
    });
  });

  $pageBtn.forEach((item, idx) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      for (let i = 0; i < $pageBtn.length; i++) {
        $pageBtn[i].classList.remove("on");
      }
      e.target.classList.add("on");
    });
  });
};
// 축제_이벤트
const festivalEventPageInit = () => {
  const festivalEventVideoData = [
    {
      videoId: 1,
      videoSrc: "https://www.youtube.com/embed/YJQS99UcG5s",
      videoTitle: "2022 대동제 영상스케치 #1 공연모음.zip",
    },
    { videoId: 2, videoSrc: "https://www.youtube.com/embed/VH57ycMAgH0", videoTitle: "2022 농촌봉사활동 홍보영상" },
    { videoId: 3, videoSrc: "https://www.youtube.com/embed/ZKJoeyu_bjM", videoTitle: "국토대장정 다녀온 이화인들" },
    {
      videoId: 4,
      videoSrc: "https://www.youtube.com/embed/e_pcJECArTo",
      videoTitle:
        "[교환학생 A to Z] 이화여대에서 교환학생 가는 법? 서류부터 면접까지🇩🇪/미래에셋 해외교환 장학금 합격꿀팁🍯, 합격자소서 같이 읽어봐요😍",
    },
    {
      videoId: 5,
      videoSrc: "https://www.youtube.com/embed/-ENXzrCmCis",
      videoTitle: "이화여자대학교 창립 136주년 기념식 하이라이트",
    },
    {
      videoId: 6,
      videoSrc: "https://www.youtube.com/embed/vuwTqLQ-ViA",
      videoTitle: "이대부초 제 53회 총동창회 홈커밍데이 영상",
    },
  ];
  const $festivalEventVideoPopup = get(".festival-event-page .festival-event-video-popup"),
    $festivalEventBgForPopup = get(".festival-event-page .festival-event-bg-for-popup"),
    $festivalEventListImg = getAll(".festival-event-page .festival-event-box .festival-event-info li img"),
    $festivalEventVideoPopupIframe = get(".festival-event-page .festival-event-video-popup iframe"),
    $festivalEventVideoPopupCloseBtn = get(".festival-event-page .festival-event-video-popup .close");

  let festivalEventCnt = 0;

  const festivalEventMakeVideo = () => {
    $festivalEventVideoPopupIframe.setAttribute("src", festivalEventVideoData[festivalEventCnt].videoSrc);
    $festivalEventVideoPopupIframe.setAttribute("title", festivalEventVideoData[festivalEventCnt].videoTitle);
    $festivalEventVideoPopupIframe.setAttribute("id", festivalEventVideoData[festivalEventCnt].videoId);
  };

  const videoMiddle = () => {
    $festivalEventVideoPopup.style.transition = "0s";
    $festivalEventVideoPopup.style.bottom = "50%";
    $festivalEventVideoPopup.style.left = "50%";

    $festivalEventVideoPopup.style.width = "320px";
    $festivalEventVideoPopup.style.height = "180px";
    $festivalEventVideoPopup.style.transform = "translate(-50%,50%)";
    $festivalEventVideoPopupIframe.setAttribute("width", "320");
    $festivalEventVideoPopupIframe.setAttribute("height", "180");
  };
  $festivalEventListImg.forEach((item, idx) => {
    item.addEventListener("click", () => {
      festivalEventCnt = idx;
      festivalEventMakeVideo();
      videoMiddle();
      $festivalEventBgForPopup.classList.add("on");
      $festivalEventVideoPopup.classList.add("on");
      $festivalEventBgForPopup.addEventListener("click", e => {
        e.currentTarget.classList.remove("on");
        $festivalEventVideoPopup.classList.remove("on");
      });
    });
  });
  const videoBottom = () => {
    $festivalEventBgForPopup.classList.remove("on");
    $festivalEventVideoPopup.style.transition = "0.6s";
    $festivalEventVideoPopup.style.bottom = 0;
    $festivalEventVideoPopup.style.left = 0;
    $festivalEventVideoPopup.style.width = "224px";
    $festivalEventVideoPopup.style.height = "126px";
    $festivalEventVideoPopup.style.transform = "translate(0,-30%)";
    $festivalEventVideoPopupIframe.setAttribute("width", "224");
    $festivalEventVideoPopupIframe.setAttribute("height", "126");
  };
  window.addEventListener("scroll", () => {
    videoBottom();
  });
  $festivalEventVideoPopupCloseBtn.addEventListener("click", () => {
    $festivalEventVideoPopup.classList.remove("on");
    $festivalEventBgForPopup.classList.remove("on");
  });
};
// 학생활동
const studentActivitiesPageInit = () => {
  const studentActivitiesData = [
    {
      studentId: 1,
      studentImgUrl: "../images/univ_life/student0.jpg",
      studentName: "무역학과 임소영, 김민재 박사",
      studentStroy: "일본 와세다대 상학부 전임강사와 경기대 무역학과 조교수 임용",
    },
    {
      studentId: 2,
      studentImgUrl: "../images/univ_life/student1.jpg",
      studentName: "경제학과 김대한 학우",
      studentStroy: "학부생으로 SSCI학술지 논문 게재",
    },
    {
      studentId: 3,
      studentImgUrl: "../images/univ_life/student2.jpg",
      studentName: "방재안전공학 박사과정 이한글 원우",
      studentStroy: "국내 제3호 국제재난관리자",
    },
    {
      studentId: 4,
      studentImgUrl: "../images/univ_life/student3.jpg",
      studentName: "엘딘 밀락 영어영문학과 박사 과정생",
      studentStroy: "사회언어학 분야 국제저명학술지(SSCI)에 두 편의 논문 게재",
    },
    {
      studentId: 5,
      studentImgUrl: "../images/univ_life/student4.jpg",
      studentName: "유진영 경제학과 박사",
      studentStroy: "경제학도에서 박사가 되기까지",
    },
    {
      studentId: 6,
      studentImgUrl: "../images/univ_life/student5.jpg",
      studentName: "이우영 예술학협동과정 박사",
      studentStroy: "동명대학교 디지털공연예술 전공 조교수 임용",
    },
    {
      studentId: 7,
      studentImgUrl: "../images/univ_life/student6.jpg",
      studentName: "일반대학원 무역학과 이윤 박사",
      studentStroy: "전북대 무역학과 조교수 임용",
    },
    {
      studentId: 8,
      studentImgUrl: "../images/univ_life/student7.jpg",
      studentName: "임용희(문헌정보학과, 다학제인포매틱스연계전공 15)",
      studentStroy: "대학은 창업의 놀이터: ‘가치사자’ 창업 이야기",
    },
    {
      studentId: 9,
      studentImgUrl: "../images/univ_life/student8.jpg",
      studentName: "무역학과 박세현 박사",
      studentStroy: "강원대학교 조교수 임용",
    },
    {
      studentId: 10,
      studentImgUrl: "../images/univ_life/student9.jpg",
      studentName: "관정 이종환 재단 장학생 안치효(전자전기공학부 11) 동문",
      studentStroy: "선배가 알려주는 해외유학 장학금 조언",
    },
    {
      studentId: 11,
      studentImgUrl: "../images/univ_life/student10.jpg",
      studentName: "이찬주(경제학과 17)",
      studentStroy: "순간을 잡아, 내 생각을 현실로 만드는 법",
    },
    {
      studentId: 12,
      studentImgUrl: "../images/univ_life/student11.jpg",
      studentName: "손유승(스포츠과학과 15)",
      studentStroy: "기부, 그 이상의 의미",
    },
    {
      studentId: 13,
      studentImgUrl: "../images/univ_life/student12.jpg",
      studentName: "약학대학 이슬아 박사(석박통합 15)",
      studentStroy: "서울과학종합대학원대학교 조교수 임용",
    },
    {
      studentId: 14,
      studentImgUrl: "../images/univ_life/student13.jpg",
      studentName: "유학대학 한국철학과 강보승 박사(유학·동양학부 98)",
      studentStroy: "충북대학교 윤리교육과 조교수 임용",
    },
    {
      studentId: 15,
      studentImgUrl: "../images/univ_life/student14.jpg",
      studentName: "법학과 도규엽 박사(08) ",
      studentStroy: "상지대학교 미래인재대학 경찰법학과 조교수 임용",
    },
    {
      studentId: 16,
      studentImgUrl: "../images/univ_life/student15.jpg",
      studentName: "허정원(컬처앤테크놀로지융합전공 19)",
      studentStroy: "무(無)능력자, 무한(無限)한 능력자가 되다",
    },
    {
      studentId: 17,
      studentImgUrl: "../images/univ_life/student16.jpg",
      studentName: "동아시아학술원 손성준 박사",
      studentStroy: "한국해양대학교 글로벌해양인문학부 부교수 임용",
    },
    {
      studentId: 18,
      studentImgUrl: "../images/univ_life/student17.jpg",
      studentName: "조수영(소비자학과 19)",
      studentStroy: "목표와 함께 앞길을 뛰어가기",
    },
    {
      studentId: 19,
      studentImgUrl: "../images/univ_life/student18.jpg",
      studentName: "오세영(영상학과 19)",
      studentStroy: "대학에 와서 새롭게 만나게 된 나",
    },
    {
      studentId: 20,
      studentImgUrl: "../images/univ_life/student19.jpg",
      studentName: "강훈(화학공학/고분자공학부 18) ",
      studentStroy: "무인도에서 살아남기",
    },
    {
      studentId: 21,
      studentImgUrl: "../images/univ_life/student20.jpg",
      studentName: "김나연(러시아어문학과 19)",
      studentStroy: "한식으로 세계를 연결하다",
    },
    {
      studentId: 22,
      studentImgUrl: "../images/univ_life/student21.jpg",
      studentName: "물리학과 졸업생 박혜진 박사",
      studentStroy: "인하대 물리학과 조교수 임용",
    },
    {
      studentId: 23,
      studentImgUrl: "../images/univ_life/student22.jpg",
      studentName: "홍혜준(국어국문학과 16)",
      studentStroy: "누구든 이룰 수 있는 학생성공의 비밀",
    },
    {
      studentId: 24,
      studentImgUrl: "../images/univ_life/student23.jpg",
      studentName: "유학과 안승우 박사와 일반대학원 유학과 이치억 박사",
      studentStroy: "강릉원주대학교와 국립공주대학교 조교수로 각각 임용",
    },
    {
      studentId: 25,
      studentImgUrl: "../images/univ_life/student24.jpg",
      studentName: "김용재(영어영문학과 17)",
      studentStroy: "인의예지와 수기치인의 정신으로 아동인권을 생각하다",
    },
    {
      studentId: 26,
      studentImgUrl: "../images/univ_life/student25.jpg",
      studentName: "김민지(글로벌경영학과 18) ",
      studentStroy: "나를 나누며 나를 채우다",
    },
    {
      studentId: 27,
      studentImgUrl: "../images/univ_life/student26.jpg",
      studentName: "DENG LINWEI 등림위(미래도시융합공학과, 석사과정)",
      studentStroy: "win ≠ success",
    },
    {
      studentId: 28,
      studentImgUrl: "../images/univ_life/student27.jpg",
      studentName: "김동훈(문헌정보학과 박사과정)",
      studentStroy: "전문대생에서 소셜·의료데이터 연구자가 되기까지",
    },
    {
      studentId: 29,
      studentImgUrl: "../images/univ_life/student28.jpg",
      studentName: "강동호 박사(학부 08학번, 대학원 14학번)와 김명수(전자전기공학부 10) 박사",
      studentStroy: "같은 연구실 선후배 사이, 각각 타대학 교수로 나란히 임용",
    },
    {
      studentId: 30,
      studentImgUrl: "../images/univ_life/student29.jpg",
      studentName: "김가람 (경제학과 박사과정 20, 現 한국자산평가 애널리스트)",
      studentStroy: "공부와 직장생활, 두 마리 토끼 잡기",
    },
    {
      studentId: 31,
      studentImgUrl: "../images/univ_life/student30.jpg",
      studentName: "물리학과 강경태 박사 경북대학교 조교수 임용",
      studentStroy: "다채로운 고품질 박막산화물 제작과 발현 물성들에 대한 연구",
    },
    {
      studentId: 32,
      studentImgUrl: "../images/univ_life/student31.jpg",
      studentName: "화학과 조대흠 박사 경북대학교 조교수 임용",
      studentStroy: "양자 광학의 빛-물질 상호작용 기반 고효율 태양전지 소재 개발",
    },
    {
      studentId: 33,
      studentImgUrl: "../images/univ_life/student32.jpg",
      studentName: "화학과 차지현 박사 충남대학교 조교수 임용",
      studentStroy: "다양한 무기물 화합물 반도체 소재의 합성과 전자소자 응용 연구",
    },
    {
      studentId: 34,
      studentImgUrl: "../images/univ_life/student33.jpg",
      studentName: "엄금철 경영학과 마케팅전공 박사",
      studentStroy: "외국인 교수가 말하는 대학원 생존기",
    },
    {
      studentId: 35,
      studentImgUrl: "../images/univ_life/student34.jpg",
      studentName: "김동은(건축학과 15)",
      studentStroy: "빈틈 속에서 발견한 세상",
    },
    {
      studentId: 36,
      studentImgUrl: "../images/univ_life/student35.jpg",
      studentName: "박제인(영어영문학과 17)",
      studentStroy: "속이 알찬 강정이 되는 길",
    },
  ];
  const studentActivitiesPopUpData = [
    {
      popUpId: 1,
      popUpTitleText: "일본 와세다대 상학부 전임강사와 경기대 무역학과 조교수 임용",
      popUpStudentName: "무역학과 임소영, 김민재 박사",
      popUpMainText:
        "우리 대학 대학원 무역학과&#40;학과장 정홍주&#41;에서 박사학위를 취득한 임소영 박사와 김민재 박사가 각각 일본 와세다대 상학부 전임강사와 경기대 무역학과 조교수로 임용되었다.&#40;위 사진에서 왼쪽 : 임소영 박사, 오른쪽 : 김민재 박사&#41; 임소영 박사는 우리 대학 프랑스어문학과, 국제통상학 학사와 동 대학 대학원 무역학과에서 국제무역학 석사를 취득했고, 이어 &#39;ASEAN의 보험자와 보험가입 선호 연구 ; 미얀마, 베트남, 인도네시아를 대상으로&#40;지도교수 정홍주&#41;&#39;를 주제로 한 학위논문으로 국제무역학 박사학위를 2022년 2월에 취득했다. 임 박사는 학위 기간 동안 스위스 로잔대학 방문연구원, 국제금융소비자학회 간사, 서울과학기술대학교 강사, 본교 무역연구소 연구원으로 활동했으며, JKT&#40;SSCI 저널&#41; 등 국내외 무역·리스크관리 분야 학술지 논문 게재 및 학술 발표를 이어왔다. 학위 취득 이후에는 고용노동부, 민화협 등 기관의 연구용역을 수행하고 우리 대학에서 강사로도 일해왔다. 2023년 2월에는 강의평가 100점을 달성하며 무역학과 최우수 교강사상을 수상하기도 했다.",
    },
    {
      popUpId: 2,
      popUpTitleText: "학부생으로 SSCI학술지 논문 게재",
      popUpStudentName: "경제학과 김대한 학우",
      popUpMainText:
        "전세계 3,000개 이상 학술지가 등재된 Social Sciences Citation Index(SSCI)는 사회과학분야의 저명한 학술지 목록이다. 경제학과 김대한 학우는 SSCI에 등재된 학술지인 International Review of Financial Analysis(IRFA)에 제1 저자로 논문을 게재했다. 영향력 지수인 Impact Factor가 5이상이면 재무금융 분야에서 좋은 학술지로 평가받는 경우가 많은데 IRFA학술지의 Impact Factor가 8.235라는 점을 고려하면 학부생인 김대한 학우의 IRFA 논문 게재는 참으로 대단하다. 이번 논문 외에도 김대한 학우는 SSCI 학술지에 논문 게재한 경험이 있으며 학생군사교육단으로도 활동하고 있다. 자신에게 한계를 두지 않고 끊임없이 도전하는 김대한 학우를 만나보자. Q. 만나서 반갑습니다. 본인 소개 부탁드려요. 안녕하세요. 경제학과 18학번으로 졸업하는 김대한입니다. 경제학과 류두진 교수님의 연구실(SKKU Finance Lab)에서 학부 연구생으로서 2년간 공부했어요. 연구실에서 공부하며 SSCI에 등재된 재무금융 분야 학술지에 총 2편의 논문을 게재했습니다. 이런 자리에 불러 주셔서 너무나도 영광입니다. 저로 말하자면 성균관대 질문왕입니다. 저랑 같이 수업을 들은 학우님이라면 아실 거예요. 호기심이 많습니다.",
    },
    {
      popUpId: 3,
      popUpTitleText: "국내 제3호 국제재난관리자",
      popUpStudentName: "방재안전공학 박사과정 이한글 원우",
      popUpMainText:
        "알프레트 아들러의 목적론을 청년과 철학자의 대화 형식으로 설명한 기시미 이치로의 『미움받을 용기』에서 철학자는 청년에게 이렇게 말한다. “선처럼 보이는 삶은 점의 연속…인생이란 지금 이 찰나를 뱅글뱅글 춤추듯이 사는, 찰나의 연속이라고. 그러다 문득 주위를 돌아봤을 때 “여기까지 왔다니!” 하고 깨닫게 될 걸세.” 철학자의 말처럼, 매 순간 주어진 자리에서 최선을 다해 ‘별’을 그려 자신만의 ‘은하수’를 만든 사람이 있다. 국내 3호 국제재난관리자, 한국인 최초 장학생 선정이라는 은하수를 만든 이한글 학우의 이야기를 들어보았다. Q. 자기소개 부탁드립니다. 안녕하세요. 저는 공과대학 방재안전공학 박사과정을 밟고 있는 이한글입니다.  어린시절을 미군부대 인근 지역에서 보내면서 많은 외국인 친구를 사귀며 외국어를 자연스럽게 배울 수 있었어요. 이런 독특한 배경은 저로 하여금 우리 사회를 세계와 이을 수 있는 사람이 되길 갈망하게 했답니다. 제 이름인 “한글”로 우리가 소통할 수 있었던 것처럼, 저 스스로가 “재난관리”를 주제로 세계와 한국을 잇는 가교가 되길 꿈꾸고 있어요. 오늘 이렇게 성균관대학교라는 명문대에서 각자의 꿈을 향해 달려가는 국가의 인재들을 만날 기회를 주셔서 너무 감사하게 생각해요.",
    },
    {
      popUpId: 4,
      popUpTitleText: "사회언어학 분야 국제저명학술지(SSCI)에 두 편의 논문 게재",
      popUpStudentName: "엘딘 밀락 영어영문학과 박사 과정생",
      popUpMainText:
        "지난 7월과 10월, 우리 대학의 엘딘 밀락 박사과정생(지도교수 이한정)이 사회언어학 분야의 국제저명학술지(SSCI)에 두 편의 논문을 게재했다. 그는 영어영문학과 4단계 BK21 교육연구단의 연구 지원에 힘입어 훌륭한 연구 성과를 거두었고, 이외에도 두 편의 논문을 SCOPUS 등재 학술지 『The Journal of Literary Humanities』와 『The Journal of Linguistic Landscapes』에 게재했다. 영국문화원과 미국 국제영어교육 연구 재단이 지원하는 박사학위 논문 연구장학금인 &#39;The TIRF Doctoral Dissertation Grant&#39;의 수혜자로 선정되기도 했다. 사회언어학자로서 언어와 사회의 관계를 끊임없이 연구하는 엘딘 밀락 학우(영어영문학과)를 만나보았다.",
    },
    {
      popUpId: 5,
      popUpTitleText: "경제학도에서 박사가 되기까지",
      popUpStudentName: "유진영 경제학과 박사",
      popUpMainText:
        "2022년 여름 학위수여식에서 인사캠 전체 대표로 박사학위를 수여받은 유진영 원우는 2018년 경제학과 학부를 졸업한 지 4년만에 박사학위를 취득하였다. 학부졸업 후 석사를 거쳐 박사학위 취득까지 보통 7~8년 이상 소요되는 경제학과에서 이례적으로 빠른 박사학위 취득이다. 4년간의 석박사통합과정 재학 중에 17편의 국제저명 SSCI 학술지 논문을 게재하였고, 사회부총리 겸 교육부장관 표창, 성균관대 총장 표창, President List 선정, SKKU Research Matters 1위, 한국금융공학회 최우수논문상 등 연구관련 수상경력을 갖추었다.  - 재학중 구체적인 연구성과는? 연구분야는 빅데이터에 기반한 금융시장 미시구조와, 행태재무, 거시금융, 디지털금융을 포함하며, 파생금융상품 시장에서 정보거래자, 헷징과 투기거래, 잠재적 비효율성, 투자자의 비합리적 투자행태 등을 연구하고 있습니다. 옵션시장의 미시구조적 유동성 지표를 활용하여 유동성 위험을 고려한 확장된 위험관리모형(value-at-risk)를 제시하는 연구를 진행하여, 교내 연구성과 경진대회(SKKU Research Matters)에서 발표하여 총장님 표창을 받았습니다. 학위과정 중 European Journal Finance, Journal of Futures Markets, Finance Research Letters를 비롯하여 Finance분야 국제저명 SSCI학술지에 17편, 재무연구와 같은 등재학술지에 3편의 논문을 게재하였으며, 이와 같은 성과를 인정 받아 BK21 사업의 우수 참여인력으로 선정되어 사회부총리 겸 교육부장관 표창을 받았습니다.",
    },
    {
      popUpId: 6,
      popUpTitleText: "동명대학교 디지털공연예술 전공 조교수 임용",
      popUpStudentName: "이우영 예술학협동과정 박사",
      popUpMainText:
        "우리대학 일반대학원 예술학협동과정 이우영 박사(예술학 전공)가 2022년 9월자로 동명대학교 Do-ing학부 디지털공연예술 전공 조교수로 임용되었다.이우영 박사는 문화체육관광부 산하 (재)서울예술단에서 상임단원을 역임하고, 뮤지컬 제작, 대중/실용음악 관련 작곡, 음반 프로듀서로 20여년간 활동한 경력을 가지고 있다. 본교 일반대학원 동양철학과(예술철학 전공)에서 2017년 8월 [餘音(Ambience) 미학 연구: 근대 음 체계와의 충돌을 중심으로](지도교수: 박상환)으로 석사학위를, 2021년 2월 예술학협동과정에서 [컴퓨터 사운드 존재론 연구: 푼크툼(punctum)의 음악학적 해석을 중심으로](지도교수: 김면)으로 박사학위를 취득했다.이우영 박사는 클래식과 재즈, 컴퓨터음악이라는 넓은 주제를 다루는 작곡, 편곡 작업을 담당해왔으며, 특히 가수 김범수, 빌리어코스티 등의 대중음악 음반에 참여한 바 있고, 최근에는 고전주의 음악의 즉흥미학과 현대적 해석을 함유한 모노클래즘(Monoclasm)의 피아니스트 및 음반 프로듀서로 활동했다.동시에 국가 예술 정책 및 음악교육, 사운드 미학을 주제로 한국연구재단 학술연구교수 사업등에 선정되어 학술 활동을 수행하고 있으며, 서울예술대학교, 한양여자대학교, 명지전문대학, 숭실대학교, 총신대학교 등에서 컴퓨터 음악 및 뮤지컬, 작곡 분야의 겸임 및 초빙 교수로 근무하며 교육활동을 담당했다.이우영 박사는 &#34;동양철학과 박상환 교수님과 예술학협동과정 김면 교수님의 지도아래 비판적이고 넓은 안목을 지닌 연구자로 성장할 수 있었다&#34;며 &#39;1인 미디어와 1인 프로듀싱 추세에 걸맞는 새로운 발돋움을 추진하는 동명대학교와 새로운 전공(디지털 공연예술학)의 내실을 위해 좀 더 심도 깊은 연구와 교육활동에 매진할 것이라&#39;고 소감을 밝혔다.",
    },
    {
      popUpId: 7,
      popUpTitleText: "전북대 무역학과 조교수 임용",
      popUpStudentName: "일반대학원 무역학과 이윤 박사",
      popUpMainText:
        "무역연구소(소장 정홍주) 전임연구원 이윤 박사가 2022년 9월자로 전북대학교 무역학과 조교수로 임용되었다. 이윤 박사는 서울대 중문과 학사와 같은 대학 국제대학원에서 중국지역학 전공으로 석사를 취득했다. 이후 삼성물산에서 6년간 근무했고, 본교 대학원 무역학과에서 무역결제분야 학위논문을 작성하여 박사 학위를 받았다.이윤 교수는 석사 학위를 마친 후 삼성물산 상사부문에 입사했다.그곳에서 무역 업무를 수행하며 거래선 개발, 공급선 확보, 가격 협의, 수출 실무 등에 관한 일을 했다.그 밖에 중국, 터키, 이란 등의 지역을 담당하면서 그 지역의 상관습, 문화에 대한 이해도를 쌓았다.이윤 교수는 회사 생활을 하며 장기적으로 봤을 때 자신의 진로와 적성에 맞는 일이 무엇인지 고민했다.석사과정과 회사 생활을 비교하니 공부와 연구가 자기 적성에 더 맞는다는 것을 알고 실무경력을 활용하기 위해 성균관대학교 무역학과 박사과정에 진학했다.박사 학위 취득 후에는 임용전까지 여러 대학에서 강의하고 연구를 해왔다.대학원에서 공부 할 때 좋았던 것은 내부 교수님들이나 외부의 저명한 학자를 초청한 특강에 참석할 수 있었던 것이다.지식의 폭을 넓히고 새로운 아이디어를 떠올릴 수 있으므로 이런 특강이 더욱 자주 열렸으면 하는 바람이 있었다.박사과정 진학 이후 아이가 태어났는데 아침 일찍 출근하고 늦게 퇴근하던 회사 생활과 비교해서 정시에 퇴근하고, 탄력적으로 시간을 조정할 수 있어서 가정에도 충실 할 수 있는 기회였다.연구실 생활중 기억에 남는 것은 지도교수가 창립한 국제금융소비자학회의 학회를 준비했던 일이다.한국에서 2회, 일본, 중국, 인도네시아까지 5번의 학회를 준비하는것이 쉽지 않았지만, 여러 교수들을 만나고 새로운 지식을 배울 수 있었다.연구원 시절에는 무역결제, 전자무역과 관련된 연구를 했다.기업들이 수행하는 무역의 전자화와 관련된 과제 현황 등에 관한 내용이다.연구를 하면서 어려웠던 점은 이와 관련된 데이터를 얻기가 힘들었던 것이다.온라인에서 직접 데이터를 수집했는데, 기업과의 협력이나 데이터 공유가 활성화 되었으면 했다.",
    },
    {
      popUpId: 8,
      popUpTitleText: "대학은 창업의 놀이터: ‘가치사자’ 창업 이야기",
      popUpStudentName: "임용희(문헌정보학과, 다학제인포매틱스연계전공 15)",
      popUpMainText:
        "임용희(문헌정보학과, 다학제인포매틱스연계전공 15) 대표는 우리 대학 졸업 후 미국에서 UX 디자인 석사과정을 밟으며 대학생과 사회초년생, 혼밥족의 현명한 소비를 위한 동네 공동구매 앱, ‘가치사자’를 창업해 2022년 여름 런칭을 앞두고 있다.임 대표는 자신과 친구들이 기숙사, 자취방에서 겪는 문제를 해결하고 싶어서 직접 앱을 만들게 됐다. 대학생 시절 5년 중 4년은 기숙사에 살 정도로 긴 기숙사 생활을 했다. 잊지 못할 좋은 추억을 많이 쌓았지만, 항상 시간에 쫓기고 취사가 어려운 상황이었다. 의식주 중 식(食)이 큰 고민이었다. 기숙사에 살 때는 혼자 음식을 시켜 먹기가 가격 때문에 어려웠고 자취할 때는 식재료를 다 사용하지 못해서 아깝게 버리는 일이 많았다.학부 재학시절 해외 탐방 기회로 실리콘밸리와 유럽의 다양한 테크 기업들을 다녀올 수 있었다. 특히 2017년, 2019년 대학혁신과공유센터의 해외융합프로젝트를 통해 스탠포드 d.school의 수업을 청강하고 구글, SAP 등 다양한 테크 회사를 직접 방문하며 디자인사고, UX 디자인은 물론 스타트업의 중요성과 테크의 영향력에 대해 배웠다. 학창시절의 다양한 경험으로 창업에 대한 꿈을 키울 수 있어서 대학이 자신에게는 창업의 놀이터가 되어준 셈이라고 말했다.",
    },
    {
      popUpId: 9,
      popUpTitleText: "강원대학교 조교수 임용",
      popUpStudentName: "무역학과 박세현 박사",
      popUpMainText:
        "일반대학원 무역학과 박세현 박사(무역상무 전공)가 올해 3월 강원대학교 조교수로 임용되었다.박세현 박사는 무역 분야 전문자격사인 관세사로 관세법인, 한국무역협회, 관세사무소대표 등 무역실무 현장에서 10여 년간 근무한 경력을 가지고 있으며, 2020년 8월[국제무역에서 원산지규정의 특성이 특혜관세 실행과 무역성과에 미치는 영향에 관한 연구](지도교수:박명섭)로 박사학위를 취득했다.박사학위 취득 이후 무역실무 분야에서 다양한 연구와 학회 활동을 하고 있으며, Journal of Korea Trade(SSCI)와 무역학 관련 한국연구재단 등재지에 십여 편의 논문을 게재했다. 성균관대학교, 동국대학교, 전북대학교에서 겸임 및 외래교수 등을 거쳐 2022년 3월부터 강원대학교 국제무역학과 조교수로 임용되었다.박세현 박사는 “성균관대학교 대학원 무역학과에서 많은 것을 배웠고 늘 마음으로 지도해주신 박명섭 교수님께 감사드리고 싶다”며 “강원대학교에서도 무역실무 분야의 심도 있는 연구와 학생지도 그리고 무역학의 발전에 노력할 계획이다”고 소감을 밝혔다.",
    },
    {
      popUpId: 10,
      popUpTitleText: "선배가 알려주는 해외유학 장학금 조언",
      popUpStudentName: "관정 이종환 재단 장학생 안치효(전자전기공학부 11) 동문",
      popUpMainText:
        "안치효(전자전기공학부 11) 동문은 본교 졸업후 University of Michigan에서 석사를 마치고 Georgia Tech (조지아 공과대학) 전기과에서 박사를 올해부터 시작했다. 연구 주제는 아직 정확하게 정해지지 않았지만, 현재 Computer Architecture 분야중 MLSys 분야에 특별히 관심을 가지고 교수와 프로젝트를 진행하고 있다.대학원 진학은 유학을 결심하기 이전에 학부과정중에 했었다. 특히 전공분야에서 모르는 내용을 질문 할때, 많은 경우 대학원 과정에서 배우는 내용이거나 현재 진행되는 연구인 일이 많아 대학원 진학을 결심하게 됐다. 외국 대학으로 유학을 생각하게 된 시기는 정보통신 대학에서 자매결연을 맺은 학교중 하나인 Queen&#39;s University Belfast에서 1년간 교환학생을 하고, 이 시기에 20개 정도 되는 유럽 국가들을 여행 하면서 부터다. 이 기간 동안 다른 교육방식을 받고 자란 학생, 그리고 사람들과의 교류를 통해서 시야를 넓힐 수 있었고, 다양한 배경의 사람들과 함께 일하는 환경이 큰 시너지 효과를 낼 수 있다는 것을 깨달았다. 이에 해외 대학원 유학을 결심해서 16년도부터 2년간 준비 후 2018년 가을학기에 처음으로 미국 미시건으로 출국했다.",
    },
    {
      popUpId: 11,
      popUpTitleText: "순간을 잡아, 내 생각을 현실로 만드는 법",
      popUpStudentName: "이찬주(경제학과 17)",
      popUpMainText:
        "나에게 납득이 될 수 있는 이유를 찾으려 - “내 목소리를 내는 삶”고등학교 시절 교내 학보사에서 2년 동안 활동했다. 어느 고교에나 있는 ‘신문반’으로 생각하기 쉽지만, 우리는 발간되는 회차 마다 모든 기자가 한 편의 사설을 작성해야 했다. 나도 자연스럽게 내 이름으로 사설 한 편씩을 작성해서 올렸다. ‘학교에서 풀뿌리 민주주의를 펼치자’ 등 내 목소리를 가득 담은 글들을 교지에 실었다. 이를 통해 내 목소리를 내는 삶에 크게 끌렸던 것 같다. 내 이름으로 글을 쓰는 과정에서 나 자신의 역할과 사회에서의 나의 역할을 계속해서 고민했다.사회과학계열로 입학할 당시 주위에서 가장 뜨거운 화두는 ‘전공 진입’이었다. 밥을 먹을 때도, 밤새 학우들과 이야기를 나눌 때도 한 번 쯤 훑고 지나갔던 주제였다. 1학기 학점이 확정되고, 2학기 말로 치달아 갈수록 전공 진입에 관한 고민은 각자마다 더욱 깊어갔다. 일찌감치 어떤 전공으로 진입할지 정한 학우들의 근거는 ‘취직이 잘 되는 학과’ 내지는 ‘자신의 학점에 맞춰서 가는 학과’가 대부분이었다. 나는 전공 진입에 있어 한 치 앞의 ‘나무’를 바라보기보다는, 나 자신에게 충분히 납득 갈 수 있는 ‘숲’을 내다보는 근거를 세우고 싶었다. 전공 진입은 대학 4년을 넘어 내 삶의 경로를 어느 정도 결정할 선택이라고 생각했기 때문이다. 이를 위해서는 내 자신이 어떤 삶의 목표와 지향을 꿈꾸는지 투철한 고민이 필요했다. 그래야만 내 자신에게 충분히 납득이 될 수 있어서다.",
    },
    {
      popUpId: 12,
      popUpTitleText: "기부, 그 이상의 의미",
      popUpStudentName: "손유승(스포츠과학과 15)",
      popUpMainText:
        "“기부? 어느 정도 위치나 재력 있는 사람들이 하는 거 아니야?”, “돈을 기부하는 것 말고는 다른 기부가 있을까?” 등 ‘기부’에 있어 사람들마다 생각하는 의미가 있을 것이다. 하지만 앞선 생각들은 ‘기부’의 일부분만 보여준다. 내가 생각하는 ‘기부’의 의미는 특정한 사람들이 하는 것만이 아니라 누가 하든 남을 돕겠다는 본인의 뜻이 담긴 행위고, 그 액수와 형태는 다양하다. 단발성으로 그치는 것이 아닌 스스로에게 긍정적인 동기부여를 주어 ‘기부’를 지속적으로 하게 될 때야말로 참의미에서 ‘기부’가 이루어진 것이라고 생각한다.기부의 시작 나는 장애인이다. 우리는 보통 장애인이라면 신체적으로 불편한 사람을 먼저 떠올린다. 하지만 정신적으로 부족한 면이 있으면 그 역시 장애를 가졌다. 남이 힘들 때 도움을 주지 못하거나 타인의 성공에 축하하는 마음 보다 시기하는 마음이 더 크다면 그것도 정신적 장애다. 나 역시 이러한 마음이 있다. 사실 이런 시기심을 완전히 없앨 수는 없다. 하지만 조금이라도 다른 사람을 배려하고 상대방의 입장에서 생각해보고 행동한다면 부족함을 채울 수 있다.",
    },
    {
      popUpId: 13,
      popUpTitleText: "서울과학종합대학원대학교 조교수 임용",
      popUpStudentName: "약학대학 이슬아 박사(석박통합 15)",
      popUpMainText:
        "약학대학 이슬아 박사(석박통합 15학번)가 2022년 3월 서울과학종합대학원대학교 조교수로 임용되었다. 이슬아 박사는 2020년 2월 “Chemical analysis of Korean wild mushrooms, Phellinus baumii and Gymnopilus junonius(지도교수: 김기현)”를 주제로 박사학위를 받은 후, 한국해양과학기술원 부설 극지연구소에서 약 2년간 박사후연구원 과정을 보냈다. 식물, 버섯, 미생물 그리고 극지 유래 생물자원 등 다양한 천연 소재들에 대한 성분 분석과 구조 동정 및 생리활성 연구를 통해 현재까지 총 38편의 SCIE급 논문(제1저자 24편, 공저자 14편)을 발표했다. 또한 학위과정 동안 국내외 학회 활동을 통해 15여회 학술 논문을 발표했으며, 생약학회 및 대한약학회에서 우수포스터상, 우수구두발표상 및 학술기여상 등을 다수 수상했다.이슬아 박사는 특히 약용버섯, 희귀버섯, 독버섯 등의 다양한 한국 야생버섯으로부터 생리활성 성분 연구를 진행해왔는데, 최근 “Non-peptide secondary metabolites from poisonous mushrooms: overview of chemistry, bioactivity, and biosynthesis”라는 주제로 독버섯으로부터 발견된 비펩타이드 이차대사산물의 화학적 특징, 생물활성 및 생합성에 대해 정리하여 Natural Product Reports (IF=13.423)에 1저자로 논문을 게재했다.",
    },
    {
      popUpId: 14,
      popUpTitleText: "충북대학교 윤리교육과 조교수 임용",
      popUpStudentName: "유학대학 한국철학과 강보승 박사(유학·동양학부 98)",
      popUpMainText:
        "유학대학 한국철학과 강보승 박사(유학·동양학부 98학번, 한국철학과 석사07학번, 동양철학과 박사 09학번)가 충북대학교 윤리교육과 조교수로 3월 임용되었다.강보승 박사는 2017년 8월,「퇴계 이황의 수양론 연구」(지도교수: 최일범)로 박사학위(한국철학전공)를 받고 전통문화연구회, 서울교육대학교, 성균인성교육센터(센터장 이천승 교수) 연구원을 거쳐 2022년 3월 충북대학교 윤리교육학과 조교수로 임용되었다.박사과정에서 BK21 사업을 통한 연구 논문 발표를 시작으로 다양한 연구 활동을 해온 강보승 박사는 SBS문화재단과 서울장학재단의 박사과정 지원사업에 선정되었고, 상하이 한중인문학 포럼, 하노이 퇴계학 국제학술회의, 연구재단 등재 학술지 등을 통해 한국 유학과 관련된 다수의 연구 성과를 발표했다. 또한 인성교육 기획과 연구, 시행에 힘써 성균인성교육센터가 ‘2019 대한민국 인성교육 대상’을 수상하는 데에 기여했다.한국철학사연구회, 한국교양교육학회, 한국철학사상교육연구회, 중봉조헌선생기념사업회, 사단법인 둥근나라, 시습지역아동센터 등에서 임원으로 활동하며 학술활동 및 봉사활동을 활발히 하고 있다.",
    },
    {
      popUpId: 15,
      popUpTitleText: "상지대학교 미래인재대학 경찰법학과 조교수 임용",
      popUpStudentName: "법학과 도규엽 박사(08)",
      popUpMainText:
        "우리 대학 법학과를 졸업한 도규엽 박사(08)가 상지대학교 미래인재대학 경찰법학과 조교수로 올해 3월 임용되었다. 도규엽 박사는 법과대학 법학과를 졸업한 뒤 일반대학원 법학과에서 형사법을 전공하며 석사 및 박사학위까지 취득한 바 있다. 주요 연구실적으로는 「무면허 의료행위의 사회상규 위배 여부 판단요소」, 「간접정범의 실행의 착수시기」 등 다양한 실적을 보유하고 있으며, 「형법각론」이라는 저서도 공저한 바 있다.도규엽 박사는 “대학에서 학생들을 교육하는 일은 비단 학생들의 학문적 역량을 키우는 것에 그치지 않고 그들이 나아갈 방향을 제시하는 나침반이 되어주는 것, 그들이 가고자 하는 길을 안내하는 내비게이션이 되어주는 것, 그들이 고민에 빠져 있을 때 고민을 들어주고 힘을 북돋워 주는 멘토 또는 상담사가 되어주는 것, 그들이 성공적인 사회의 일원이 되는 데에 가교가 되어주는 것으로의 의미 또한 가진다고 생각한다. 또 그들이 공무원시험이나 특정 자격시험 합격 등 현실적인 목표를 성취할 수 있도록 돕는 것도 중요한 사명이라고 본다. 학생들이 학문적ㆍ인격적 소양 함양과 수험실력의 향상 모두를 균형 있게 이룰 수 있도록 하기 위해 최선을 다하는 교수가 되고자 한다”라고 임용 각오를 밝혔다.",
    },
    {
      popUpId: 16,
      popUpTitleText: "무(無)능력자, 무한(無限)한 능력자가 되다",
      popUpStudentName: "허정원(컬처앤테크놀로지융합전공 19)",
      popUpMainText:
        "1인 플랫폼, 도전적인 선택을 시작하다 주도적인 사회과학계열 신입생의 도전신입생 시절 고향이 부산이라, 서울에 처음 상경한 이후로 모든 것이 신기했다. 연고도 없는 곳에서 빨리 인연을 쌓고 많은 인간관계를 형성해야 한다는 조급함과 특유의 외향적 성격으로 1학년 때부터 주도적으로 여러 활동에 도전했다. 사회과학계열이라 전공을 정해야 했지만, 많은 활동을 했음에도 마땅히 좋아하는 것을 찾지 못해 해매고 있었다.  ‘진로를 너무 어렵게 생각한 것은 아닐까?’ 라는 근본적 질문에 도달했고, 미래에 대한 고민을 잠시 내려놓고 ‘평소에 내가 사람들에게 어떻게 보이는지’ 생각해봤다.‘1인 플랫폼’. 내가 겪은 경험을 타인에게 얘기해 공감대를 형성하고, 나만의 가치로 재구성해 또 다른 프로슈머, 즉 소비자이자 제작자를 창출하는 것을 즐기는 나의 별명. 다양한 활동을 하면서 ‘사람들을 만나고 내 이야기를 들려주는 걸 좋아한다.’는 걸 깨달았다.  여기서 이야기는 나만의 내용을 담은 콘텐츠다. 자연스럽게 그들과의 대화를 통해 여러 간접경험들을 네트워킹하면서, 나로 인해 변화하거나 내 말에 영감을 받아 어떤 활동에 도전하는, 더 나아가서 ‘내 콘텐츠를 재밌어하는’ 사람들을 만나는 것은 큰 기쁨을 선사했다. 다양한 형태의 콘텐츠로 세상에 나를 알리고 싶고, 이것이 가시적인 모습으로 드러났으면 하는 바람이 생겼다. 그래서 직접 사람들을 연결하는 1인 플랫폼이 되고자 결심했고, 이후에 겪은 경험들을 스토리텔링 콘텐츠를 활용해서 타인에게 전달함으로써 그들에게 긍정적 영향력을 끼치는 것을 지금까지 계속했다.",
    },
    {
      popUpId: 17,
      popUpTitleText: "한국해양대학교 글로벌해양인문학부 부교수 임용",
      popUpStudentName: "동아시아학술원 손성준 박사",
      popUpMainText:
        "동아시아학술원의 손성준 박사가 한국해양대학교 글로벌해양인문학부 동아시아문화전공 부교수로 올해 3월 임용됐다.손성준 박사는 우리 대학에서 영어영문학과 중어중문학을 함께 전공하였으며, 2012년 8월 동아시아학술원 동아시아학과에서「영웅서사의 동아시아 수용과 중역의 원본성: 서구 텍스트의 한국적 재맥락화를 중심으로」(지도교수 한기형)로 박사학위를 받았다. 이후 중국해양대학교 한국학과 전임강사, 부산대학교 점필재연구소·성균관대학교 동아시아학술원 HK연구교수로 재직했으며, 성균관대학교 ∙ 서울대학교 ∙ 고려대학교 등에서 강의를 담당해 왔다. 상허학회 · 한국문학연구학회 · 국제어문학회 · 국제한국문학문화학회에서 편집위원을, 한국비교문학회에서 학술이사를 맡고 있기도 하다.주요 연구 분야는 근대 동아시아를 대상으로 한 비교문학 및 번역문학으로서, 특히 서양어-일본어-중국어-한국어로 연이어 번역된 근대 텍스트의 횡단과 변주를 꾸준히 탐색했다. 한국 근대문학의 번역과 창작, 그리고 검열의 연관성을 다룬 저서 『근대문학의 역학들 –번역 주체 · 동아시아 · 식민지 제도』는 2020년 대한민국학술원 우수학술도서 및 교육부 우수학술지원사업 50선에 선정된 바 있다. 최근에는 대한제국기 잡지의 현대어 번역 및 연구 활동을 집중적으로 수행하고 있으며, 차기 저서 『중역한 영웅 –근대전환기 한국의 서구영웅전 수용』의 출판을 준비 중이다.",
    },
    {
      popUpId: 18,
      popUpTitleText: "목표와 함께 앞길을 뛰어가기",
      popUpStudentName: "조수영(소비자학과 19)",
      popUpMainText:
        "성공의 전제조건은 목표를 갖는 것이다. 성공의 전제는 목표를 세우고 그 목표를 달성하기 위해 노력하고 분투하면서 경험과 성과를 얻는 것이 중요하다. 고교 졸업후 ‘더이상 이렇게 살면 안되겠다’라는 생각이 들었다. 부모님 친구 자녀의 우수한 사례를 들으면서 변화해야겠다는 다짐을 했고, 목표를 세우게 됐다. 내가 생각하는 목표는 장기 목표와 단계별 목표로 나눌 수 있는데 학생이라 장기 목표보다는 단계별 목표를 먼저 세웠다. 첫번째 목표는 고교 졸업 후 유학을 하고, 석사학위를 취득해야겠다는 것. 대학생활도 이 목표를 가져서 도전을 하고 성과를 얻었다. 단계적 목표는 내가 무엇을 해야 하는지 판단하고 방향을 선택해야 한다. 1학년 때 많은 학과와 다양한 분야의 수업을 들으면서 자신이 좋아하는 방향으로 선택하는 것을 제안하고 싶다. 주변의 우수한 학우들과 교수님들과 교류하면서 자신의 단계별 목표를 더욱 확고히 하고 노력하면 좋을 것이다.",
    },
    {
      popUpId: 19,
      popUpTitleText: "대학에 와서 새롭게 만나게 된 나",
      popUpStudentName: "오세영(영상학과 19)",
      popUpMainText:
        "나의 전문성은 무엇일까?: 찾고 또 찾기, 다양한 활동 속에 계속되는 여정 전문성은 지금 전공하고 있는 전공이 아닐 수도 있다. 자신의 전공 적합성이 맞아서 온 사람도 있겠지만, 성적을 맞추다 보니 우연히 들어온 경우도 대다수다. 나는 영상학과에 재학하며 고등학교 때부터 다양한 영상을 만들고 영화를 제작한 경험도 있었다. 전공 적합성이 완벽하게 일치하는 학과에 들어왔다고 생각했는데 입학한지 2개월 만에 마음이 바뀌기도 했다. 예상과는 다른 현실에 많은 방황을 했다. 수업을 통해 배우는 내용들이 나의 높은 기대치에 도달하지 못했고, 내가 이상적으로 생각했던 영화제작 환경 여건에 많은 한계점이 있었다. 대학 졸업 후 진로 트랙을 실제 들었을 때 오히려 정확했던 나의 진로가 의심이 가며 큰 혼란에 빠졌다. 새내기 시절 해외대학 입학, 편입, 반수 등등 수많은 방법들을 생각하고 찾아보며 고민하는 시간을 보냈다. 현실적으로 내가 선택할 수 있는 방법은 다양한 활동을 시도 해보는 것이었다. 학생활동, 대외활동은 다양한 분야를 실제와 유사한 환경에서 경험해 볼 최고의 기회였다. 그래서 내가 참가할 수 있는 활동들을 찾아보기 시작했다.",
    },
    {
      popUpId: 20,
      popUpTitleText: "무인도에서 살아남기",
      popUpStudentName: "강훈(화학공학/고분자공학부 18)",
      popUpMainText:
        "내가 감명 깊었던 성공 스토리는 뭘까?2018년 2월, 독학사에서 가정학 학사를 취득했다. 독학사란 평생교육진흥원에서 주최하는 학점은행제의 여러 갈래 중 하나로, 대학교 검정고시라고 생각하면 된다. 나는 20대 후반의 나이에도 대학교를 가지 않았다. 그 이전의 삶을 설명하자면 ‘도피와 도망에 익숙해진 겁쟁이의 제자리걸음’이었다. 학사라는 자격요건이 생겼기에 현실에 맞춰 자격증 공부를 하거나 공무원 시험 준비를 하려고 했다. 마음속으로는 늦게라도 대학에 가고 싶었지만, 20대 후반에 대학에 간다는 주변의 인식이 좋지 않았고, 6~7년간 쉰 공부를 다시 할 보장이 없었기에 섣불리 행동하지 못했다. 그러던 중에, 2018년 11월 비보이 홍텐의 ‘프리스타일 세션’ 세계대회 우승은 망설이던 나에게 시작을 안겨준 계기가 되었다. 춤을 오랫동안 추었고, 좋아한 나에게 비보이 `홍텐`은 슈퍼스타와 다름없다. 하지만, 당시에 홍텐의 나이는 30대 중반이었고 10대와 20대가 즐비한 비보이씬에서 홍텐의 평가는 전성기가 다소 지나지 않았느냐는 평가가 있었다. 하지만, 홍텐은 보란 듯이 우승했고, 증명했다. 주위의 시선을 실력으로 답한 것이다. 이후에 홍텐은 다가올 2024년 파리 올림픽에서 처음 하는 비보이 종목에서 40대의 나이에 금메달을 목표로 인터뷰를 진행했다.",
    },
    {
      popUpId: 21,
      popUpTitleText: "한식으로 세계를 연결하다",
      popUpStudentName: "김나연(러시아어문학과 19)",
      popUpMainText:
        "취미에서 나의 재능 찾기 나는 10대부터 지금까지 ‘맛있는 음식’에 그 누구보다 진심인 사람이다. 맛있는 음식이 그날의 기분을 좌우할 정도로 진지한 태도를 갖고 있다. 고등학교 때 내신 시험이 끝나면 친구들을 집에 초대해 직접 요리를 해주기도 했다. 오죽하면 고등학교 친구들이 ‘나연나, 너는 꼭 미슐랭같이 음식을 다루는 일을 누구보다 행복하게 할 것 같아’라고 했다. 머릿속에는 맛집 알고리즘도 완벽하게 입력되어있다. 인상 깊었던 맛집의 요리는 집에서 다시 구현해보기도 한다. 그렇다. 맛있는 음식을 사랑하는 마음은 ‘요리’가  취미가 되게 해주었다. 코로나 팬데믹으로 외식이 더 제한되면서 집에서 요리하는 시간이 더욱 늘어났다. 유행하는 메뉴부터 홈카페, 브런치까지 요리는 일상의 활력이 됐다. 갈수록 요리 실력도 향상되면서 요리는 나에게 더욱 흥미롭게 다가왔다. 2020년 우리 대학교 문과대 학생회에서 주최한 ‘랜선 집밥 요리경연대회’에 홈브랜치를 만들어 응모했는데 1등을 했다. ‘어? 나 요리 좀 하네?!’라고 속으로 생각했다. 그냥 취미로만 두기에는 너무 행복해하는 나를 보면서, ‘맛있는 음식’을 아예 인생의 목표로 살려보자는 다짐을 하게 되었다.",
    },
    {
      popUpId: 22,
      popUpTitleText: "인하대 물리학과 조교수 임용",
      popUpStudentName: "물리학과 졸업생 박혜진 박사",
      popUpMainText:
        '물리학과 박혜진 박사(학부 07학번, 석박통합 11학번)가 인하대학교 물리학과 조교수로 2022년 3월 임용된다. 박혜진 박사는 2016년 8월 "Statistical physics approach to social phenomena: Emergence of cooperation and network structure of human preference(지도교수 김범준)"로 박사학위(응집 및 통계물리)를 받고 졸업한 뒤 독일 Max-Planck Institute에서 3년 반 동안 박사후연구원으로 활동했으며, Asia Pacific Center for Theoretical Physics(아시아 태평양 이론물리연구소)에서 약 2년 동안 그룹 리더로 일했다. 구성 요소 사이의 상호작용 결과로 나타나는 거시적인 집단 현상을 주로 연구하며, 진화·생태계의 다양성과 안정성 등을 연구해 총 18편의 논문을 SCI저널에 게재했다. 세상에 대한 호기심이 많았던 박혜진 박사는 학부 4학년에 물리학과 김범준 교수의 통계물리 연구실에서 학부연구생으로 연구자의 삶을 시작했다. 윷놀이에서 말을 업거나 잡을 수 있을 때 어느 것이 더 유리한 전략인지 밝히는 연구를 시작으로 통계 물리학 방법론을 이용해 세상을 이해하는 연구를 진행해 나갔다.',
    },
    {
      popUpId: 23,
      popUpTitleText: "누구든 이룰 수 있는 학생성공의 비밀",
      popUpStudentName: "홍혜준(국어국문학과 16)",
      popUpMainText:
        "학생성공의 조건 그는 학생 성공을 정의하기보다, ‘학생성공’이라는 말에 집중했다. 대학생이 대학에서 반드시 얻어야 할 역량이 무엇인지 생각했다. 각자 정의한 성공의 특수성만큼, 모두가 도달할 수 있는 보편적인 ‘학생성공’ 지점을 설정하는 것이 중요하기 때문이다. 그가 생각하는 학생성공의 시작점은 ‘올바르게 생각하는 것’이다. 대학교에 와서 뜻을 펼치려는 학생들은 어떻게 하면 이성적, 논리적, 비판적으로 생각할 수 있는지 배워야 한다. ‘논리적 사고’, ‘비판적 사고’, ‘수리적 사고’ 등의 창의와 사유 과목이 괜히 성균관대학교 교양 필수로 정해진 것이 아니라는 뜻이다. 그렇다면 올바른 생각은 뭘까? 그가 학생성공의 첫 번째 기준으로 삼은 ‘올바른 생각’은 사실판단과 가치판단을 모두 포함한다. ‘1 더하기 1은 2다’라는 것은 사실 판단이다. 수학이 정하는 ‘올바른’ 답이다. ‘표현의 자유가 침해되는 것은 나쁜 일이다’는 가치판단에 해당한다. 공학이나 자연과학, 수학을 학습한다면 올바른 사실판단에 집중해야 한다. 반면 ‘아름다운 것’에 대한 가치 판단이 필요한 예술이나, 인문학과 사회학 등에서 역설되는 여러 주장에는 올바른 사실판단과 가치판단이 모두 중요하게 작용한다. 결국 대학생이라면 전공에 상관없이 올바른 생각에 도달하기 위해서 노력해야한다.",
    },
    {
      popUpId: 24,
      popUpTitleText: "강릉원주대학교와 국립공주대학교 조교수로 각각 임용",
      popUpStudentName: "유학과 안승우 박사와 일반대학원 유학과 이치억 박사",
      popUpMainText:
        "유학과 졸업생 안승우 박사(유학·동양학부 99, 유학과 석사 04, 유학과 박사 11)와 일반대학원 유학과 졸업생 이치억 박사(석사 02, 박사 05)가 각각 타 대학 교수로 임용됐다.(위 사진 왼쪽이 안승우 박사)안승우 박사는 2017년 2월, 「『주역(周易)』 직관적 사유의 도덕화 과정에 관한 연구」(지도교수: 김성기)로 박사학위(유교철학·예악학전공)를 받고 동아시아학술원 유교문화연구소(소장: 김도일) 책임연구원, 유학대학·학부대학 강사를 거쳐 2021년 9월 강릉원주대학교 철학과 조교수로 임용되었다. 박사과정 시절부터 다양한 연구 활동을 해온 안승우 박사는 한국연구재단의 글로벌 박사 양성 사업에 선정되기도 했고 미국 하와이대학, 중국 니산논단, 인도네시아 세계유교대회 등 국제학술대회에서 연구 성과를 발표하기도 했다. 「『주역(周易)』으로 박사학위를 받은 이후 꾸준한 연구 활동을 통해 한국연구재단 우수논문지원사업에 선정되기도 했고 두 차례 연속 한국연구재단 신진 연구자 지원사업에 선정되어 연구를 수행해 오고 있다.",
    },
    {
      popUpId: 25,
      popUpTitleText: "인의예지와 수기치인의 정신으로 아동인권을 생각하다",
      popUpStudentName: "김용재(영어영문학과 17)",
      popUpMainText:
        "역사를 좋아했던 학생 그는 초·중·고 학창 시절부터 역사를 좋아했다. 역사 만화책이나 역사 관련 서적을 즐겨 봤고, 부모님과 함께 박물관이나 유적지 등도 자주 방문했다. 고등학교 3년 내내 학교 역사동아리에서 활동하며 역사 왜곡 바로잡기 캠페인을 벌이기도 했고, 대학에 와서도 사학과로 활동하며 여러 고적지로 답사를 다녔다. 이러한 관심사를 바탕으로 2017년 1학년 여름방학에 안중근 의사 기념 사업회에서 진행하는 안중근 평화기자단에 지원하여 활동했다. 안중근 평화기자단 소속 기자로서 주로 했던 취재는 일제강점기 시절 일본군의 만행에 관한 것이었다. 특히 일제에 의한 강제 징용과 일본군 위안부 문제를 주로 다루었는데, 취재를 위해 사례들을 하나하나 살피며 큰 분노를 느꼈다. 성인뿐만 아니라 어린 아동들도 다수 끌려갔었고, 머나먼 타국에서 형용하기 어려울 정도의 신체적·정신적 피해를 겪은 사례가 셀 수 없이 많았다. 다수의 피해 사례들을 보며 참담함을 느낀 그는 과거 그 시절과 비교할 수 없을 정도로 나아진 오늘날에는 아동들에 대한 대우가 어떤지 문득 궁금해졌다. 그리고 자신의 학창 시절을 되돌아보았다.",
    },
    {
      popUpId: 26,
      popUpTitleText: "나를 나누며 나를 채우다",
      popUpStudentName: "김민지(글로벌경영학과 18)",
      popUpMainText:
        "김민지 학우는 많은 가르침을 준 캄보디아에서의 봉사활동 1년을 담았다. 아이들과 동고동락하며 지낸 1년은 그에게 평생 값지게 간직할 순간들이다. 12년 전에 쏘아올린 작은 공 10살 때 필리핀에서 한 달간 거주한 적이 있다. 하루는 같이 지내던 친척들과 식사를 하러 갔는데 또래쯤 되 보이는 아이들이 돈을 달라고 구걸하는 모습을 보고 충격을 받았다. 이후 약 10년 뒤인 2018년 여름방학 때는 라오스에 다녀오게 되었다. 그때도 어린 아이가 다가와 구걸하는 모습을 보고 다시 충격을 받았다. 10년간 자신과 수많은 사람들이 보낸 물품들, 참여한 행사들, 모금한 기부금들은 소용이 없던 것일까? 나라가 바뀌어서, 다시 말해 필리핀과 라오스는 다른 나라이기 때문에 이것 또한 새로운 사건으로 받아들여야 하는 것인가? 왜 여전히 돌아다니며 돈을 달라고 하는 아이들이 존재하는 것인가? 그리고 어째서 이런 일들이 ‘어떤 나라’에서는 충분히 일어날 수 있는 일이라고 받아들여질 수 있는 것일까? 그는 이 일을 전혀 당연하지 않게 생각했고 그동안의 금전적, 물품 후원 등 간접적인 도움이 아닌, 그들의 생활에 들어가서 직접적인 도움을 주는 활동을 하고 싶어졌다.",
    },
    {
      popUpId: 27,
      popUpTitleText: "win ≠ success",
      popUpStudentName: "DENG LINWEI 등림위(미래도시융합공학과, 석사과정)",
      popUpMainText:
        "성공의 의미는 사람마다 추구하는 기준이 다르기 때문에 그 답이 하나로 귀결되지 않는다. 무엇보다 시간의 흐름에 따라 과거, 현재, 미래의 생각이 다를 수 있다.그가 생각하는 성공은 매 순간 주어진 일에 호기심을 갖고 도전하는 것이다. 특히 성공은 쉽게 도달할 수 없으며 끝이 정해져 있지 않아 하루아침에 이룰 수도 없다. 또한 강인한 끈기뿐만 아니라 건강한 신체와 정신이 받쳐주어야 하고 장기적인 관점에서 생각하는 것이 필요하다. 따라서 누군가에게 성공은 결과보다 ‘과정’이 더 중요할 수 있다. 어떤 경우에는 과정이 전부인 경우도 있다. 수학자는 수학 공식을 증명하기 위해 수십 년의 노력을 한다. 그에게 2020년은 많은 도전정신과 호기심을 준 해였다. 생각지 못한 힘든 시기에 성균관대학교에서 도전하며 경험한 첫 유학생활 이야기를 공유하고자 공모전을 신청했다. ‘스스로 돌아보는 시간’이지만 이 글을 읽는 유학생, 다른 학우들, 그리고 또 다른 누군가에게 삶의 힘을 줄 수도 있지 않을까 희망한다.",
    },
    {
      popUpId: 28,
      popUpTitleText: "전문대생에서 소셜·의료데이터 연구자가 되기까지",
      popUpStudentName: "김동훈(문헌정보학과 박사과정)",
      popUpMainText:
        "아프리카 속담에 빨리 가려면 혼자 가고 멀리 가려면 함께 가라는 말이 있다. 혼자서 사막을 지나고 정글을 헤치고 나가기는 힘들다는 것이다. 그는 여기에 ‘제대로 가고 싶다면 함께 가라’는 말을 덧붙이고 싶다고 말했다. 인생의 목적을 찾기 위해 대학원으로 2015년 겨울, 졸업을 앞두고 있었다. 그는 당시, 구로의 3년제 전문대학을 다니고 있었다. 학교는 취업 시장에서 괜찮은 평가를 받고 있었고, 본인의 성적도 과에서 석차 4등으로 나쁘지 않았다. 부모님이나 교수님은 그가 대기업에 입사하는 것을 당연하게 생각하고 계셨다. 그렇지만 그는 취업이 아니라 대학원에 들어가겠다고 말했다. 부모님과 교수님의 강한 반대가 따랐다. 그럼에도 여러 고심 끝에 대학원 진학을 결정했다. 그러나 하고 싶은 일, 가치 있는 일을 하고 싶어 대학원 진학을 선택했으나 준비과정이 쉽지 않았다.  대학원 진학을 위해서는 4년제 학위가 필요했고, 이를 위해 학점은행제 수업과 자격증으로 전공학점을 채워야 했다. 학점은행제 수업은 그럭저럭 할 만 했지만 자격증 취득이 문제였다.",
    },
    {
      popUpId: 29,
      popUpTitleText: "같은 연구실 선후배 사이, 각각 타대학 교수로 나란히 임용",
      popUpStudentName: "강동호 박사(학부 08학번, 대학원 14학번)와 김명수(전자전기공학부 10) 박사",
      popUpMainText:
        "우리 대학 전자전기공학부 졸업생 강동호 박사(학부 08학번, 대학원 14학번)와 김명수 박사(학부 10학번)가 이번 2학기에 각각 광주과학기술원(GIST)과 울산과학기술원(UNIST)의 전기전자컴퓨터공학과 조교수로 임용될 예정이다. 2014년 전자전기컴퓨터공학과 석사과정 1기로 재학 중이던 강동호 박사와 전자전기공학부 3학년이었던 김명수 박사는 사수와 부사수로 만나 박진홍 교수의 지도하에 ｢2차원 물질 도핑 기술을 이용한 광검출기 연구｣를 수행하였고, 당시 해당분야 우수 논문(Advanced Functional Materials, 8월기준 피인용 횟수: 193회)을 공동1저자로 발표한 바 있다. 강동호 박사(위 사진)는 2019년 2월 성균관대에서 ｢Process Technology for 2D Semiconducting Devices｣로 박사학위를 받고 이후 약 2년반 동안 싱가포르 Nanyang Technological University (NTU)에서 Postdoc연구원으로 2차원 물질 기반 스트레인 연구 및 펌프-프로브 분광법에 관한 연구를 수행하였다.",
    },
    {
      popUpId: 30,
      popUpTitleText: "공부와 직장생활, 두 마리 토끼 잡기",
      popUpStudentName: "김가람 (경제학과 박사과정 20, 現 한국자산평가 애널리스트)",
      popUpMainText:
        "김가람 원우가 류두진 지도교수와 공저한 논문이 Business/Finance분야 상위 7% SSCI학술지인 International Review of Financial Analysis (Impact Factor=5.373)에 게재되었다. 2019년 우리대학 경제학과에서 석사학위를 취득한 김가람 원우는 작년에 경제학과 박사과정에 입학하여, 현재 두 학기 수업을 마쳤다. 박사과정 수료도 하기전에, Finance분야 최상위 학술지에 제1저자로 논문을 게재한 경우는 세계적으로도 유례가 드물다. 우리나라 금융시장에서 투자자 심리와 애널리스트 보고서의 정보력과의 관계를 정보 불확실성 하에서 설명하는 행태재무분야 논문으로 게재정보는 다음과 같다. IRFA, Vol. 77, Oct. 2021, 101835, https://doi.org/10.1016/j.irfa.2021.101835",
    },
    {
      popUpId: 31,
      popUpTitleText: "다채로운 고품질 박막산화물 제작과 발현 물성들에 대한 연구",
      popUpStudentName: "물리학과 강경태 박사 경북대학교 조교수 임용",
      popUpMainText:
        '물리학과 강경태 박사(학부 08학번, 석박통합 11학번)가 경북대학교 물리학과 조교수로 2021년 9월 임용된다. 강경태 박사는 2018년 2월 "Oxygen vacancy induced physical properties in epitaxial oxide thin films (지도교수: 최우석)"로 박사학위(응집물리실험)를 받고 졸업한 뒤 본교 및 미국 Los Alamos National Laboratory 등지에서 약 3년간 박사후연구원으로 활동했다. 전이금속 산화물 박막 및 이로 구성된 소자에서 발현되는 양자물성이 주요 연구 분야이며 총 15편의 논문을 SCI저널에 게재했다. 연구에 대한 열망이 컸던 강경태 박사는 학부 3학년부터 물리학과 한정훈 교수의 다체계이론 연구실에서 학부연구생으로 연구자의 삶을 시작했고, 이어 본교 대학원생으로 위상물질, 산화물내에서의 Rashba 효과 등의 이론연구를 수행했다. 이처럼 이론물리학 분야를 연구한 강경태 박사는 박사과정을 마무리하기 앞서 자신이 모델링하던 물질과 물성을, 특히 당시 연구주제였던 ‘전이금속 산화물’을 실제로 발현시키는 데 관심을 가지게 되었고, 박막산화물을 다루는 최우석 교수의 에피산화물 박막 연구실로 적을 옮긴 바 있다.',
    },
    {
      popUpId: 32,
      popUpTitleText: "양자 광학의 빛-물질 상호작용 기반 고효율 태양전지 소재 개발",
      popUpStudentName: "화학과 조대흠 박사 경북대학교 조교수 임용",
      popUpMainText:
        "화학과 졸업생 조대흠 박사(학부 08학번 및 석박통합 12학번)가 경북대학교 화학과 조교수로 임용되었다. 조대흠 박사는 2017년 2월, ｢A DFT Approach for the Systematic Design of High-Spin Organic Magnetic Molecules｣(지도교수: 이진용)로 박사학위(물리화학, 양자화학)를 받고 University of California at Irvine에서 박사후연구원, 2021년 3월에 한림대학교 화학과에 조교수를 거쳐 2021년 9월에 경북대학교 화학과 조교수로 임용 예정이다. 본교 재학 중에는 학부 4학년 때부터 이진용 교수 연구실의 학부연구생으로 유기금속 촉매반응 메카니즘을 양자계산으로 규명하고 새로운 촉매를 제안하는 연구를 수행하여 관련 분야 국제 저명 학술지에 제1저자로 논문을 발표했다. 대학원 재학 중 일본(와세다대학교 2개월), 스페인(바르셀로나대학교 4개월), 미국(UC, Irvine 3개월)을 방문하여 새로운 연구에 도전하는 것을 두려워하지 않고 성실히 연구를 수행하여 모든 공동연구 기관에서의 연구결과를 국제 저명학술지에 제1저자로 논문을 게재했다.",
    },
    {
      popUpId: 33,
      popUpTitleText: "다양한 무기물 화합물 반도체 소재의 합성과 전자소자 응용 연구",
      popUpStudentName: "화학과 차지현 박사 충남대학교 조교수 임용",
      popUpMainText:
        "화학과 차지현 박사가 충남대학교 화학과 무기화학 조교수로 임용되었다. 차지현 박사는 2008년 화학과 일반대학원에 입학해 2010년 석사학위를 취득하고 2016년 2월 박사학위(무기화학전공, 지도교수: 정덕영)를 받았다. 졸업 후 본교에서 박사후연구원으로 재직해왔으며 2021년 9월부로 충남대학교 화학과에 부임할 예정이다. 차지현 박사는 다양한 무기물 화합물 반도체 소재의 합성과 이들의 전자소자 응용 연구를 진행해왔다. 학위과정 중 칼코게나이드(chalcogenide) 화합물 반도체 나노입자 전구체의 합성과 이를 이용한 용액공정 CIGS 박막 태양전지 제작 연구를 진행했으며, 이후 금속 할라이드(metal halide) 화합물의 단결정 합성, 복합 나노구조 소재 및 박막소자 개발 연구로 연구 영역을 넓혀왔다.",
    },
    {
      popUpId: 34,
      popUpTitleText: "외국인 교수가 말하는 대학원 생존기",
      popUpStudentName: "엄금철 경영학과 마케팅전공 박사",
      popUpMainText:
        "지난 6월 24일 목요일, 자연과학캠퍼스 제2공학관에서 제2회 대학원 학생 성공 스토리 특강이 진행되었다. 연사를 맡은 엄금철 교수는 경영학과 마케팅전공 박사 과정을 수료한 이후 지난해 가천대학교 글로벌경영학과에 조교수로 임용됐다. 이와 관련하여 ‘외국인 교수가 말하는 대학원 생존기’를 주제로 강연을 펼쳤다. 이번 특강은 코로나 바이러스로 인하여 Webex를 통해 비대면으로 진행됐다.대학원에 대하여 엄금철 교수는 대학원을 지식을 배우기 위한 곳이 아닌 연구를 하기 위한 곳이라고 표현했다. 대학원은 학부와는 달리 정비된 지식을 배우는 것이 아니라 새로운 지식을 창출하는 곳이라 이를 염두에 두고 진로를 선택해야 한다고 전했다. 때문에 연구가 아닌 깊이 있는 실무 지식의 습득을 위해 일반 대학원에 진학하고자 하는 학생들은 더 깊이 있는 진로를 고민하는 시간을 가져볼 것을 조언했다.",
    },
    {
      popUpId: 35,
      popUpTitleText: "빈틈 속에서 발견한 세상",
      popUpStudentName: "김동은(건축학과 15)",
      popUpMainText:
        "김동은 학우는 대학교 입학 전까지 건축에 대해 깊게 생각해 본 적이 없었다. 고등학교 시절에는 부모님이 시키는 대로 앉아서 외우는 공부만 했다. 고3이 되서 대학의 학과를 선택할 때 손재주도 좀 있는 것 같고 단순히 건축모형을 만드는 것이 재밌겠다 싶어 별 고민 없이 건축학과를 선택했다.신입생시절은 반쪽짜리 건축학도였다. 건축에 원대한 꿈을 품고 온 동기들과 달리 단순히 재밌어 보여서 건축학과를 선택한 터라 건축에 대한 애정이 많지 않았다. 겉보기에 설계를 공부하는 건축학과지만 실질적으로 건축이 무엇인지 하나도 몰랐던 학생이었다. 그렇지만 지금은 대학생활의 절반 정도를 지나니 건축학도가 된 것은 그의 인생에서 가장 큰 전환점이 되었다. 건축학과를 다니면서 많은 것들을 배우고 얻을 수 있었기 때문이다.건축을 공부하며 얻은 세 가지 성장건축학과에 입학하고 한 달 동안 느낀 것은 건축에 대해 아는 것이 없다는 것이었다.",
    },
    {
      popUpId: 36,
      popUpTitleText: "속이 알찬 강정이 되는 길",
      popUpStudentName: "박제인(영어영문학과 17)",
      popUpMainText:
        "십시일밥은 청년 빈곤 해소를 목적으로 하는 비영리 민간단체이자 동명의 사업으로 공강 시간을 활용하여 학생식당에서 근로한 대가로 받는 식권을 취약계층 학우들에게 전달하고 있다. 2020년 현재 15개 대학에서 운영되고 있으며, 우리 학교는 5년째 명륜캠퍼스 경영관 금잔디식당과 계약해 식권 지원 사업을 진행한다. 현재 우리 학교 십시일밥의 목표는 명륜캠퍼스 내 타 학생식당으로 봉사활동을 확장하고 율전캠퍼스에도 십시일밥을 설치하는 것이다.박제인 학우는 꽤 오랫동안 봉사활동과 인연이 있다. 고등학교에 입학한 지 얼마 되지 않았을 때 교실을 벗어나 더 넓은 세상을 경험하고 싶었다. 그때 처음 도전한 것이 봉사활동이었다. 보통 대입 포트폴리오를 목적으로 한두 가지 봉사활동을 꾸준히 하는 것이 바람직하다고 하지만, 그쪽과 거리가 멀었던 박제인 학우는 그때그때 끌리는 것을 찾아 해보는 편이었다. 버스와 지하철로 닿을 수만 있다면 먼 거리여도 개의치 않았고 그가 살던 동네 남양주에서 양천, 부천, 안산 등지로 혼자 씩씩하게 다녔다.",
    },
  ];
  const $studentActivitiesMoreBtn = get(".student-activities-page .studentActivities-more-Btn button"),
    $studentActivitiesBoxUl = get(".student-activities-page .student-activities-box ul");

  let makeStudentImgCnt = 0,
    studentActivitiesCnt = 0,
    $studentActivitiesBoxLi = null,
    $studentActivitiesBoxLiImg = null,
    $studentActivitiesBoxLiHover = null,
    $studentActivitiesBoxLiHoverName = null,
    $studentActivitiesBoxLiHoverLine = null,
    $studentActivitiesBoxLiHoverStory = null,
    $studentActivitiesBoxLiPopUp = null,
    $studentActivitiesBoxLiPopUpTitleText = null,
    $studentActivitiesBoxLiPopUpName = null,
    $studentActivitiesBoxLiPopUpMainText = null,
    $studentActivitiesBoxLiPopUpMoreLink = null,
    selectedActivitiesBoxLiPopUp = null,
    selectedActivitiesBoxLiImgHover = null;

  const studentActivitiesMakePopup = () => {
    $studentActivitiesBoxLiPopUp = document.createElement("div");
    $studentActivitiesBoxLiPopUpTitleText = document.createElement("p");
    $studentActivitiesBoxLiPopUpName = document.createElement("strong");
    $studentActivitiesBoxLiPopUpMainText = document.createElement("p");
    $studentActivitiesBoxLiPopUpMoreLink = document.createElement("a");
    $studentActivitiesBoxLiPopUp.classList.add("student-activities-pop-up");
    $studentActivitiesBoxLiPopUpTitleText.classList.add("student-activities-pop-up-title-text");
    $studentActivitiesBoxLiPopUpTitleText.innerHTML = studentActivitiesPopUpData[studentActivitiesCnt].popUpTitleText;
    $studentActivitiesBoxLiPopUpName.innerHTML = studentActivitiesPopUpData[studentActivitiesCnt].popUpStudentName;
    $studentActivitiesBoxLiPopUpMainText.classList.add("student-activities-pop-up-main-text");
    $studentActivitiesBoxLiPopUpMainText.innerHTML = studentActivitiesPopUpData[studentActivitiesCnt].popUpMainText;
    $studentActivitiesBoxLiPopUpMoreLink.setAttribute("href", "#");
    $studentActivitiesBoxLiPopUpMoreLink.textContent = "자세히 보기";
    $studentActivitiesBoxLiPopUpMoreLink.addEventListener("click", e => {
      e.preventDefault();
    });
    $studentActivitiesBoxLiPopUp.append(
      $studentActivitiesBoxLiPopUpTitleText,
      $studentActivitiesBoxLiPopUpName,
      $studentActivitiesBoxLiPopUpMainText,
      $studentActivitiesBoxLiPopUpMoreLink
    );
  };
  const makeStudentList = () => {
    if (makeStudentImgCnt === 36) return 0;
    for (let i = makeStudentImgCnt; i < makeStudentImgCnt + 6; i++) {
      $studentActivitiesBoxLi = document.createElement("li");
      $studentActivitiesBoxLiImg = document.createElement("img");
      $studentActivitiesBoxLiHover = document.createElement("div");
      $studentActivitiesBoxLiHoverName = document.createElement("span");
      $studentActivitiesBoxLiHoverLine = document.createElement("span");
      $studentActivitiesBoxLiHoverStory = document.createElement("span");
      $studentActivitiesBoxLiImg.setAttribute("src", studentActivitiesData[i].studentImgUrl);
      $studentActivitiesBoxLiHover.classList.add("img-hover");
      $studentActivitiesBoxLiHoverName.classList.add("img-hover-name");
      $studentActivitiesBoxLiHoverName.innerHTML = studentActivitiesData[i].studentName;
      $studentActivitiesBoxLiHoverLine.classList.add("img-hover-line");
      $studentActivitiesBoxLiHoverStory.classList.add("img-hover-story");
      $studentActivitiesBoxLiHoverStory.innerHTML = studentActivitiesData[i].studentStroy;
      $studentActivitiesBoxLiHover.append(
        $studentActivitiesBoxLiHoverName,
        $studentActivitiesBoxLiHoverLine,
        $studentActivitiesBoxLiHoverStory
      );
      $studentActivitiesBoxLi.append($studentActivitiesBoxLiImg, $studentActivitiesBoxLiHover);

      const popupBanner = e => {
        studentActivitiesCnt = i;
        studentActivitiesMakePopup();
        if (i % 2 === 0) {
          $studentActivitiesBoxLiPopUp.style.right = "-106%";
          $studentActivitiesBoxLiPopUp.classList.add("left");
        } else {
          $studentActivitiesBoxLiPopUp.classList.add("right");
        }
        e.currentTarget.append($studentActivitiesBoxLiPopUp);
        $studentActivitiesBoxLiPopUp.classList.add("on");
        e.currentTarget.children[1].style.display = "flex";
        selectedActivitiesBoxLiPopUp = $studentActivitiesBoxLiPopUp;
        selectedActivitiesBoxLiImgHover = e.currentTarget.children[1];
      };
      //  클릭했을때, 팝업창 출력
      $studentActivitiesBoxLi.addEventListener("click", e => {
        if (e.currentTarget.lastElementChild.classList.contains("on")) {
          e.currentTarget.lastElementChild.classList.remove("on");
          e.currentTarget.children[1].style.display = "none";
        } else {
          if (selectedActivitiesBoxLiPopUp !== null) {
            selectedActivitiesBoxLiPopUp.classList.remove("on");
            selectedActivitiesBoxLiImgHover.style.display = "none";
            selectedActivitiesBoxLiPopUp = null;
            popupBanner(e);
          } else {
            popupBanner(e);
          }
        }
      });
      $studentActivitiesBoxUl.append($studentActivitiesBoxLi);
    }
    makeStudentImgCnt += 6;
  };
  //  실행문
  // --------------------------------
  makeStudentList();
  $studentActivitiesMoreBtn.addEventListener("click", makeStudentList);
};
// 총장실;
const presidentsOfficeInit = () => {
  let swiper = new Swiper(".presidents-swiper", {
    loop: true,
    autoplay: true,
    delay: 3000,
  });
};
// 학교연혁
const universityHistoryInit = () => {
  const $universityHistoryTab = getAll(".university-history .tab-click span"),
    $universityHistoryYHSE = get(".university-history .yhseverance"),
    $universityHistoryYS = get(".university-history .yonsei");

  $universityHistoryTab.forEach(item => {
    item.addEventListener("click", () => {
      $universityHistoryTab.forEach(clickTab => {
        clickTab.classList.remove("on");
      });
      item.classList.add("on");
    });
  });
  $universityHistoryTab[0].addEventListener("click", () => {
    $universityHistoryYHSE.style.display = "block";
    $universityHistoryYS.style.display = "none";
  });
  $universityHistoryTab[1].addEventListener("click", () => {
    $universityHistoryYHSE.style.display = "none";
    $universityHistoryYS.style.display = "block";
  });
};
// 연구산학
const researchAchievementInit = () => {
  const $researchAchievementAchBox = get(".research-achievement .achievement"),
    $researchAchievementResBox = get(".research-achievement .researcher"),
    $researchAchievementAchLi = getAll(".research-achievement .achievement li"),
    $researchAchievementResLi = getAll(".research-achievement .researcher li"),
    $researchAchievementAchLiImg = getAll(".research-achievement .achievement li .achievement-img"),
    $researchAchievementResLiImg = getAll(".research-achievement .researcher li .researcher-img");

  let researchAchievementAchImgType = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.png"];

  $researchAchievementAchLi.forEach((item, idx) => {
    item.addEventListener("click", () => {
      $researchAchievementAchLi.forEach(AchLi => {
        AchLi.classList.remove("on");
        AchLi.style.backgroundImage = "none";
      });
      item.classList.add("on");
      $researchAchievementAchBox.prepend(item);
      $researchAchievementAchLiImg[
        idx
      ].style.backgroundImage = `url(../images/research_industry/research_achievement/research_achievement_${researchAchievementAchImgType[idx]})`;
    });
  });

  $researchAchievementResLi.forEach((item, idx) => {
    item.addEventListener("click", () => {
      $researchAchievementResLi.forEach(ResLi => {
        ResLi.classList.remove("on");
        ResLi.style.backgroundImage = "none";
      });
      item.classList.add("on");
      $researchAchievementResBox.prepend(item);
      $researchAchievementResLiImg[
        idx
      ].style.backgroundImage = `url(../images/research_industry/research_achievement/researcher_${idx}.png)`;
    });
  });
};
//산학협력
const industryCooperationInit = () => {
  const $iacgVisImgBox = get(".industry-cooperation .visual-img-list"),
    $iacgVisImgList = getAll(".industry-cooperation .visual-img-list li"),
    $iacgVisBtnPrev = get(".industry-cooperation .iacg-main-visual .visual-btn .iacg-visual-prev"),
    $iacgVisBtnPause = get(".industry-cooperation .iacg-main-visual .visual-btn .iacg-visual-pause"),
    $iacgVisBtnNext = get(".industry-cooperation .iacg-main-visual .visual-btn .iacg-visual-next"),
    $iacgPlazaMenu = getAll(".iacg-information-plaza .inner .plaza-txt .plaza-txt-menu ul li"),
    $iacgPlazaMenuBox = get(".iacg-information-plaza .inner .plaza-box .plaza-sub-box .swiper-wrapper"),
    $iacgPlazaMenuPrev = get(".iacg-information-plaza .inner .plaza-box .plaza-box-btn button:nth-child(1)"),
    $iacgPlazaMenuNext = get(".iacg-information-plaza .inner .plaza-box .plaza-box-btn button:nth-child(2)");
  let iacgVisCnt = 0,
    iacgVisTimeID = null,
    iacgVisIsPlay = true;

  let iacgPlazaMenuList,
    iacgPlazaMenuListStr,
    iacgPlazaMenuListP,
    iacgPlazaMenuListSpan,
    iacgPlazaMenuListSlide = 100,
    iacgPlazaMenuListCnt = 0,
    iacgPlazaMenuListLength = 0;

  let iacgPlazaMenuArr = [
    { title: "사업공고", subtitle: "머신러닝을 활용한 뇌파 분석 기법 개발", date: "2023-05-08" },
    { title: "사업공고", subtitle: "국립학교 제도개선 방안 ", date: "2023-05-08" },
    { title: "사업공고", subtitle: "첨단재생의료 산업분류체계 구축연구", date: "2023-05-08" },
    { title: "사업공고", subtitle: "지역화학안전 개선 지원 유해화학물질 운반정보 연구", date: "2023-05-08" },
    { title: "사업공고", subtitle: "현장탐지를 위한 휴대용 측정장비 정확도 개선 연구", date: "2023-05-08" },
    {
      title: "사업공고",
      subtitle: "원예산업 지속가능성 및 경쟁력 확보를 위한 R&D 동향 및 핵심기술분석 용역",
      date: "2023-05-08",
    },
    {
      title: "사업공고",
      subtitle: "장애학생 통합교육 교수학습 지원을 위한 평가 자료 개발",
      date: "2023-05-08",
    },
    { title: "사업공고", subtitle: "포용적 세계유산 설명 방법론 개발 연구 용역", date: "2023-05-08" },
    {
      title: "사업공고",
      subtitle: "2023년도 아시아 물 문제 해결을 위한 법률 사례 비교·분석 정책연구_재공고",
      date: "2023-05-08",
    },
    { title: "사업공고", subtitle: "평생교육사업 조사 분석 제2차 시범수행 연구", date: "2023-05-08" },
    { title: "기타사업공고", subtitle: "[헌법재판소] 정책연구용역", date: "2023-04-27" },
    {
      title: "기타사업공고",
      subtitle: "[예금보험공사) 2023년도 외부연구지원사업 공모 안내",
      date: "2023-04-25",
    },
    {
      title: "기타사업공고",
      subtitle: "2023년 다부처공동기획연구지원 사업 신규 기획과제 공모 알림",
      date: "2023-04-12",
    },
    {
      title: "기타사업공고",
      subtitle: "[강릉원주대학교 남북바다자원교류원]통일 학술논문 공모 안내",
      date: "2023-04-02",
    },
    { title: "기타사업공고", subtitle: "2024년 국민연금연구원 정규 연구과제 제안 안내", date: "2023-03-03" },
    {
      title: "공지사항",
      subtitle: "여성과학기술인 생애주기 플랫폼 W브릿지 대학(교원, 학생) 서비스 안내",
      date: "2023-04-12",
    },
    { title: "공지사항", subtitle: "2023년 국가 R&D 제도개선을 위한 온라인 의견 수렴", date: "2023-04-12" },
    { title: "공지사항", subtitle: "2022년 학생인건비 지급비율 안내", date: "2023-04-07" },
    {
      title: "공지사항",
      subtitle: "2023년도 한국연구재단 학술진흥본부 소관 주요 사업 연간추진일정 안내",
      date: "2023-03-17",
    },
    { title: "공지사항", subtitle: "외국인연구원 E-3(연구) 사증 관리 메뉴얼 및 양식", date: "2023-03-16" },
    {
      title: "공지사항",
      subtitle: "[통계개발원] 제3회 한국의 사회동향 포럼 개최 알림 및 사전등록 안내",
      date: "2023-03-10",
    },
    {
      title: "공지사항",
      subtitle: "[학생인건비통합관리] 국가연구개발사업 학생인건비 온라인 교육과정 안내",
      date: "2023-02-08",
    },
    {
      title: "공지사항",
      subtitle: "코로나바이러스감염증-19 대응 실험실 생물안전 가이드 제4판 개정 안내",
      date: "2023-01-27",
    },
    { title: "공지사항", subtitle: `'2022 축산유통포럼' 개최 안내`, date: "2022-12-08" },
    { title: "공지사항", subtitle: "<2022년 권역별 찾아가는 국가연구제도 설명회>", date: "2022-11-25" },
  ];

  //비주얼 롤링
  const iacgVisRolling = () => {
    if (iacgVisCnt > $iacgVisImgList.length - 1) {
      iacgVisCnt = 0;
    } else if (iacgVisCnt < 0) {
      iacgVisCnt = $iacgVisImgList.length - 1;
    }
    $iacgVisImgList.forEach(item => {
      item.style.opacity = "0";
    });
    $iacgVisImgList[iacgVisCnt].style.opacity = "1";
  };

  // 리스트 생성
  const iacgPlazaMenuMake = title => {
    const iacgPlazaMenuListMake = arrItem => {
      iacgPlazaMenuList = document.createElement("div");
      iacgPlazaMenuList.classList.add("swiper-slide");
      iacgPlazaMenuListStr = document.createElement("strong");
      iacgPlazaMenuListStr.textContent = arrItem.title;
      iacgPlazaMenuListP = document.createElement("p");
      iacgPlazaMenuListP.textContent = arrItem.subtitle;
      iacgPlazaMenuListSpan = document.createElement("span");
      iacgPlazaMenuListSpan.textContent = arrItem.date;
      iacgPlazaMenuList.append(iacgPlazaMenuListStr, iacgPlazaMenuListP, iacgPlazaMenuListSpan);
      $iacgPlazaMenuBox.append(iacgPlazaMenuList);
    };
    iacgPlazaMenuArr.forEach(arrItem => {
      if (title === "ALL") {
        iacgPlazaMenuListMake(arrItem);
      } else if (arrItem.title === title) {
        iacgPlazaMenuListMake(arrItem);
      }
    });
    iacgPlazaMenuList = getAll(
      ".iacg-information-plaza .inner .plaza-box .plaza-sub-box .swiper-wrapper .plaza-box-menu"
    );
    iacgPlazaMenuListLength = iacgPlazaMenuList.length;
  };

  //이전 버튼
  $iacgVisBtnPrev.addEventListener("click", () => {
    iacgVisCnt--;
    iacgVisRolling();
    clearInterval(iacgVisTimeID);
    if (iacgVisIsPlay) {
      iacgVisTimeID = setInterval(() => {
        iacgVisCnt++;
        iacgVisRolling();
      }, 3000);
    }
  });

  //다음 버튼
  $iacgVisBtnNext.addEventListener("click", () => {
    iacgVisCnt++;
    iacgVisRolling();
    clearInterval(iacgVisTimeID);
    if (iacgVisIsPlay) {
      iacgVisTimeID = setInterval(() => {
        iacgVisCnt++;
        iacgVisRolling();
      }, 3000);
    }
  });

  // 재생 - 일시정지 버튼
  $iacgVisBtnPause.addEventListener("click", () => {
    if (!$iacgVisBtnPause.children[0].classList.contains("xi-pause")) {
      $iacgVisBtnPause.children[0].classList.replace("xi-play", "xi-pause");
      iacgVisTimeID = setInterval(() => {
        iacgVisCnt++;
        iacgVisRolling();
      }, 3000);
    } else {
      $iacgVisBtnPause.children[0].classList.replace("xi-pause", "xi-play");
      clearInterval(iacgVisTimeID);
    }
    iacgVisIsPlay = !iacgVisIsPlay;
  });

  // 이미지 롤링
  iacgVisTimeID = setInterval(() => {
    iacgVisCnt++;
    iacgVisRolling();
  }, 3000);

  // 리스트 출력
  $iacgPlazaMenu.forEach((item, idx) => {
    item.addEventListener("click", e => {
      // 클래스
      $iacgPlazaMenu.forEach(item => {
        item.classList.remove("tab-click-on");
      });
      item.classList.add("tab-click-on");
      // 초기화
      $iacgPlazaMenuBox.innerHTML = "";
      $iacgPlazaMenuBox.style.transform = "translateX(0)";
      // 내용추가

      iacgPlazaMenuMake(e.currentTarget.textContent);

      swiper = new Swiper(".plaza-sub-box", {
        spaceBetween: 10,
        slidesPerView: "auto",
      });
    });
  });

  iacgPlazaMenuMake("ALL");

  // 리스트 이전 버튼
  $iacgPlazaMenuPrev.addEventListener("click", e => {
    swiper.slidePrev();
  });

  // 리스트 다음 버튼
  $iacgPlazaMenuNext.addEventListener("click", e => {
    swiper.slideNext();
  });

  let swiper = new Swiper(".plaza-sub-box", {
    spaceBetween: 10,
    slidesPerView: "auto",
  });
  iacgPlazaMenuMake("ALL");
};
// '#' link 막기
const emptyLinkPrevent = () => {
  const $emptyLink = getAll(`a[href='#']`);
  $emptyLink.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
    });
  });
};

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const pageName = get("#container").classList.value;
    const header = get("#header").classList.value;
    // header
    if (header === "mainheader") headerInit();
    // main
    if (pageName === "main") mainInit();
    // sub
    if (pageName === "signup-page") signupInit();
    if (pageName === "university-page") universityPageInit();
    if (pageName === "graduate-page") graduatePageInit();
    if (pageName === "news-info") ewhaNewsInit();
    if (pageName === "notice-info") noticeInit();
    if (pageName === "festival-event-page") festivalEventPageInit();
    if (pageName === "student-activities-page") studentActivitiesPageInit();
    if (pageName === "presidents-office") presidentsOfficeInit();
    if (pageName === "university-history") universityHistoryInit();
    if (pageName === "research-achievement") researchAchievementInit();
    if (pageName === "industry-cooperation") industryCooperationInit();
    emptyLinkPrevent();
  });
})();
