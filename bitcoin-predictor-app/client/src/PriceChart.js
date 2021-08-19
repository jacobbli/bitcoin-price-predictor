import React from 'react';
import { Line } from '@ant-design/charts';

const PriceChart = (props) => {

    var dataArray = []
    props['data'].forEach(element => {
        dataArray.push({
            date: element[0],
            value: element[1]
        })
    })

    const data = dataArray.reverse();

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default PriceChart;