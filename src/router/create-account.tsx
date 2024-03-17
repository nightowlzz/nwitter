import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  Wapper,
  Title,
  Form,
  Input,
  Button,
  Switcher,
  Error,
} from "../component/creat-accout";
import { errors } from "../component/join-error-massage";

function CreateAccount() {
  const navigat = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading === true || name === "" || email === "" || password === "")
      return false;
    try {
      setLoading(true);
      // 홈페이지로 이동
      // 사용자의 이름을 설정:이미지 url을 가지는 미니프로필을 가지게 됨

      //Q 사용자를 생성하세요
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //Q 생성한 프로필을 업데이트 하세요
      updateProfile(credential.user, { displayName: name });
      //Q home으로 이동
      navigat("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        if (e.code && errors[e.code]) {
          setError(errors[e.code]);
        }
        return e;
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Wapper>
      <Title>Sing Up</Title>
      <Switcher>
        아이디가 있으신가요? <Link to="/login">로그인하기</Link>
      </Switcher>
      <Form onSubmit={submit}>
        <Input
          onChange={change}
          value={name}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <Input
          onChange={change}
          value={email}
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <Input
          onChange={change}
          value={password}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <hr />
        <Button>{loading ? "Loading.." : "Creat Account"}</Button>
        <Error>{error !== "" ? error : ""}</Error>
      </Form>
    </Wapper>
  );
}
export default CreateAccount;
