import styled from 'styled-components';

export default styled.div`
  text-align: left;
  display: flex;

  div {
    width: calc(67% - 40px);
    padding: 20px;

    h3,
    p {
      margin: 0;
    }
  }

  div.text-section-title {
    display: flex;
    align-items: center;
    width: calc(33% - 40px);

    h3 {
      font-size: 2em;
    }
  }
`;
