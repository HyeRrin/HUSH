<br>

<div align="center">

<h3>🍰HUSH🍰</h3>
<h4>달달한 디저트로 당충전하세요!</h4>

<p align="center">케이크, 초콜릿, 사탕 등 다양한 디저트를 판매하는 서비스, HUSH입니다. <br />회원가입 시 지급되는 POINT로 원하는 디저트를<br /> 장바구니에 담아 구매해보세요!</p>

![react](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)

[📆HUSH Trello](https://trello.com/b/SqYg2cLN/hush)<br/>
[📝HUSH 회고록](https://velog.io/@hye_rin/%ED%97%88%EC%89%AC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

</div>

<br>

---

<br>

## 기술 스택

### `React.js`

<img src="https://user-images.githubusercontent.com/93499154/208901555-8b899340-9db1-465f-980b-24156cf4ba58.png" width="100">

- JavaScript 라이브러리/프레임워크 중 시장점율이 가장 높다는 점에서, 참고할 수 있는 신뢰할만한 자료가 많을 것이라고 판단하였습니다.
- JSX 문법을 사용함에 따라, JavaScript에 대한 지식을 바탕으로 적용해볼 수 있어 접근성이 좋다고 생각했습니다.
- Vue, Angular와 같은 프레임워크가 아닌 React는 라이브러리이기 때문에 자유도가 높을 것이라고 판단했습니다.

### `TypeScript`

<img src="https://user-images.githubusercontent.com/93499154/209255394-b544d747-2257-46bf-8014-08c59d152c94.png" width="100">

- `TypeScript`는 명시적으로 Type을 지정합니다. 이를 통해 코드의 목적에 맞지 않는 변수와 함수에서 에러를 발생시켜 버그를 사전에 방지할 수 있습니다.
- 위와 같은 장점을 실제 적용하며 느껴보고 싶단 생각에 프로젝트가 종료된 후, 개인적으로 적용하며 생기는 error를 해결하였습니다.
- <strong>특이사항</strong> : 팀프로젝트 종료 후, 개인적으로 적용

### `Redux`

<img src="https://user-images.githubusercontent.com/93499154/209255516-c0c2ab95-e23a-4cff-8d3c-5a9133b5d1b0.png" width="100">

- 가장 상위 컴포넌트에서 관련 데이터를 받은 경우, 하위 컴포넌트에 props를 계속 내려주어야 하는 번거로움이 있었습니다.
- 이에 따라 프로젝트가 종료된 후, 개인적으로 Redux를 적용하며 store로 state를 전역적으로 관리하며 번거로움을 줄이는 경험을 할 수 있었습니다.
- <strong>특이사항</strong> : 팀프로젝트 종료 후, 개인적으로 적용

### `Sass` + `styled-components`

<img src="https://user-images.githubusercontent.com/93499154/209255676-7706f7c0-b53e-4d38-a4ff-c1d8d21b4745.png" width="100">
<img src="https://user-images.githubusercontent.com/93499154/208901425-d5ce739f-f867-4cd9-8090-048b2575096f.png" width="100">

- `SCSS`는 `CSS`가 지원하지 않는 유용한 기능을 지원하기 때문에 적용하였습니다. 유용한 기능에는 Nesting(선택자 중첩), 변수의 사용등이 있겠습니다.
- 여기에 CSS-in-JS 방식을 통해 CSS, SCSS파일을 생성하지 않고도 해당 컴포넌트에 바로 스타일을 삽입할 수 있는 `styled-componets`를 추가적으로 적용해주었습니다.
- <strong>특이사항</strong> : 팀프로젝트 종료 후, `styled-components`를 개인적으로 적용

<br><br>

## 프로젝트 기능

> 🙋🏻‍♀️ 저는 회원가입, 로그인, 장바구니, 찜목록에 해당되는 기능을 담당하였습니다. <br /> 기능을 구현하며 마주한 어려움과 해결과정에 대한 내용은 <a href="https://velog.io/@hye_rin/React-%EB%9F%AC%EC%89%AC%EC%BD%94%EB%A6%AC%EC%95%84-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0">블로그 포스팅</a>을 통해 확인할 수 있습니다.

### 🔐 회원가입 시 포인트 제공

- 회원가입 시 각 유저에게 일정 포인트 제공
- 해당 포인트로 디저트 상품을 결제 가능
- 회원가입 시 이메일 중복 확인을 통해 중복되는 가입 방지

### 🛒 장바구니에 쏙쏙 담아 결제

- 장바구니에 담긴 상품에 대한 수량 조절 가능
- 장바구니 목록에서 제거하고 싶은 상품에 대한 선택 삭제 가능
- 단일/전체 선택을 통해 원하는 상품만 결제 가능

### 💝 추후 다시 보고싶은 상품은 찜하기

- 상품 상세페이지에서 하트 버튼 클릭시, 찜목록으로 상품 추가

### ✍🏻 상품 리뷰 작성

- 상품 상세페이지에서 해당 상품에 대한 리뷰 작성 가능

<br><br>

## 리팩토링 내용

> 📗 프로젝트가 끝난 이후, 개인적으로 리팩토링을 진행하였습니다. 리팩토링에 더해 프로젝트에 `TypeScript`를 적용했는데요. 기존의 `JavaScript`파일을 `TypeScript`파일로 바꾸는 과정에서 생기는 에러를 해결해주었습니다. 또한, `Redux`를 적용하여 전역적으로 사용되는 state를 관리해주었습니다.

- `React`컴포넌트의 재사용성을 고려한 컴포넌트 분리
- 웹 성능 개선을 위한 이미지 용량 줄이기. `jpg`확장자인 파일을 `avif`로 변환하여 사용.
- Custom Hook을 사용한 비즈니스 로직을 분리

<br><br>

## 블로그 포스팅

### 📝 프로젝트 회고록

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=hye_rin&slug=허쉬-프로젝트-회고록&color=dark)](https://velog.io/@hye_rin/%ED%97%88%EC%89%AC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

### ❓ TypeScipt 공부

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=hye_rin&slug=TypeScript-타입스크립트를-사용하는-이유는-뭘까&color=dark)](https://velog.io/@hye_rin/TypeScript-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EB%AD%98%EA%B9%8C)

### 📗 리팩토링을 진행하며

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=hye_rin&slug=리팩토링하며-신경썼던-것들에-대해&color=dark)](https://velog.io/@hye_rin/%EB%A6%AC%ED%8C%A9%ED%86%A0%EB%A7%81%ED%95%98%EB%A9%B0-%EC%8B%A0%EA%B2%BD%EC%8D%BC%EB%8D%98-%EA%B2%83%EB%93%A4%EC%97%90-%EB%8C%80%ED%95%B4)

<br><br>

## 팀원

<table>
    <tr>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/208896343-59b34c50-f89a-4ceb-8e7d-1a6bdd0a0a18.png" width="100"></td>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/209254068-b20c2007-d898-4967-b771-a8a09eae9fbc.png" width="100">
        </td>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/209254184-2773caa6-58f9-4544-95b1-c8a8a2ef997a.png" width="100"></td>
        <td align="center"><img src="https://user-images.githubusercontent.com/93499154/209254234-16755cad-776b-46a4-b537-6549d20e167d.png" width="100"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/HyeRrin">주혜린</a></td>
        <td align="center"><a href="https://github.com/kangrubi">강루비</a></td>
        <td align="center"><a href="https://github.com/daehoddunddun">김대호</a></td>
        <td align="center"><a href="https://github.com/tjrans9248">양석문</a></td>
    </tr>
</table>
