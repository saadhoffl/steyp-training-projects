import styled from "styled-components";
import PropTypes from "prop-types";

const Item1109150x150jpg1 = styled.img`
  height: 73px;
  width: 73px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 73px;
`;
const Item2104150x150jpg1 = styled.img`
  height: 73px;
  width: 73px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 73px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;
const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.8px 0px 0px;
`;
const LinkIcon = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: 6px;
  flex-shrink: 0;
`;
const AddToWishlist = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 19.5px;
  font-weight: 500;
  display: inline-block;
  min-width: 87.3px;
  flex-shrink: 0;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8.2px 0px 0px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const LinkIcon1 = styled.img`
  height: 36px;
  width: 36px;
  position: relative;
  border-radius: 6px;
`;
const ShareThisProduct = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 110px;
`;
const ShareThisProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 7.8px;
`;
const Links1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
`;
const Compare = styled.div`
  position: relative;
  letter-spacing: -0.32px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 55px;
`;
const CompareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px 6.8px;
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 26.1px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Images = styled.div`
  width: 906.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;
const GalleryRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px 0px 27px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 13px;
  color: #030712;
  font-family: Inter;
`;

const Gallery = ({ className = "" }) => {
  return (
    <GalleryRoot className={className}>
      <Images>
        <Carousel>
          <Items>
            <Item1109150x150jpg1
              loading="lazy"
              alt=""
              src="/item--1109150x150jpg@2x.png"
            />
            <Item2104150x150jpg1
              loading="lazy"
              alt=""
              src="/item--2104150x150jpg@2x.png"
            />
            <Item2104150x150jpg1
              loading="lazy"
              alt=""
              src="/item--389150x150jpg@2x.png"
            />
          </Items>
        </Carousel>
        <Social>
          <Links>
            <LinkIcon alt="" src="/-link-4.svg" />
            <Icons>
              <AddToWishlist>Add to wishlist</AddToWishlist>
            </Icons>
          </Links>
          <Links1>
            <LinkIcon1 alt="" src="/-link-5.svg" />
            <ShareThisProductWrapper>
              <ShareThisProduct>Share this Product</ShareThisProduct>
            </ShareThisProductWrapper>
          </Links1>
          <Links1>
            <LinkIcon1 alt="" src="/-link-6.svg" />
            <CompareWrapper>
              <Compare>Compare</Compare>
            </CompareWrapper>
          </Links1>
        </Social>
      </Images>
    </GalleryRoot>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
