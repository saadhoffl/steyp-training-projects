import styled from "styled-components";
import PropTypes from "prop-types";

const HalloweenHarvestCaramel = styled.p`
  margin: 0;
`;
const LinkHalloweenContainer = styled.div`
  position: relative;
  letter-spacing: -0.26px;
  line-height: 16.9px;
  font-weight: 500;
`;
const ImgRated267OutOf = styled.img`
  height: 11px;
  width: 66.9px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const Div = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 12px;
  display: inline-block;
  min-width: 8px;
  flex-shrink: 0;
`;
const ImgRated267OutOf5Parent = styled.div`
  height: 17.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs-6);
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
  min-width: 59px;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 18px;
  }
`;
const Del = styled.div`
  position: relative;
  font-size: var(--font-size-base-1);
  text-decoration: line-through;
  letter-spacing: -0.44px;
  line-height: 17px;
  font-weight: 500;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 42px;
  white-space: nowrap;
`;
const InsParent = styled.div`
  height: 22.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xs-2);
`;
const LinkAddToCartHalloween = styled.img`
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
const InStockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-5xs);
`;
const LinkAddToCartHalloweenParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-2xs);
  color: var(--color-forestgreen);
  font-family: var(--font-inter);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-1);
  font-size: var(--font-size-3xl);
  color: var(--color-crimson);
  font-family: var(--font-barlow);
`;
const LinkHalloweenHarvestCaramParentRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs-9);
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-gray-500);
  font-family: var(--font-inter);
`;

const FrameComponent = ({
  className = "",
  halloweenHarvestCaramel,
  appleSoftCaramels,
  imgRated267OutOf5,
  ins,
  del,
  linkAddToCartHalloweenHar,
}) => {
  return (
    <LinkHalloweenHarvestCaramParentRoot className={className}>
      <LinkHalloweenContainer>
        <HalloweenHarvestCaramel>
          {halloweenHarvestCaramel}
        </HalloweenHarvestCaramel>
        <HalloweenHarvestCaramel>{appleSoftCaramels}</HalloweenHarvestCaramel>
      </LinkHalloweenContainer>
      <ImgRated267OutOf5Parent>
        <ImgRated267OutOf alt="" src={imgRated267OutOf5} />
        <Div>3</Div>
      </ImgRated267OutOf5Parent>
      <FrameParent>
        <InsParent>
          <Ins>{ins}</Ins>
          <Del>{del}</Del>
        </InsParent>
        <LinkAddToCartHalloweenParent>
          <LinkAddToCartHalloween
            loading="lazy"
            alt=""
            src={linkAddToCartHalloweenHar}
          />
          <InStockWrapper>
            <InStock>In Stock</InStock>
          </InStockWrapper>
        </LinkAddToCartHalloweenParent>
      </FrameParent>
    </LinkHalloweenHarvestCaramParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  halloweenHarvestCaramel: PropTypes.string,
  appleSoftCaramels: PropTypes.string,
  imgRated267OutOf5: PropTypes.string,
  ins: PropTypes.string,
  del: PropTypes.string,
  linkAddToCartHalloweenHar: PropTypes.string,
};

export default FrameComponent;
