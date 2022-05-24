import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import ClockIcon from '@mui/icons-material/AccessTime'
import ViewIcon from '@mui/icons-material/Visibility'
import { FC } from 'react';
import { Form } from '../../types/form';
import { useNavigate } from 'react-router-dom';

interface FormularioCardProps {
    formulario:Form
}

export const FormularioCard:FC<FormularioCardProps> = ({ formulario, ...rest }) => {
  const navigate = useNavigate()

  const handleChangeFormulario:React.MouseEventHandler<HTMLButtonElement> | undefined = () => navigate({
    pathname:`/cms/forms/${formulario.id}`
  })

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            alt="Product"
            src={""}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {formulario.name}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {formulario.id}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <ClockIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              startIcon={(<ViewIcon fontSize="small" color="action"/>)}
              sx={{ mr: 0 }}
              onClick={handleChangeFormulario}
            >
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Ver
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}