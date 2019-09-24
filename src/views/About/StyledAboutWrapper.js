import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    width: 100%;
  }

  > div {
    display: inline-block;
    vertical-align: top;
  }

  .text-sections {
    width: 55%;
    padding-top: 40px;

    > div:nth-child(odd) {
      background: #fff;
      color: #2f2f2f;
    }
  }

  .skills {
    width: calc(40% - 20px);
    padding: 0 10px;
    position: relative;

    .transition {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .skills-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      > svg {
        height: 25px;
        fill: #fff;

        &.prev-arrow {
          transform: rotate(90deg);
        }

        &.next-arrow {
          transform: rotate(-90deg);
        }
      }
    }

    .skill-item {
      text-align: left;
    }
  }
`;
