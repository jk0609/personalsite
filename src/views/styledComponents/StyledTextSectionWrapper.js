import styled from 'styled-components';

export default styled.div`
  text-align: left;
  display: flex;
  border-radius: 5px;

  div.title {
    padding: 10px;
    display: flex;
    align-items: center;
    width: 33%;

    h3 {
      font-size: 2em;
    }
  }

  div.body {
    padding: 10px;
    width: 67%;
    font-size: 1em;

    h3,
    p {
      margin: 0;
    }
  }
`;
