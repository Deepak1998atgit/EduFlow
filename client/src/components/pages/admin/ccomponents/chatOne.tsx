import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartProps {
  series: ApexOptions['series'];
  chart: ApexOptions['chart'];
  colors: ApexOptions['colors'];
  dataLabels: ApexOptions['dataLabels'];
  stroke: ApexOptions['stroke'];
  fill: ApexOptions['fill'];
  legend: ApexOptions['legend'];
  xaxis: ApexOptions['xaxis'];
}

const MyChart: React.FC<ChartProps> = ({ series, chart, colors, dataLabels, stroke, fill, legend, xaxis }) => {
  const options: ApexOptions = {
    series,
    chart,
    colors,
    dataLabels,
    stroke,
    fill,
    legend,
    xaxis,
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type={chart?.type} height={chart?.height} />
    </div>
  );
};

export default MyChart;


