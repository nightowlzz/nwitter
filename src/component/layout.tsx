import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>메인</h1>
      <Outlet />
    </>
  );
}
