import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 20px;
`;
const Spanbadge = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  width: 37.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  box-sizing: border-box;
  z-index: 1;
`;
const Link1104500x500jpg = styled.img`
  position: absolute;
  width: calc(100% - 5px);
  top: 5px;
  right: 5px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  height: 151.5px;
  object-fit: cover;
`;
const LinkIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 124.5px;
  border-radius: var(--br-base);
  width: 32px;
  height: 32px;
  z-index: 1;
`;
const Link1104500x500jpgParent = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 10px;
  width: 156.5px;
`;
const SpanbadgeParentRoot = styled.div`
  width: 166.5px;
  height: 156.5px;
  position: relative;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
  font-family: var(--font-inter);
`;

const FrameComponent1 = ({ className = "", prop, link1104500x500jpg }) => {
  return (
    <SpanbadgeParentRoot className={className}>
      <Spanbadge>
        <Div>{prop}</Div>
      </Spanbadge>
      <Link1104500x500jpgParent>
        <Link1104500x500jpg alt="" src={link1104500x500jpg} />
        <LinkIcon alt="" src="/link-6.svg" />
      </Link1104500x500jpgParent>
    </SpanbadgeParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  link1104500x500jpg: PropTypes.string,
};

export default FrameComponent1;
