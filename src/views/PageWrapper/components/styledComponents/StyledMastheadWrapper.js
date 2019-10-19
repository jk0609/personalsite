import styled from 'styled-components';

export default styled.div`
  .masthead {
    height: 4em;
    padding-right: 4em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid
      ${props => (props.isScrolled ? 'white' : 'transparent')};
    transition: border-bottom 0.1s linear;
  }

  a {
    margin: 1em;

    :hover {
      border-color: #fff;
    }
  }
`;
