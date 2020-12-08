import React from 'react';
import '../css/Chart.css';
import { Line } from 'react-chartjs-2';

function Chart() {

    const data = [{
        x: 10,
        y: 20
    }, {
        x: 15,
        y: 10
    }, {
        x: 12,
        y: 4
    }]

    return (
        <div className='chart'>
            <Line
                data={{
                    datasets: [
                        {
                            type: 'line',
                            data: data,
                            backgroundColor: 'black',
                            borderColor: '#5ac53b',
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0,0, 0, 0)',
                            pointHoverBackgroundColor: '#000000',
                            pointHoverBackgroundWidth: 4,
                            pointHoverStatus: 6,
                        }
                    ]
                }}

                options={{
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    );
}

export default Chart;