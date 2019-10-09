import styled from 'styled-components';

export default styled.div`
  text-align: center;
  padding-bottom: 2em;
  margin: 0 20%;

  h1 {
    font-size: 4em;
    margin: 0.25em 0.5em;
  }

  .section-title {
    margin: 0 3em;
    font-size: 2.5em;
  }

  div.text-section:nth-child(odd) {
    background: #fff;
    color: #2f2f2f;
  }

  // Media Queries
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    //
  }
`;
