import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Footer1 from "../components/Footer1";
import styled from "styled-components";

const DetailsRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.1px;
  box-sizing: border-box;
  gap: var(--gap-xl);
  line-height: normal;
  letter-spacing: normal;
`;

const Details = () => {
  return (
    <DetailsRoot>
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <Footer1 />
    </DetailsRoot>
  );
};

export default Details;
