import styled from 'styled-components';
import githubIcon from '../../sharedResources/assets/github-icon.png';
import linkedinIcon from '../../sharedResources/assets/linkedin-icon.png';
import emailIcon from '../../sharedResources/assets/email-icon.png';

export default styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 0;
  padding: 0 10px;
  background: #436174;
  border-radius: 0 10px 10px 0;

  span {
    height: 30px;
    width: 30px;
    display: block;
    background-size: contain;
    margin: 10px 0;

    :hover {
      // TODO: Add hover treatment
    }
  }

  .github-icon {
    background-image: url(${githubIcon});
  }

  .linkedin-icon {
    background-image: url(${linkedinIcon});
  }

  .email-icon {
    background-image: url(${emailIcon});
  }
`;
