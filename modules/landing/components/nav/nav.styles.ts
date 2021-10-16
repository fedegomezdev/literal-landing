import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const MenuesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MenuItem = styled.li`
  list-style-type: none;
  font-family: sans-serif;
  margin: 0 1rem;

  > a {
    text-decoration: none;
    color: #3b4754;
    font-weight: 600;
  }
`;
