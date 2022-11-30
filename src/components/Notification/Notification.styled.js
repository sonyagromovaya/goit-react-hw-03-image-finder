import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  // background-color: #cce5ff;
  opacity: 0.7;
  color: ${props => {
    if (props.eventColor === 'red') {
      return 'red';
    }

    if (props.eventColor === 'black') {
      return '#000000';
    }

    return '#c2c2c2';
  }};
`;
