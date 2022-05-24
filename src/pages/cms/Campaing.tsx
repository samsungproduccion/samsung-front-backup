import { Grid, Paper } from '@mui/material'
import Chart from '../../components/Chart/Chart'
import Registers from '../../components/Registers/Registers'
import Status from '../../components/Status/Status'

const Campaing = () => {
  return (
    <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
        <Paper
            sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 400,
            }}
        >
            <Chart/>
        </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
        <Paper
            sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 400,
            }}
        >
            <Status/>
        </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Registers/>
        </Paper>
        </Grid>
    </Grid>
  )
}

export default Campaing