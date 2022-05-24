import { useQuery } from '@apollo/client';
import { Box, Container, Skeleton } from '@mui/material';
import { FC } from 'react';
import { CustomerListResults } from '../../components/usuarios/customer-list-results';
import { CustomerListToolbar } from '../../components/usuarios/customer-list-toolbar';
import { GETUSERS } from '../../graphql/getUsers';

const Customers:FC = () => {

  const { data, loading } = useQuery(GETUSERS)

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
          <CustomerListToolbar/>
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={data?.users} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Customers;