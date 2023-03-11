import styled from 'styled-components';


export const Avatar = styled.img`
  width: 50x;
  border-radius: 5px;
  border: 1px solid  black; 

`;

export const ReviewInfoWrapper = styled.p`
    display: flex;
    align-items: center;
    column-gap: 15px;
    font-size: 20px;
    margin: 0;
  
`
export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  margin-top: 20px;
`

export const AuthorReview = styled.span`
  margin-bottom: 25px;
  color: #fc458e;
  font-weight: 700;
  margin: 0;
`;

export const DateReview = styled.span`
  font-style: italic;
`