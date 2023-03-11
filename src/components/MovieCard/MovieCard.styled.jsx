import styled from 'styled-components';

export const MovieDetailsCard = styled.div`
  display: flex;
  column-gap: 30px;
`;

export const MoviePoster = styled.img`
    width: 394px;
    height: 574px;
    border-radius: 10px;
    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
  font-size: 24px;
`;

export const MovieTitle = styled.h2`
  color: #fc458e; 
  font-size: 38px ;
`;
export const MovieDesc= styled.h3`
  font-size: 30px ;
  margin-bottom: 10px;
`;
export const MovieScore= styled.p`
  font-size: 30px ;
  font-weight: 600;
  
`;

export const MovieGenreList = styled.ul`
  display: flex;
  column-gap:20px;
`;


export const MovieGenre = styled.span`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  background-color: #fde7f0;
  font-weight: 500;
  font-style: italic;
`;