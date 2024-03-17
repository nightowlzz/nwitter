import { auth } from "../firebase";

function Home() {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <>
      <button onClick={logOut}>로그아웃</button>
      <br />
      home
    </>
  );
}
export default Home;
