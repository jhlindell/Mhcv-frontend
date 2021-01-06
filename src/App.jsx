import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
  },
});

export function App() {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Typography variant="h2">
        Mile High Campers Vans is under construction. Please check back later.
      </Typography>
    </Container>
  );
}
