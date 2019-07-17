import styled from 'styled-components';

export default styled.div`
  a {
    float: right;
    margin: 0 10px;
    border-bottom: 1.5px solid transparent;
    transition: border-color 0.5s linear;
    font-size: 16px;

    :hover {
      cursor: pointer;
      border-color: black;
    }
  }
`;
