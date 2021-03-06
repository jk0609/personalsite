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

    > div:nth-child(even) {
      background: #fff;
      color: #2f2f2f;
    }
  }

  .head-shot {
    img {
      // TODO: remove magic #s
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

    padding-bottom: 30px;
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

      > button {
        height: 25px;
        background: none;
        border: none;
        z-index: 10;

        > svg {
          height: 25px;
          fill: #fff;
        }

        &:disabled > svg {
          fill: #d3d3d3;
        }

        &.prev-arrow > svg {
          transform: rotate(90deg);
        }

        &.next-arrow > svg {
          transform: rotate(-90deg);
        }
      }
    }

    .skill-item {
      text-align: left;
    }
  }
`;
