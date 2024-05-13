import React, {useEffect, useContext} from 'react'
//import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'

const LineChart = () => {
    const option = {
        textStyle:{
          fontFamily: 'Montserrat'
        },
        title: {
            padding: 12,
          text: 'Rating Progression',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
            padding: 36,
          data: ['Overall Rating', 'Teaching Proficiency', 'Availability & Responsiveness', 'Attendance']
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '4%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2021', '2022', '2023', '2024']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Overall Rating',
            type: 'line',
            stack: 'Total',
            data: [3, 2.5, 3.5, 4]
          },
          {
            name: 'Teaching Proficiency',
            type: 'line',
            stack: 'Total',
            data: [2.66, 3.5, 3, 3.66]
          },
          {
            name: 'Availability & Responsiveness',
            type: 'line',
            stack: 'Total',
            data: [1.5, 2, 2.66, 2.5]
          },
          {
            name: 'Attendance',
            type: 'line',
            stack: 'Total',
            data: [3, 3.5, 2.66, 2.5]
          },
        ]
    };
    return <ReactEcharts option={option} />;
}

export default LineChart;