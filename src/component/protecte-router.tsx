import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

// router.tsx 파일의 ProtectedRoute가 싸고 있는 <Layout />이 children으로 전달된것이다.
export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  // 현재 로그인한 정보. 로그인 안했으면 null 출력
  const user = auth.currentUser;
  console.log(user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  // return <Layout /> 과 같다
  return children;
}
