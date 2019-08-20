import styled from 'styled-components';

export default styled.div`
  .masthead {
    height: 6em;
    padding-right: 4em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    margin: 1em;
    border-bottom: 1.5px solid transparent;
    transition: border-color 0.1s linear;
    font-size: 1.3em;
    text-decoration: none;
    color: #fff;

    :hover {
      cursor: pointer;
      border-color: #fff;
    }
  }
`;
