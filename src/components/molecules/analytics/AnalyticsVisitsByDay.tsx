// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import IconifyIcon from '../../../@core/components/icon'
import OptionsMenu from '../../../@core/components/option-menu'
import ReactApexcharts from 'react-apexcharts'
import { hexToRGBA } from '../../../@core/utils/hex-to-rgba'
import CustomAvatar from '../avatar'

const AnalyticsVisitsByDay = () => {
  // ** Hook
  const theme = useTheme()

  const options: any = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: '51%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.warning.main, 0.1),
      hexToRGBA(theme.palette.warning.main, 1),
      hexToRGBA(theme.palette.warning.main, 0.1),
      hexToRGBA(theme.palette.warning.main, 1),
      hexToRGBA(theme.palette.warning.main, 1),
      hexToRGBA(theme.palette.warning.main, 0.1),
      hexToRGBA(theme.palette.warning.main, 0.1)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      labels: {
        style: { colors: theme.palette.text.disabled }
      }
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -30,
        left: -7,
        right: -4
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Visits by Day'
        subheader='Total 248.5k Visits'
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
        action={
          <OptionsMenu
            options={['Refresh', 'Edit', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options' }}
          />
        }
      />
      <CardContent sx={{ pt: { xs: `${theme.spacing(6)} !important`, md: `${theme.spacing(0)} !important` } }}>
        <ReactApexcharts type='bar' height={215} options={options} series={[{ data: [38, 55, 48, 65, 80, 38, 48] }]} />
        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb: 0.75, fontWeight: 600 }}>Most Visited Day</Typography>
            <Typography variant='body2'>Total 62.4k Visits on Thursday</Typography>
          </Box>
          <CustomAvatar skin='light' color='warning' variant='rounded'>
            <IconifyIcon icon='mdi:chevron-right' />
          </CustomAvatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsVisitsByDay