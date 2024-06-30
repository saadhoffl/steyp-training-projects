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
  min-width: 21px;
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
  flex-shrink: 0;
  z-index: 2;
`;
const SpanbadgeWrapper = styled.div`
  width: 38.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Link159500x500jpg = styled.img`
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
const Link159500x500jpgParent = styled.div`
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
  flex-shrink: 0;
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
  line-height: 17px;
  font-weight: 500;
  display: inline-block;
  min-width: 114px;
`;
const Heading = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ImgRated200OutOf = styled.img`
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
const ImgRated200OutOf5Parent = styled.div`
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs-5);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  font-size: var(--font-size-xs);
  color: var(--color-slategray);
`;
const Ins = styled.b`
  position: relative;
  letter-spacing: -0.44px;
  line-height: 22px;
  display: inline-block;
  min-width: 54px;
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
  min-width: 34.4px;
  white-space: nowrap;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs-1);
  gap: var(--gap-6xs-3);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkAddToCartFreshLem = styled.img`
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
const Availability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
`;
const Heading2Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
`;
const DivproductRoot = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gainsboro-100);
  border-left: 1px solid var(--color-gainsboro-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-sm) var(--padding-12xl)
    var(--padding-mini);
  gap: var(--gap-125xl-5);
  z-index: 5;
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-lavenderblush);
  font-family: var(--font-inter);
`;

const Divproduct = ({
  className = "",
  prop,
  link159500x500jpg,
  linkFreshLemonEach,
  imgRated200OutOf5,
  prop1,
  ins,
  del,
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
          <Link159500x500jpgParent>
            <Link159500x500jpg alt="" src={link159500x500jpg} />
            <Link1>
              <Divdot />
              <Divdot1 />
            </Link1>
          </Link159500x500jpgParent>
          <LinkIcon alt="" src="/link-6.svg" />
        </FrameGroup>
      </FrameParent>
      <Heading2Parent>
        <Heading>
          <LinkFresh>{linkFreshLemonEach}</LinkFresh>
        </Heading>
        <ImgRated200OutOf5Parent>
          <ImgRated200OutOf loading="lazy" alt="" src={imgRated200OutOf5} />
          <Div1>{prop1}</Div1>
        </ImgRated200OutOf5Parent>
        <FrameContainer>
          <InsWrapper>
            <Ins>{ins}</Ins>
          </InsWrapper>
          <Del>{del}</Del>
        </FrameContainer>
        <Action>
          <LinkAddToCartFreshLem
            loading="lazy"
            alt=""
            src="/link--add-to-cart-fresh-lemon-each.svg"
          />
          <Availability>
            <InStock>In Stock</InStock>
          </Availability>
        </Action>
      </Heading2Parent>
    </DivproductRoot>
  );
};

Divproduct.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  link159500x500jpg: PropTypes.string,
  linkFreshLemonEach: PropTypes.string,
  imgRated200OutOf5: PropTypes.string,
  prop1: PropTypes.string,
  ins: PropTypes.string,
  del: PropTypes.string,
};

export default Divproduct;
