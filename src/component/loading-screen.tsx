import styled from "styled-components";

const Wapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
function LoadingScreen() {
  return (
    <Wapper>
      <Text>Loading...</Text>
    </Wapper>
  );
}
export default LoadingScreen;
