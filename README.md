[깃헙 레파지토리](https://github.com/facebook/react/issues)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

[배포링크](http://pre-onboarding-12th-1-2.s3-website.ap-northeast-2.amazonaws.com/)

## 목차
1. [팀원 소개](#팀원-소개)
2. [실행 방법](#실행방법)
4. [협업 규칙](#협업을-위한-규칙)
5. [폴더 구조](#폴더-구조)
6. [Best practice 선정을 위한 논의점들](#best-practice-선정을-위한-논의점들)

## 팀원 소개

| 팀1 | [🐸김보현](https://github.com/BHyeonKim) | [🐶방충림](https://github.com/HWAHAEBANG) | [🐹김수진](https://github.com/notusing11) | [🐨이지은](https://github.com/jieeeun2) |
| --- | --- | --- | --- | --- |
| 개인과제 | [김보현의 개인과제](https://github.com/BHyeonKim/wanted-pre-onboarding-12-2-bohyeon) | [방춤림의 개인과제](https://github.com/HWAHAEBANG/pre-onboarding-12th-2) | [김수진의 개인과제](https://github.com/notusing11/react-issues) | [이지은의 개인과제](https://github.com/jieeeun2/pre-onboarding-12th-2-1) |

```
npm install && npm start
```

---

## **기술 스택 및 사용한 라이브러리**

- Language
  - Typescript
- Library
  - React
  - Octokit
  - React Router
  - react-redux
  - redux-toolkit
  - react-markdown
  - remark-gfm
  - styled-component
- Linting & Formatting
  - Prettier
  - Eslint ***with tons of plugins and configs***
- Automation
  - Husky
  - Commitlint
  - Lint Staged

---

## 폴더 구조

```
    📦src
    ┣ 📂apis        # api호출 함수를 모아둔 폴더
    ┣ 📂components  # 컴포넌트 폴더
    ┃ ┗ 📂common    # 공통 컴포넌트
    ┣ 📂configs     # octokit 인스턴스 설정 폴더
    ┣ 📂constants   # 상수 폴더
    ┣ 📂pages       # 페이지 폴더
    ┣ 📂redux       # redux 폴더
    ┣ 📂routes      # 세부 route 폴더
    ┣ 📂styles      # 스타일 폴더
    ┣ 📂types       # 타입 폴더
    ┣ 📂utils       # 훅을 제외한 일반 유틸함수 폴더
    ┣ 📜App.tsx
    ┣ 📜index.css
    ┣ 📜index.tsx
    ┗ 📜react-app-env.d.ts
```

---
<br/>
<br/>
<br/>
<br/>


## Best Practice 선정을 위한 논의점들
  
### 📌 API 호출방식 

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | axios 사용 |  |
| 2 | octokit 사용 | 👑 |

#### 선정 근거
- 깃헙에서 자체적으로 개발하고 관리하는 api호출 라이브러리로 완성도와 호환성이 뛰어남
- octokit을 커뮤니티에서 정의한 @octokit/types와 함께 사용하면 별도의 타입선언 필요없이 type파일 사용가능

<br/>
<br/>

### 📌 상태관리

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | 사용하지 않음 |  |
| 2 | Redux toolkit 사용 | 👑 |

#### 선정 근거
- Redux toolkit의 thunk 사용시 비동기 작업을 미들웨어에서 수행하여 로직이 비교적 깔끔해짐.


<br/>
<br/>


### 📌 무한스크롤

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | IntersectionObserver | 👑 |
| 2 | Scroll 이벤트 |  |

#### 선정 근거
- scroll이벤트는 동기적으로 실행되어 스크롤할때마다 실행되므로 성능문제 발생
- 비동기적으로 실행되어 메인 스레드에 영향을 주지 않아 성능적으로 우위

<br/>
<br/>

### 📌 디테일 페이지 접근방식

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | useNavigate의 두 번째 인자로 body정보 전달 후 디테일 페이지에서 재사용 |  |
| 2 | useParam으로 id값 취득 후 해당 값으로 데이터를 새로 요청 | 👑 |

#### 선정 근거
- 1번 방법 사용 시 한 번 받아온 데이터를 재사용하기 때문에 디테일 페이지 접근 속도에       
  있어서는 우수하나, 디테일 페이지의 데이터가 오래된 데이터일 가능성이 비교적 높음.
- 1번 방법도 결국 새로고침 시 서버로 부터 데이터를 받아와야하므로 2번 방법이 불가피함.


<br/>
<br/>

### 📌 마크다운 렌더링

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | remark-html|  |
| 2 | ReactMarkdown 라이브러리 사용| 👑 |

#### 선정 근거
- 편리한 사용성과 간결한 코드로 인한 가독성 증대.
- 마크 다운 변환 가능 범위를 확장시킬 수 있는 플러그인 추가 기능을 제공

<br/>
<br/>



### 📌 비동기 등 에러처리

| No. | 논의된 방안 | 채택 |
| --- | --- | --- |
| 1 | console.log |  |
| 2 | thunk에러를 받아 redux에 저장후 App 에서 에러를 감지하면 에러 문구 표시 | 👑 |
| 2 | react-router에서 제공하는 errorElement 활용 | 👑 |

#### 선정 근거
- 단순한 console보다 시각적으로 볼수 있는 에러 처리 방법
- 에러가 발생했을 때 콘솔로만 찍으면 사용자는 상황을 알 수 없음
- ErrorBoundary 정의로 네트워크 뿐만 아니라 랜더링 오류 등 다양한 상황의 에러 대비 가능

<br/>
<br/>
