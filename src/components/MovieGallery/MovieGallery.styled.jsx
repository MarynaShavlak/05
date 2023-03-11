import styled from "styled-components";

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);  
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 15px)/2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 3*15px)/4);
  }

  &:not(:last-child) {
    @media screen and (max-width: calc(768px - 1px)) {
      margin-bottom: 15px;
    }
  }

  
  :hover {
  transform: scale(1.03);
  cursor: pointer;

  & p {
    color: #fc458e;
  }
}


`;