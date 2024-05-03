import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MbHeader from "./components/MbHeader";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 컴포넌트 만들기, 컴포넌트 : html을 묶어준 것
// const Header = function () {
//   return (
//     <header className="header">
//       <div className="inner">
//         {/* <!-- 상단 로고 --> */}
//         <div className="header-logo">
//           <a href="index.html" className="header-logo-link">
//             <img src="./images/etc/logo-kakao.png" alt="카카오브레인 블로그" className="header-logo-img" />
//             {/* <!-- start 로고 슬라이드 --> */}
//             <div className="header-logo-slide" id="logo-slide">
//               <div className="swiper swlogo">
//                 <div className="swiper-wrapper">
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog01.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog02.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog03.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog04.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog05.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog06.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog07.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog08.png" alt="카카오브레인 블로그" />
//                   </div>
//                   <div className="swiper-slide">
//                     <img src="./images/etc/logo-blog09.png" alt="카카오브레인 블로그" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- end 로고 슬라이드 --> */}
//           </a>
//         </div>
//         {/* <!-- 상단 메뉴 --> */}
//         <nav className="header-navi">
//           <ul className="navi-list">
//             <li>
//               <a href="#">소식</a>
//             </li>
//             <li>
//               <a href="#">팀&크루</a>
//             </li>
//             <li>
//               <a href="#">영입</a>
//             </li>
//             <li className="navi-search">
//               <a href="#"></a>
//             </li>
//             <li className="mobile-menu">
//               <a href="#"></a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   ); //  JSX 엘리먼트를 리턴함
// };

root.render(
  <>
    <div className="wrap">
      <Popup />
      <div className="wrap">
        <Header />
        <MbHeader />
        <Main></Main>
        <Footer />
      </div>
    </div>
  </>
);

// 컴포넌트는 html을 출력할 수 있다, 함수여야함
// 컴포넌트 반드시 맨앞글자 대문자, const로서 들어감
// 할당되는 연산자는 함수여야한다
// 함수는 리턴되어야 한다, ()안에 html
