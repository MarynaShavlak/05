import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Form = styled.form`
//   display: flex;
//   column-gap: 30px;
//   margin: 30px;
// `;

// export const SubmitButton = styled.button`
//   padding: 10px 10px;
//   display: block;
//   font-family: inherit;
//   color: #e3caa5;
//   background-color: #ad8b73;
//   border: 1px solid #e3caa5;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
//     rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//   transition: color 250ms ease, background-color 250ms ease, border 250ms ease;
//   cursor: pointer;
//   transition: background-color 250ms ease, color 250ms ease;
//   &:hover {
//     color: #ad8b73;
//     background-color: #e3caa5;
//     border: 1px solid #ad8b73;
//   }
// `;

// export const Input = styled.input`
//   display: block;
//   width: 300px;
//   padding-left: 10px;
//   font-family: inherit;
//   font-size: 18px;
//   font-weight: 800;
//   color: #3c2a21;
//   background-color: #e3caa5;
//   border: 1px solid #ad8b73;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
//     rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
// `;

export const List = styled.ul`
  margin-left: 30px;
`;

export const ListLink = styled(Link)`
  display: flex;
  font-size: 25px;
  padding: 5px;
  font-weight: 400;
  color: #ad8b73;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;

  &:hover {
    color: #e3caa5;
  }
`;

export const Message = styled.h3`
  margin-left: 30px;
  color: #ad8b73;
  font-size: 35px;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;