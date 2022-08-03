import styled from "styled-components";

export const Lista = styled.ul`
  list-style: none;
  display: -webkit-box;
  overflow-x: auto;
  padding: 20px 20px 20px 40px;

  @media (min-width: 900px) {
    padding-left: 8%;
    display: flex;
    max-width: 62%;
    flex-wrap: wrap;
    min-width: 62%;
  }
`;
