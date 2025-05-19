import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MonthlyTemperatureChart: React.FC = () => {


  const {
    t,
    i18n: { dir },
  } = useTranslation();
// fake data
  const temperatureData = [5, 17, 6, 34, 21, 12, 7, 28, 24, 18, 11, 6];
  
  // months 
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 
  return (
    <Paper dir={dir()} elevation={3} sx={{ p: 3, width: '100%', maxWidth: 700, height: 230 ,borderRadius:8}}>
      <Typography variant="h6" gutterBottom>
      {t("dashboard.average")}
      </Typography>
      <LineChart
        xAxis={[{ 
          scaleType: 'point',
          data: months,
      
        }]}
       
        series={[
          {
            data: temperatureData,
            color: '#7947F7',
          },
        ]}
        height={230}
      />
    </Paper>
  );
};

export default MonthlyTemperatureChart;