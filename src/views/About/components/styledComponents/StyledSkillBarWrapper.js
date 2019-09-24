import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #fff;
  background: #436174;
  margin: 10px;

  .filler {
    background: #a0bec4;
    height: 100%;
    border-radius: inherit;
    width: ${props => props.percentage}%;
    transition: width 0.2 ease-in;
  }
`;
