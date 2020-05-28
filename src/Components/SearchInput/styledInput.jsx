import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles({
    textContainer: {
      width: '67%',
    },
    label: {
        textTransform: 'uppercase',
    },
    input: {
      fontSize: '20px',
    },
    error: {
        color: 'red',
    }
  });

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 141px;
`
export const ErrorTextWrapper = styled.div`
  text-transform: uppercase;
`
