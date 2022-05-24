import { useQuery } from '@apollo/client';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import { FormularioCard } from '../../components/formularios/FormularioCard';
import { FormularioListToolBar } from '../../components/formularios/FormularioListToolBar';
import { CAMPAINGSLIST } from '../../graphql/getCampaings';
import { Form } from '../../types/form';

const Formularios = () => {

  const { data, loading } = useQuery(CAMPAINGSLIST)

  if(loading) return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Skeleton variant="rectangular" width="100%" height="600px" />
    </Box>
  )

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <FormularioListToolBar />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {data?.campaings.map((formulario:Form) => (
                <Grid
                  item
                  key={formulario.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <FormularioCard formulario={formulario} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Formularios