# Team project ewha

<br>

> html, Vanilla JS를 이용한 이화여대 마크업 홈페이지입니다.
>
> [배포링크](https://daylily-ewha-main.netlify.app/)
>
> [기획서](https://chugyeong.github.io/Ewha/worklist)
>
> 디자인 및 이미지 참고 [이화여대](https://www.ewha.ac.kr/ewha/index.do)

<br>

## 1. 기술 스택

<br>

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<br>

## 2. 팀 소개

<br>

|                            [김기철](https://github.com/habi-er)                             |                           [이원철](https://github.com/daylilyyy/)                           |                         [정종우](https://github.com/honeypunch97)                          |                            [추경](https://github.com/ChuGyeong)                             |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/133613789?v=4" width="100" height="100"/> | <img src="https://avatars.githubusercontent.com/u/126632198?v=4" width="100" height="100"/> | <img src="https://avatars.githubusercontent.com/u/57937641?v=4" width="100" height="100"/> | <img src="https://avatars.githubusercontent.com/u/121862169?v=4" width="100" height="100"/> |
|                                        **Frontend**                                         |                                        **Frontend**                                         |                                        **Frontend**                                        |                                        **Frontend**                                         |
|                                       로그인/회원가입                                       |                                        header/footer                                        |                                            메인                                            |                                          학교연혁                                           |
|                                          시설안내                                           |                                          공지사항                                           |                                            대학                                            |                                           총장실                                            |
|                                          학생활동                                           |                                          이화뉴스                                           |                                           대학원                                           |                                          연구성과                                           |
|                                         축제/이벤트                                         |                                          입학안내                                           |                                                                                            |                                          산업협력                                           |

<br>

## 3. 폴더구조

<br>

```
EWha
 ┣ admission_education
 ┃ ┗ admissions_information.html
 ┣ css
 ┃ ┣ reset.css
 ┃ ┗ style.css
 ┣ introduction_to_univ
 ┃ ┣ president’s_office.html
 ┃ ┗ university_history.html
 ┣ js
 ┃ ┗ main.js
 ┣ login_and_signup
 ┃ ┣ login.html
 ┃ ┗ signup.html
 ┣ research_industry
 ┃ ┣ industry_cooperation.html
 ┃ ┗ research_achievement.html
 ┣ univ_graduate
 ┃ ┣ graduate.html
 ┃ ┗ university.html
 ┣ univ_life
 ┃ ┣ facility_information.html
 ┃ ┣ festival_event.html
 ┃ ┗ student_activities.html
 ┣ univ_news
 ┃ ┣ ewha_News.html
 ┃ ┗ notice.html
 ┗ index.html
```

<br>

## 4. 프로젝트 일정

<br>

- 2023.04.28~2023.05.01 사이트 선정 및 프로젝트 기획
- 2023.05.02~2023.05.17 홈페이지 구현
- 2023.05.17~2023.05.30 모바일 작업 및 배포
  ​
  <br>
  ​

## 5. 사이트 미리보기

<br>

![mainpage](./images/ewha1.gif)
![subpage](./images/ewha2.gif)
![subpage](./images/ewha3.gif)

<br>

## 6. 주요 **기능**

<br>

> 상세 코드는 [바로가기](https://github.com/ChuGyeong/Ewha/blob/main/pc/js/main.js)에서 확인할 수 있습니다.
> ​

<br>

<details>
<summary>메인</summary>

<br>

### **배너 슬라이드 쇼**

```js
const rollingVisualBanner = () => {
  $visualBannerBox.style.transition = "0.4s";
  if (visualPrevCnt === 2 && visualCurrentCnt === 0) {
    $visualBannerBox.style.left = "-400%";
    setTimeout(() => {
      $visualBannerBox.style.transition = "0s";
      $visualBannerBox.style.left = `${slideArr[visualCurrentCnt]}`;
    }, 400);
  } else if (visualPrevCnt === 0 && visualCurrentCnt === 2) {
    $visualBannerBox.style.left = "0";
    setTimeout(() => {
      $visualBannerBox.style.transition = "0s";
      $visualBannerBox.style.left = `${slideArr[visualCurrentCnt]}`;
    }, 400);
  } else {
    $visualBannerBox.style.left = `${slideArr[visualCurrentCnt]}`;
  }
  // 페이징
  $visualPagingLi[visualPrevCnt].classList.remove("on");
  $visualPagingLi[visualCurrentCnt].classList.add("on");
  visualPrevCnt = visualCurrentCnt;
};
```

rollingVisualBanner 함수는 배너 슬라이드 쇼를 제어합니다. 이전/다음 버튼 클릭, 현재 배너 위치 업데이트, 페이지 버튼 작동 등을 처리합니다.
실행/중지 버튼 클릭 이벤트를 처리합니다.

### **실행/중지 버튼 이벤트 리스너**

```js
$visualActiveBtn.addEventListener("click", () => {
  if (visualIsRolling) {
    clearInterval(visualIntervalId);
    $visualActiveBtn.children[0].classList.replace("xi-pause", "xi-play");
  } else {
    visualIntervalId = setInterval(visualRolling, 6000);
    $visualActiveBtn.children[0].classList.replace("xi-play", "xi-pause");
  }
  visualIsRolling = !visualIsRolling;
});
```

배너 슬라이드 쇼가 작동 중이면 중지하고, 중지되었다면 다시 작동하도록 제어합니다.

### **이전/다음 버튼 이벤트 리스너**

```js
$visualPrevBtn.addEventListener("click", () => {
  visualCurrentCnt = visualCurrentCnt <= 0 ? visualLen - 1 : visualCurrentCnt - 1;
  rollingVisualBanner();
  if (visualIsRolling) {
    clearInterval(visualIntervalId);
    visualIntervalId = setInterval(visualRolling, 6000);
  }
});

$visualNextBtn.addEventListener("click", () => {
  // ...
});
```

각각 이전 또는 다음 배너로 전환하며 이동동안 자동 롤링이 작동 중이면 일시 중지하고 이동을 완료한 후 다시 시작하도록 합니다.
하단 페이징 조작을 처리합니다.

```js
$visualPagingLi.forEach((item, idx) => {
  item.addEventListener("click", () => {
    visualCurrentCnt = idx;
    rollingVisualBanner();
    if (visualIsRolling) {
      clearInterval(visualIntervalId);
      visualIntervalId = setInterval(visualRolling, 6000);
    }
  });
});
```

이 코드는 하단 페이징 조작을 처리합니다. 각 페이지 버튼을 클릭하면 해당 배너로 이동하며, 이동 동안 자동 롤링이 작동 중이면 일시 중지하고 이동을 완료한 후 다시 시작하도록 합니다.
배너 슬라이드 쇼를 설정된 시간 간격(6000ms)으로 자동으로 롤링하도록 setInterval을 설정합니다.

```js
visualIntervalId = setInterval(visualRolling, 6000);
```

배너 슬라이드 쇼를 설정된 시간 간격(6000ms)으로 자동으로 롤링하도록 setInterval을 설정합니다.

### **배너 롤링 및 페이징 업데이트**

```js
const bucheonNowRollingBanner = () => {
  let num = 300;
  if (bucheonNowPrevCnt === bucheonNowArr.length - 1 && bucheonNowCurrentCnt === 0) {
    $bucheonNowRollingBox.style.transition = "0.4s";
    $bucheonNowRollingBox.style.left = `${-bucheonNowArr[bucheonNowArr.length - 1] - num}px`;
    // ...
  } else if (bucheonNowPrevCnt === 0 && bucheonNowCurrentCnt === bucheonNowArr.length - 1) {
    $bucheonNowRollingBox.style.transition = "0.4s";
    $bucheonNowRollingBox.style.left = `${bucheonNowArr[0] - num}px`;
    // ...
  } else {
    $bucheonNowRollingBox.style.transition = "0.4s";
    $bucheonNowRollingBox.style.left = `${-bucheonNowArr[bucheonNowCurrentCnt]}px`;
  }
  $bucheonNowPagingLi.style.width = `${25 * (bucheonNowCurrentCnt + 1)}%`;
  bucheonNowPrevCnt = bucheonNowCurrentCnt;
};
```

이 함수는 배너를 롤링하고 페이징을 업데이트하는 기능을 구현합니다.

### **배너 이전/다음 버튼 이벤트 리스너**

```js
const bucheonNowRolling = () => {
   bucheonNowCurrentCnt = bucheonNowCurrentCnt >= bucheonNowArr.length - 1 ? 0 : bucheonNowCurrentCnt + 1;
   bucheonNowRollingBanner();
};
const bucheonNowReverseRolling = () => {
    ...
   bucheonNowRollingBanner();
};
```

이 함수는 다음/이전 배너로 이동하고, 롤링 배너 함수를 호출합니다.

```js
$bucheonNowNextBtn.addEventListener("click", bucheonNowRolling);
$bucheonNowPrevBtn.addEventListener("click", bucheonNowReverseRolling);
```

다음과 이전 버튼을 클릭했을 때 각각 bucheonNowRolling과 bucheonNowReverseRolling 함수를 호출합니다.
스크롤 이벤트를 처리해서 애니메이션을 실행합니다.

### **스크롤 반응형 애니메이션**

```js
window.addEventListener("scroll", () => {
  let scrollStandard = window.innerHeight + window.scrollY - $bucheonNowContent.offsetHeight / 2;
  if (scrollStandard >= $bucheonNowContent.offsetTop && bucheonNowIsPlayed === false) {
    $bucheonNowRollingBox.querySelectorAll("li").forEach((item) => {
      let startNum = 999;
      let goalNum = parseInt(item.dataset.num);
      let currentNum = parseInt(item.children[1].textContent);
      let speed = 30;
      let step = Math.ceil(Math.abs(startNum - goalNum) / 50);
      let timer = setInterval(() => {
        if (startNum <= goalNum) {
          clearInterval(timer);
          item.children[1].textContent = goalNum;
        } else {
          startNum -= step;
          if (startNum < goalNum) {
            startNum = goalNum;
          }
          item.children[1].textContent = startNum;
        }
      }, speed);
    });
    bucheonNowIsPlayed = true;
  }
});
```

이 부분은 스크롤 이벤트를 감지하고, 반응형 애니메이션을 실행합니다. 스크롤 시 애니메이션의 시작과 목표 숫자가 점진적으로 변하며, 스크롤 위치가 적절한 위치에 도달하면 애니메이션이 한 번만 실행됩니다.

<br>

</details>

<details>
<summary>header/footer</summary>

<br>

### **header 마우스 이벤트 리스너**

```js
$gnbChild.forEach((item, idx) => {
  item.addEventListener("mouseenter", (e) => {
    $gnbChildA[idx].style.color = "#A4B8AF";
  });
  item.addEventListener("mouseleave", (e) => {
    $gnbChildA[idx].style.color = "#fff";
  });
});

$gnbLi.forEach((liItem) => {
  liItem.addEventListener("mouseenter", (e) => {
    $bottomHeader.classList.add("on");
  });
  liItem.addEventListener("mouseleave", (e) => {
    $bottomHeader.classList.remove("on");
  });
});
```

해당 코드는 각 배열의 각 요소에 마우스 이벤트 리스너를 등록하여 해당 요소에 마우스가 진입하거나 벗어났을 때 텍스트 색상을 변경하는 기능과 클래스를 추가하거나 제거하는 기능을 구현합니다.

### **스크롤 이벤트 처리**

```js
$topBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
```

버튼 클릭 시 페이지를 맨 위로 스크롤하는 기능을 구현하였습니다.

### **버튼 클릭 이벤트 리스너 및 내용 펼침/접힘**

```js
$closeBtn.addEventListener("click", (e) => {
  $topFooter.classList.toggle("folded");
  if ($topFooter.classList.contains("folded")) {
    $topH.style.transform = "translateY(0)";
    $closeBtni.classList.replace("xi-angle-down", "xi-angle-up");
    $topHide.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    $closeBtni.classList.replace("xi-angle-up", "xi-angle-down");
    $topHide.forEach((item) => {
      item.style.display = "block";
      $topH.style.transform = "translateY(-30px)";
      item.animate([{ opacity: 0 }, { opacity: 1 }], 500);
    });
  }
});
```

버튼 클릭 시 $topFooter 요소의 클래스를 토글하고, 해당 클래스에 따라 다양한 스타일 변경과 애니메이션을 수행합니다. 이를 통해 요소의 상태에 따라 펼침/접힘 효과를 적용하거나 동적인 변화를 나타낼 수 있습니다.

<br>

</details>

<details>
<summary>학교소개</summary>
​​
<br>

## **학교연혁**

<br>

### **탭 클릭 이벤트 리스너 및 탭 내용 표시/숨김**

```js
$universityHistoryTab.forEach((item) => {
  item.addEventListener("click", () => {
    $universityHistoryTab.forEach((clickTab) => {
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
```

첫 번째 탭 클릭 시, HistoryYHSE 내용은 표시되고 HistoryYS 내용은 숨겨집니다. 이 코드의 주요 기능은 사용자가 탭을 클릭하면 해당 탭에 대한 내용을 표시하고 다른 탭의 내용을 숨기는 것입니다.

<br>

## **총장실**

<br>

### **비주얼 이미지 슬라이드**

```js
$presidentsSlide.style.transition = "0.5s";
$presidentsSlide.style.left = `${presidentsOfficeCurrent * -100}%`;
$presidentsOfficeBtn[presidentsOfficeOld].classList.remove("on");
$presidentsOfficeBtn[presidentsOfficeCurrent].classList.add("on");

if (presidentsOfficeCurrent < $presidentsSlideList.length - 1) {
  presidentsOfficeCurrent++;
} else {
  presidentsOfficeCurrent = 0;
}
visual();
```

슬라이드를 변경하고 적절한 버튼을 활성화시키는 역할을 합니다.  
0.5s: 슬라이드 전환 애니메이션 시간을 결정합니다.  
left: 어떤 슬라이드가 화면에서 보여질지 결정합니다. left 값이 변경되면 각 슬라이드의 위치가 바뀌고 보여지는 슬라이드 갱신됩니다.  
그 다음 활성화된 슬라이드 버튼의 상태를 변경합니다. 이전 버튼의 클래스는 remove를 사용해 on 클래스 제거하고, 현재 버튼은 add를 사용해 on 클래스를 추가합니다.

슬라이드 인덱스 값을 증가시키고, 마지막 슬라이드까지 진행한 경우 0으로 재설정되어 첫 번째 슬라이드로 돌아갑니다. 그리고 visual 함수를 호출해 슬라이드 변경이 수행됩니다.

### **이벤트 리스너 및 자동 롤링 설정**

```js
$presidentsOfficeBtn.forEach((item, idx) => {
  item.addEventListener("click", () => {
    ...
  });
});
presidentsOfficeTimeID = setInterval(rolling, 3000);
```

해당 코드는 각 버튼에 클릭 이벤트 리스너를 설정해 수동으로 슬라이드를 변경하게 합니다. 클릭된 버튼의 인덱스 값을 바탕으로 슬라이드를 업데이트하고, 자동 롤링은 잠시 중지하고 다시 시작됩니다. 자동 롤링은 3초 간격으로 설정됩니다.

<br>

</details>

<details>
<summary>대학/대학원</summary>

<br>

## 대학

<br>

### **데이터**

```js
let universityArr = [
  /* 대학 데이터 */
];
```

universityArr 배열에 대학별 관련 정보를 저장합니다. 이 배열에는 대학의 ID, 제목, 설명, 학부 정보 및 이미지 링크가 포함되어 있습니다.

### **대학 리스트 생성 함수**

```js
const pageOpening = (arr) => {
  arr.forEach((item) => {
    // DOM 요소 생성 및 클래스 추가
    // DOM 요소에 데이터 바인딩 및 추가
    // 학부 목록 생성
    // DOM 요소를 페이지에 추가
  });
};
```

주어진 배열을 인수로 받아 대학 목록을 생성합니다. 각 대학별 요소를 생성하고 데이터를 바인딩한 다음 페이지에 추가합니다.

### **스크롤 이벤트 처리**

```js
const scrollOpening = () => {
  let windowHeight = window.innerHeight;
  let screenTop = window.scrollY;
  let screenBottom = screenTop + windowHeight - 250;
  let $sections = getAll(".university .univ-list li");
  $sections.forEach((item) => {
    if (screenBottom >= item.offsetTop) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
};
```

스크롤 이벤트를 처리하고 대학 목록의 각 섹션에 애니메이션 효과를 적용합니다. 사용자가 스크롤하면 해당 섹션이 화면에 표시되는 경우 애니메이션으로 표시합니다.

### **대학 목록 생성 및 이벤트 리스너 등록**

```js
pageOpening(universityArr);
scrollOpening();
window.addEventListener("scroll", scrollOpening);
```

pageOpening 함수를 호출하여 페이지에 대학 목록을 생성하고, scrollOpening 함수를 호출하여 초기 애니메이션을 처리합니다. 또한 스크롤 이벤트 리스너를 등록하여 사용자의 스크롤 동작을 감지하고 애니메이션을 적용합니다.

<br>

## 대학원

<br>

### **대학원 페이지 배너 기능 구현**

```js
const graduatePageBanner = () => {
  const $bannerPaging = getAll(".banner .paging li");
  const $bannerImgs = getAll(".banner .banner-box li");
  let bannerCurrentCnt = 0;
  let bannerPrevCnt = 0;
  let bannerIntervalID = null;
  const bannerRolling = () => {
    $bannerPaging[bannerPrevCnt].classList.remove("on");
    $bannerPaging[bannerCurrentCnt].classList.add("on");
    $bannerImgs[bannerPrevCnt].classList.remove("on");
    $bannerImgs[bannerCurrentCnt].classList.add("on");
    bannerPrevCnt = bannerCurrentCnt;
  };
  const bannerInterval = () => {
    bannerCurrentCnt = bannerCurrentCnt >= $bannerPaging.length - 1 ? 0 : bannerCurrentCnt + 1;
    bannerRolling();
  };
  $bannerPaging.forEach((item, idx) => {
    item.addEventListener("click", () => {
      bannerCurrentCnt = idx;
      bannerRolling();
      clearInterval(bannerIntervalID);
      bannerIntervalID = setInterval(bannerInterval, 5000);
    });
  });
  bannerIntervalID = setInterval(bannerInterval, 5000);
};
```

이 함수는 배너의 rolling/sliding 기능과 pagination 동작을 설계하여 작동하게끔 합니다. 각 이미지 및 페이징 요소에 이벤트 리스너를 추가하여, 사용자가 페이징을 클릭할 때 이미지가 해당 순서대로 변경됩니다. 또한 페이징을 자동으로 변경하는 배너 인터벌을 지정합니다.

### **대학원 페이지 공지사항 기능 구현**

```js
const graduatePageNotice = () => {
  const $noticeMenu = getAll(".notice .menu-bar .menu-list li");
  const $noticeContentBox = get(".graduate-page .notice .content-box");
  let noticeArr = [
    // 데이터 생성
  ];
  let noticeCurrentCnt = 0;
  let noticePrevCnt = 0;
  $noticeMenu.forEach((item, idx) => {
    item.addEventListener("click", () => {
      noticeCurrentCnt = idx;
      $noticeMenu[noticePrevCnt].classList.remove("on");
      $noticeMenu[noticeCurrentCnt].classList.add("on");
      $noticeContentBox.innerHTML = "";
      for (let i = 0; i < noticeArr[idx].content.length; i++) {
        let tempLi = document.createElement("li");
        let tempContent = document.createElement("strong");
        let tempDate = document.createElement("em");
        tempContent.textContent = noticeArr[idx].content[i];
        tempDate.textContent = noticeArr[idx].date[i];
        tempLi.append(tempContent, tempDate);
        $noticeContentBox.append(tempLi);
      }
      noticePrevCnt = noticeCurrentCnt;
    });
  });
};
```

공지사항의 각 카테고리를 클릭할 때 해당 카테고리의 내용을 동적으로 변경하는 기능을 제공합니다. 이벤트 리스너를 사용하여, 사용자가 메뉴 항목을 클릭할 때 공지사항의 내용이 해당 카테고리의 데이터로 업데이트됩니다.

### **대학원 페이지 스크롤 이벤트 및 애니메이션 구현**

```js
const graduatePageCommon = () => {
  const scrollOpening = () => {
    let windowHeight = window.innerHeight;
    let screenTop = window.scrollY;
    let screenBottom = screenTop + windowHeight - 250;
    let $sections = getAll(".con-box");
    $sections.forEach((item) => {
      if (screenBottom >= item.offsetTop) {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }
    });
  };
  scrollOpening();
  window.addEventListener("scroll", scrollOpening);
};
```

스크롤 이벤트를 처리하고 페이지 섹션에 애니메이션 효과를 추가하는 기능을 구현합니다. 사용자가 스크롤하면 해당 섹션이 화면에 표시되었을 때 애니메이션 효과로 표시됩니다.

<br>

</details>
<details>
<summary>연구산학</summary>
​
<br>

## 연구성과

<br>

### **이미지 리스트 클릭 이벤트 리스너**

```js
$researchAchievementAchLi.forEach((item, idx) => {
  item.addEventListener("click", () => {
    $researchAchievementAchLi.forEach((AchLi) => {
      AchLi.classList.remove("on");
      AchLi.style.backgroundImage = "none";
    });
    item.classList.add("on");
    $researchAchievementAchLiImg[idx].style.backgroundImage = `url(../images/research_industry/research_achievement/research_achievement_${researchAchievementAchImgType[idx]})`;
  });
});
```

배열의 각 이미지 리스트에 클릭 이벤트 리스너를 추가하여 활성화 용도의 클래스(on) 및 배경 이미지를 변경합니다.

### **스크롤 이벤트 처리**

```js
window.addEventListener("scroll", () => {
  window.scrollY >= $researchAchievementAchBox.offsetTop ? ($researchAchievementTopBtn.style.display = "block") : ($researchAchievementTopBtn.style.display = "none");
});
```

창(window) 스크롤 이벤트 따라 "scrollTop" 버튼이 나타나거나 사라집니다. 스크롤 이벤트가 일어나면 researchAchievementAchBox 요소의 상단 위치값을 기준으로 맨 위로 이동하는 버튼을 표시 또는 숨깁니다.

<br>

## 산업협력

<br>

### **이미지 롤링 슬라이더**

```js
const iacgVisRolling = () => {
  if (iacgVisCnt >= iacgVisLength) {
    iacgVisCnt = 0;
  }
  $iacgVisList.forEach((item, idx) => {
    item.style.display = "none";
  });
  $iacgVisList[iacgVisCnt].style.display = "block";
};

setInterval(() => {
  iacgVisCnt++;
  iacgVisRolling();
}, 3000);
```

iacgVisRolling 함수는 이미지 롤링을 담당하는 함수입니다. setInterval 사용하여 3초마다 한 번씩 자동으로 이동합니다.

### **버튼 클릭 이벤트 리스너**

```js
$iacgVisBtnPrev.addEventListener("click", () => {
  iacgVisCnt--;
  if (iacgVisCnt < 0) {
    iacgVisCnt = iacgVisLength - 1;
  }
  iacgVisRolling();
});

$iacgVisBtnNext.addEventListener("click", () => {
  iacgVisCnt++;
  if (iacgVisCnt >= iacgVisLength) {
    iacgVisCnt = 0;
  }
  iacgVisRolling();
});

$iacgVisBtnPause.addEventListener("click", () => {
  if (iacgVisPaused) {
    iacVisTimeID = setInterval(() => {
      iacgVisCnt++;
      iacgVisRolling();
    }, 3000);
    $iacgVisBtnPause.innerText = "일시정지";
    iacgVisPaused = false;
  } else {
    clearInterval(iacVisTimeID);
    $iacgVisBtnPause.innerText = "재생";
    iacgVisPaused = true;
  }
});
```

이전 버튼과 다음 버튼은 이미지를 이전, 다음으로 이동하게 하며, 재생/일시정지 버튼은 이미지 롤링의 자동 이동을 시작/중지합니다.

### **메뉴 선택에 따른 리스트 출력**

```js
const iacgPlazaMenuMake = (title) => {
  let html = "";
  iacgData[title].forEach((item) => {
    html += `<li>${item}</li>`;
  });
  $iacgPlazaList.innerHTML = html;
};

$iacgPlazaMenu.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    iacgPlazaMenuMake(e.target.innerText);
  });
});
```

iacgPlazaMenuMake 함수는 인수로 받은 타이틀에 따라 해당하는 데이터를 이용하여 리스트를 생성합니다. 각 메뉴 항목에 클릭시 리스트를 출력하는 로직을 추가합니다.

### **리스트 이전/다음 버튼 클릭 이벤트 리스너**

```js
$iacgPlazaMenuPrev.addEventListener("click", (e) => {
  // (생략) 이전 버튼 클릭 로직
});
$iacgPlazaMenuNext.addEventListener("click", (e) => {
  // (생략) 다음 버튼 클릭 로직
});
```

리스트 이전 버튼과 다음 버튼에 이벤트 리스너를 추가하여 클릭할 때 리스트를 이전 또는 다음 항목으로 이동하게 합니다.

<br>

</details>
<details>
<summary>대학소식</summary>

<br>

## 공지사항

<br>

### **클릭 이벤트 리스너**

```js
$pageBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < $pageBtn.length; i++) {
      $pageBtn[i].classList.remove("on");
    }
    e.target.classList.add("on");
    $hits.forEach((hitsItem) => {
      hitsItem.innerHTML = Math.floor(Math.random() * 1000);
    });
  });
});
```

배열의 각 요소에 클릭 이벤트 리스너를 등록하여 클릭된 요소에 "on" 클래스를 추가하고, 다른 요소들에서는 "on" 클래스를 제거합니다. 또한, $hits 배열의 각 요소의 내용을 랜덤한 값으로 변경하여 클릭된 요소를 시각적으로 강조하고, 데이터를 동적으로 업데이트할 수 있도록 하였습니다.

<br>

## 뉴스

<br>

### **배열 순서 랜덤**

```js
function shuffle() {
  for (let i = $newsItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [$newsItems[i], $newsItems[j]] = [$newsItems[j], $newsItems[i]];
  }
  $newsList.innerHTML = "";
  $newsItems.forEach((item) => $newsList.appendChild(item));
}
```

shuffle 함수를 정의하여 배열 요소의 순서를 랜덤하게 변경하고, $newsList 요소에 적용하여 화면에 랜덤한 순서로 데이터를 표시합니다.

### **클릭 이벤트 리스너**

```js
$pageBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < $pageBtn.length; i++) {
      $pageBtn[i].classList.remove("on");
    }
    e.target.classList.add("on");
    shuffle();
  });
});
$newsMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let i = 0; i < $newsMenu.length; i++) {
      $newsMenu[i].classList.remove("on");
    }
    e.target.classList.add("on");
    shuffle();
  });
});
```

$pageBtn 배열과 $newsMenu 배열의 각 요소에 클릭 이벤트 리스너를 등록합니다. 클릭 시 "on" 클래스를 관리하여 활성화 상태를 표시하고, shuffle() 함수를 호출하여 배열의 순서를 랜덤하게 변경합니다. 이를 통해 페이지 버튼과 뉴스 메뉴를 클릭할 때마다 활성화 상태가 변경되고, 데이터가 랜덤하게 표시될 수 있습니다.

<br>

</details>

<details>
<summary>대학생활</summary>

<br>

## 학생활동

<br>

### **팝업 구성 요소 생성**

```javascript
$studentActivitiesBoxLiPopUp = document.createElement("div");
$studentActivitiesBoxLiPopUpTitleText = document.createElement("p");
$studentActivitiesBoxLiPopUpName = document.createElement("strong");
$studentActivitiesBoxLiPopUpMainText = document.createElement("p");
$studentActivitiesBoxLiPopUpMoreLink = document.createElement("a");
```

학생 활동 팝업을 구성하는 요소들을 생성하며 필요한 속성과 클래스를 설정합니다.

### **팝업에 학생 정보 채우기**

```javascript
$studentActivitiesBoxLiPopUpTitleText.innerHTML = studentActivitiesPopUpData[studentActivitiesCnt].popUpTitleText;
$studentActivitiesBoxLiPopUpName.innerHTML = studentActivitiesPopUpData[studentActivitiesCnt].popUpStudentName;
$studentActivitiesBoxLiPopUpMainText.innerHTML = studentActivitiesPopUpData[studentActivitiesCnt].popUpMainText;
```

생성된 팝업 요소에 학생 정보를 채우기 위해 데이터를 가져와 설정합니다.

### **자세히 보기 링크 동작 막기**

```javascript
$studentActivitiesBoxLiPopUpMoreLink.addEventListener("click", (e) => {
  e.preventDefault();
});
```

팝업 내부에 있는 "자세히 보기" 링크를 클릭하면 페이지 이동 등의 기본 동작을 막도록 이벤트 리스너를 추가합니다.

### **학생 활동 이미지의 카운트 제한**

```javascript
if (makeStudentImgCnt === 36) return 0;
```

코드 시작 부분에서, `makeStudentImgCnt`의 최댓값을 36으로 제한하여 이미지 카운트가 이를 초과하지 않도록 합니다.

### **학생 활동 이미지 리스트 생성**

```javascript
for (let i = makeStudentImgCnt; i < makeStudentImgCnt + 9; i++) {
  ...
}
```

for문을 사용하여 학생 활동 리스트를 9개씩 생성합니다. 이 때, 각 학생 항목에 이미지, 이름, 스토리, 이벤트 리스너들을 생성하여 추가합니다.

### **마우스 포인터 이벤트 처리**

```javascript
$studentActivitiesBoxLi.addEventListener("mouseenter", (e) => {
  e.currentTarget.children[1].style.display = "flex";
});
$studentActivitiesBoxLi.addEventListener("mouseleave", (e) => {
  e.currentTarget.children[1].style.display = "none";
});
```

각 학생의 이미지에 마우스 포인터가 올라갔을 때 이름과 스토리 정보를 보여주기 위해, 이벤트 리스너를 추가합니다.

### **학생 이미지 클릭 이벤트 처리**

```javascript
$studentActivitiesBoxLi.addEventListener("click", (e) => {
  if (e.currentTarget.lastElementChild.classList.contains("on")) {
    e.currentTarget.lastElementChild.classList.remove("on");
  } else {
    if (selectedActivitiesBoxLiPopUp !== null) {
      selectedActivitiesBoxLiPopUp.classList.remove("on");
      selectedActivitiesBoxLiPopUp = null;
      popupBanner(e);
    } else {
      popupBanner(e);
    }
  }
});
```

학생 이미지를 클릭하면 팝업창을 보여주고, 이미 보이는 팝업창이 있다면 숨기는 기능을 추가합니다. 또한 팝업창의 위치가 이미지에 따라 다르도록 설정합니다.

<br>

## 시설 안내

<br>

### **시설 정보 글자들의 수평 애니메이션**

```javascript
facilityInformationSize = parseInt(getComputedStyle($facilityInformationBgTextList).width) * -2;
setInterval(() => {
  facilityInformationLeftX = parseInt(getComputedStyle($facilityInformationBgText).left);
  if (facilityInformationLeftX <= facilityInformationSize) {
    $facilityInformationBgText.style.left = "0px";
    facilityInformationTextX = 0;
  } else {
    facilityInformationTextX -= facilityInformationStep;
    $facilityInformationBgText.style.left = `${facilityInformationTextX}px`;
  }
}, 30);
```

시설 정보 텍스트가 일정한 속도로 좌측으로 움직이며 마지막 텍스트가 사라지면 처음 위치로 되돌아오는 애니메이션을 구현합니다.

### **스크롤에 따른 시설 정보 이미지 애니메이션 적용**

```javascript
const facilityInformationSlider = () => {
  facilityInformationImg.forEach((item) => {
    const viewportBottom = window.innerHeight + window.scrollY;
    const imageHalfBottom = item.offsetTop + item.offsetHeight / 2;
    const isHalfShown = viewportBottom > imageHalfBottom;
    if (isHalfShown) item.classList.add("on");
  });
};
facilityInformationSlider();
window.addEventListener("scroll", facilityInformationSlider);
```

시설 정보 이미지를 스크롤에 따라 애니메이션되도록 설정합니다. 이미지의 절반 위치가 보이는 시점에서 애니메이션을 활성화합니다.

<br>

## 축제/이벤트

<br>

### **비디오 팝업 생성**

```javascript
const festivalEventMakeVideo = () => {
  $festivalEventVideoPopupIframe.setAttribute("src", festivalEventVideoData[festivalEventCnt].videoSrc);
  $festivalEventVideoPopupIframe.setAttribute("title", festivalEventVideoData[festivalEventCnt].videoTitle);
};
```

`festivalEventMakeVideo` 함수는 비디오 팝업에 내용을 채워 넣습니다. 각 이벤트에 해당하는 비디오 정보를 가져와 설정합니다.

### **이벤트 리스트 클릭 시 팝업 및 이벤트 등록**

```javascript
$festivalEventListImg.forEach((item, idx) => {
  item.addEventListener("click", () => {
    festivalEventCnt = idx;
    festivalEventMakeVideo();
    $festivalEventBgForPopup.classList.add("on");
    $festivalEventVideoPopup.classList.add("on");
    $festivalEventBgForPopup.addEventListener("click", (e) => {
      e.currentTarget.classList.remove("on");
      $festivalEventVideoPopup.classList.remove("on");
    });
  });
});
```

이벤트 리스트를 순회하며 각 아이템에 클릭 이벤트를 추가합니다. 이벤트가 발생하면 해당 이벤트의 비디오 팝업을 생성하고, 팝업 외부 클릭 시 팝업을 닫도록 설정합니다.

<br>

</details>

<br>

## 7. 프로젝트 기획 목적

<br>

본 프로젝트의 주요 목적은 기존 홈페이지를 바탕으로 HTML, CSS, JS 기술을 연습하기 위한 새로운 홈페이지를 제작하는 것입니다.  
이를 통해 기술적 지식을 향상시키고 발전시킬 수 있는 기회를 제공하고자 합니다.  
세부 목표는 다음과 같습니다.

- **HTML, CSS, JS 기술 연습**: 기존 홈페이지를 참고하여 웹 개발 기술을 연습하는데 초점을 맞춥니다. 이를 통해 웹 디자인 및 인터페이스 작성, DOM 조작, 이벤트 처리 등의 다양한 개념을 실습할 수 있습니다.
- **새로운 홈페이지 껍데기 제작**: 기존 홈페이지의 구조 및 디자인을 바탕으로 새로운 홈페이지 껍데기를 완성합니다. 연습 목적이므로, 모듈화와 같은 구조 개선은 배제하고 주로 외관과 동작에 집중할 수 있습니다.
- **기술적 역량 강화**: 본 프로젝트를 통해 HTML, CSS, JS와 같은 웹 개발 기술에 대한 지식 및 실력을 향상시킬 수 있습니다. 이를 바탕으로 추후 개발 프로젝트에서 보다 높은 퀄리티의 작업을 수행할 수 있게 됩니다.
- **포트폴리오 구축**: 프로젝트를 완료한 후에 이를 포트폴리오로 활용할 수 있습니다. 이를 통해 실제 웹 개발 업무 수행 능력을 입증하고, 개발자로서의 경쟁력을 강화할 수 있습니다.
