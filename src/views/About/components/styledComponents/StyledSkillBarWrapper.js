import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  background: #436174;
  margin: 5px 0;

  .filler {
    background: #a0bec4;
    height: 100%;
    border-radius: 3px 0 0 3px;
    width: ${props => props.percentage}%;
    transition: width 0.2 ease-in;
  }
`;
