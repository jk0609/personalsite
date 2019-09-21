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
    position: relative;

    .transition {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .proficient {
      background: red;
    }

    .learning {
      background: green;
    }

    .will-learn {
      background: blue;
    }
  }
`;
