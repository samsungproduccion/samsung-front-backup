import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Status() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Estados
      </Typography>
      <Typography color="text.secondary">
        Pendientes: 2
      </Typography>
      <Typography color="text.secondary">
        Aceptados: 4
      </Typography>
      <Typography color="text.secondary">
        Rechazados: 1
      </Typography>
    </React.Fragment>
  );
}