import styled from "styled-components";

export const Item = styled.li`
  width: 200px;
  border: 2px solid #e0e0e0;
  height: 280px;
  margin-right: 15px;
  border-radius: 3px;
  align-items: center;
  .item-image {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #e0e0e0;
  }
  div img {
    width: 130px;
    height: 130px;
  }
  .item-description {
    display: block;
    margin-left: 8px;
  }
  .item-description h1 {
    max-width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
  }
  .item-description p {
    font-weight: bold;
    color: #27ae60;
  }
  .add-kart {
    padding: 8px;
    color: white;
    border-style: none;
    background-color: #27ae60;
    border-radius: 3px;
    font-size: 12px;
  }
  .add-kart:hover {
    cursor: pointer;
  }

  @media (min-width: 900px) {
    width: 18vw;
    margin-bottom: 10px;

    .item-description h1 {
      max-width: 20ch;
    }
    .add-kart {
      font-size: 14px;
    }
  }
`;
