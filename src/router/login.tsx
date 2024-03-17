import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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

function Login() {
  const navigat = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading === true || email === "" || password === "") return false;
    try {
      setLoading(true);
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credential);
      //Q home으로 이동
      navigat("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log("name=>=>", e.stack);
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
        아직 회원이 아니세요? <Link to="/create-account">회원 가입 하기</Link>
      </Switcher>
      <Form onSubmit={submit}>
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
        <Button>{loading ? "Loading.." : "Login"}</Button>
        <Error>{error !== "" ? error : ""}</Error>
      </Form>
    </Wapper>
  );
}
export default Login;
