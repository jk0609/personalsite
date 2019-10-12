import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 25vh;
  left: 0;
  padding: 0 20px 0 5px;
  background: #436174;
  border-radius: 0 10px 10px 0;

  &.closed {
    transform: translate(-70%);
    transition: transform 500ms;
  }

  &.open {
    transform: translate(0);
    transition: transform 400ms;
  }

  .arrow-container {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%) translateX(-100%);
    height: 15px;
    width: 15px;
    fill: #fff;
  }

  .close-arrow {
    transform: rotate(90deg);
  }

  .open-arrow {
    transform: rotate(-90deg);
  }

  > svg {
    height: 30px;
    width: 30px;
    display: block;
    background-size: contain;
    margin: 10px 0;
    fill: #fff;

    :hover {
      fill: #a9a9a9;
    }
  }
`;
