import styled from "styled-components";
import PropTypes from "prop-types";

const Link = styled.div`
  width: 75.8px;
  height: 151.5px;
  position: relative;
  display: none;
`;
const Div = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  font-weight: 800;
  display: inline-block;
  min-width: 20px;
`;
const Spanbadge = styled.div`
  align-self: stretch;
  border-radius: var(--br-sm) var(--br-21xl) var(--br-21xl) var(--br-sm);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-5xs);
  z-index: 2;
`;
const SpanbadgeWrapper = styled.div`
  width: 37.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Link155500x500jpg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Divdot = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% - 7px);
  border-radius: var(--br-10xs);
  background-color: var(--color-gold);
  width: 6px;
  height: 6px;
`;
const Divdot1 = styled.div`
  position: absolute;
  top: calc(50% - 3px);
  left: calc(50% + 1px);
  border-radius: var(--br-10xs);
  background-color: var(--color-white);
  width: 6px;
  height: 6px;
`;
const Link1 = styled.div`
  height: 14px;
  width: 24px;
  position: relative;
  border-radius: var(--br-11xl);
  background-color: var(--color-gray-900);
  z-index: 1;
`;
const Link155500x500jpgParent = styled.div`
  width: 151.5px;
  margin: 0 !important;
  position: absolute;
  bottom: -124.5px;
  left: -124.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-113xl-5) var(--padding-8xs) var(--padding-8xs);
  box-sizing: border-box;
`;
const LinkIcon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  border-radius: var(--br-base);
  z-index: 3;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const FrameParent = styled.div`
  width: 166.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const LinkFresh = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
`;
const ImgRated300OutOf = styled.img`
  height: 11px;
  width: 66.9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Div1 = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 7.3px;
`;
const ImgRated300OutOf5Parent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const LinkFreshCauliflowerEachParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs-9);
`;
const Ins = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 59.2px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const InsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs-9);
`;
const Del = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 19px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 42.5px;
  white-space: nowrap;
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-4);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkAddToCartFreshCau = styled.img`
  height: 34px;
  width: 36px;
  position: relative;
  border-radius: var(--br-5xs);
`;
const InStock = styled.b`
  position: relative;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  display: inline-block;
  min-width: 50.2px;
`;
const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const LinkAddToCartFreshCauParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
`;
const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-3);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const DivproductRoot = styled.div`
  align-self: stretch;
  flex: 1;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-base) var(--padding-13xl-9);
  gap: var(--gap-125xl-5);
  z-index: 6;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
  font-family: var(--font-inter);
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;

const Divproduct1 = ({
  className = "",
  prop,
  link155500x500jpg,
  linkFreshCauliflowerEach,
  imgRated300OutOf5,
  prop1,
  ins,
  del,
  linkAddToCartFreshCaulifl,
}) => {
  return (
    <DivproductRoot className={className}>
      <Link />
      <Link />
      <FrameParent>
        <SpanbadgeWrapper>
          <Spanbadge>
            <Div>{prop}</Div>
          </Spanbadge>
        </SpanbadgeWrapper>
        <FrameGroup>
          <Link155500x500jpgParent>
            <Link155500x500jpg alt="" src={link155500x500jpg} />
            <Link1>
              <Divdot />
              <Divdot1 />
            </Link1>
          </Link155500x500jpgParent>
          <LinkIcon alt="" src="/link-6.svg" />
        </FrameGroup>
      </FrameParent>
      <FrameContainer>
        <LinkFreshCauliflowerEachParent>
          <LinkFresh>{linkFreshCauliflowerEach}</LinkFresh>
          <ImgRated300OutOf5Parent>
            <ImgRated300OutOf alt="" src={imgRated300OutOf5} />
            <Div1>{prop1}</Div1>
          </ImgRated300OutOf5Parent>
        </LinkFreshCauliflowerEachParent>
        <FrameDiv>
          <InsWrapper>
            <Ins>{ins}</Ins>
          </InsWrapper>
          <Del>{del}</Del>
        </FrameDiv>
        <LinkAddToCartFreshCauParent>
          <LinkAddToCartFreshCau
            loading="lazy"
            alt=""
            src={linkAddToCartFreshCaulifl}
          />
          <StockInfo>
            <InStock>In Stock</InStock>
          </StockInfo>
        </LinkAddToCartFreshCauParent>
      </FrameContainer>
    </DivproductRoot>
  );
};

Divproduct1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  link155500x500jpg: PropTypes.string,
  linkFreshCauliflowerEach: PropTypes.string,
  imgRated300OutOf5: PropTypes.string,
  prop1: PropTypes.string,
  ins: PropTypes.string,
  del: PropTypes.string,
  linkAddToCartFreshCaulifl: PropTypes.string,
};

export default Divproduct1;
