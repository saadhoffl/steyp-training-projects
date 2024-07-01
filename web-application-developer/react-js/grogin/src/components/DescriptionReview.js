import styled from "styled-components";
import PropTypes from "prop-types";

const LinkDescription = styled.div`
  height: 20px;
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 83px;
`;
const Link = styled.div`
  align-self: stretch;
  height: 2px;
  position: relative;
  background-color: #030712;
`;
const Label = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 21px;
`;
const DescriptionTab = styled.div`
  height: 24px;
  width: 83px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0px 0px;
  box-sizing: border-box;
`;
const TabLink = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: inline-block;
  min-width: 85.2px;
`;
const Tablist = styled.div`
  align-self: stretch;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 19px;
  gap: 29.6px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const QuisqueVariusDiam = styled.p`
  margin: 0;
`;
const QuisqueVariusDiamContainer = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 24px;
  display: inline-block;
  max-width: 100%;
`;
const Tabs = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 22px;
  max-width: 100%;
`;
const ContentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  flex-shrink: 0;
  max-width: 100%;
  text-align: left;
  font-size: 16px;
  color: #030712;
  font-family: Inter;
`;

const DescriptionReview = ({ className = "" }) => {
  return (
    <ContentRoot className={className}>
      <Tabs>
        <Tablist>
          <DescriptionTab>
            <Label>
              <LinkDescription>Description</LinkDescription>
              <Link />
            </Label>
          </DescriptionTab>
          <TabLink>Reviews (2)</TabLink>
        </Tablist>
        <QuisqueVariusDiamContainer>
          <QuisqueVariusDiam>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce
          </QuisqueVariusDiam>
          <QuisqueVariusDiam>
            fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
            sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est
            in nunc tristique lacinia. Nullam aliquam mauris eu
          </QuisqueVariusDiam>
          <QuisqueVariusDiam>
            accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel,
            dignissim a tortor.
          </QuisqueVariusDiam>
        </QuisqueVariusDiamContainer>
      </Tabs>
      <QuisqueVariusDiamContainer>
        <QuisqueVariusDiam>
          Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
          eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
          Maecenas lacus odio, feugiat eu nunc sit amet,
        </QuisqueVariusDiam>
        <QuisqueVariusDiam>
          maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros
          sit amet, ultricies cursus ipsum. Sed consequat luctus ligula.
          Curabitur laoreet rhoncus blandit. Aenean vel diam ut
        </QuisqueVariusDiam>
        <QuisqueVariusDiam>
          arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
          vestibulum vulputate, lorem orci convallis quam, sit amet consequat
          nulla felis pharetra lacus. Duis semper erat mauris, sed
        </QuisqueVariusDiam>
        <QuisqueVariusDiam>egestas purus commodo vel.</QuisqueVariusDiam>
      </QuisqueVariusDiamContainer>
    </ContentRoot>
  );
};

DescriptionReview.propTypes = {
  className: PropTypes.string,
};

export default DescriptionReview;
