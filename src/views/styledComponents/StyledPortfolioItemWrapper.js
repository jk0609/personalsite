import styled from 'styled-components';

export default styled.div`
  background: #d3d3d3;
  color: #000;
  // TODO: handle height
  width: 40%;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  position: relative;

  .portfolio-item-image {
    height: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      width: 90%;
      border-radius: 10px;
      opacity: ${props => (props.isHovered ? '0.7' : '1')};
      transition: opacity 0.25s ease-in-out;
    }

    .portfolio-item-links {
      width: 70%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      transition: opacity 0.25s ease-in-out;

      &.hidden {
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
      }

      a {
        border: 1px solid #d3d3d3;
        border-radius: 5px;
        color: #000;
        background: #fff;
        padding: 12px 5px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1em;
        letter-spacing: 2px;
        width: 40%;

        :hover {
          border-color: #000;
        }
      }
    }
  }

  .portfolio-item-description {
    .portfolio-item-text {
      text-align: left;
    }
  }
`;
