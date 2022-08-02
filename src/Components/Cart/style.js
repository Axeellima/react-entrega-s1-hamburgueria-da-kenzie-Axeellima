import styled from "styled-components";

export const CartDiv = styled.div`
  width: 90vw;
  background-color: #e0e0e0;
  max-height: 250px;
  text-align: center;
  .title-kart {
    margin: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #27ae60;
    color: white;
    padding: 10px 5px;
  }
  ul {
    width: 100%;
    max-height: 25vh;
    background-color: #e0e0e0;
    padding: 0;
    margin: 0;
    overflow-y: auto;
  }
  li {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li img {
    width: 100px;
    height: 100px;
  }
  li .remove-kart {
    margin-top: 10px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    height: 30px;
    width: 63%;
  }
  li .remove-kart h1 {
    height: 100%;
  }
  li .remove-kart .remove:hover {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
    margin-bottom: 10px;
  }
  li h1 {
    font-size: 14px;
    max-width: 10ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  li .description-kart {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 40px;
    left: 100px;
    width: 63%;
  }
  li h3 {
    font-size: 12px;
    margin-bottom: 10px;
  }
  li p {
    width: 60px;
    margin-bottom: 10px;
  }
  .total-price {
    border-top: 2px solid black;
    margin: 0px 8px;
    display: flex;
    justify-content: space-between;
  }
  .total-price p {
    color: black;
    width: auto;
    font-size: 16px;
    font-weight: 600;
  }
  .remove-all {
    width: 100%;
    border-style: none;
    padding: 15px;
    color: white;
    background-color: #27ae60;
    border-radius: 5px;
    font-size: 14px;
  }
  @media (min-width: 900px) {
    width: 290px;
    margin-top: 33px;
    height: 180px;
    max-height: 400px;
    text-align: center;
    border-radius: 5px;

    ul {
      max-height: 60vh;
    }
  }
`;
