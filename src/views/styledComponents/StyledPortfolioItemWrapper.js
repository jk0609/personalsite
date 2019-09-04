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

    img {
      height: auto;
      width: 90%;
      border-radius: 10px;
      opacity: ${props => (props.isHovered ? '0.5' : '1')};
    }

    .portfolio-item-links {
      background: red;
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }

  .portfolio-item-description {
    p {
      text-align: left;
    }
  }
`;
