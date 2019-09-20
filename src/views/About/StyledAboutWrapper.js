import styled from 'styled-components';

export default styled.div`
  > div {
    display: inline-block;
    vertical-align: top;
  }

  .text-sections {
    width: 60%;

    > div:nth-child(odd) {
      background: #fff;
      color: #2f2f2f;
    }
  }

  .skills {
    width: 40%;
    overflow-x: hidden;
    white-space: nowrap;

    .skills-box {
      height: 100px;
      background: green;
    }
  }
`;
