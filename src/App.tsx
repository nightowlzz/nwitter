import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./component/loading-screen";
import { auth } from "./firebase";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #111;
    color: #f1f1f1;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  const [loding, setLoding] = useState(true);
  const init = async () => {
    //파이선이 유저정보를 찾아옴 그래서 다 찾으면 false로 바꿈
    // 최초 인증 상태가 완료될때 promise를 return한다.
    // 즉, 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인여부를 확인하는 동안 기다리겠다 이다.
    await auth.authStateReady(); // 인증과정
    setLoding(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyle />
      {loding ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
