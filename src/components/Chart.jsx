// import React, {useEffect, useState} from 'react';
// import '../css/Chart.css';
// import { Line } from 'react-chartjs-2';
//
// const options = {
//     legend: {
//         display: false,
//     },
//
//     hover: {
//         intersect: false
//     },
//
//     elements: {
//         line: {
//             tension: 0
//         },
//
//         point: {
//             radius: 0,
//         },
//     },
//
//     maintainAspectRatio: false,
//
//     tooltips: {
//         mode: 'index',
//         intersect: false,
//         callbacks: {
//         },
//     },
//
//     scales: {
//         xAxes: [
//             {
//                 type: 'time',
//                 time: {
//                     format: 'MM/DD/YY',
//                     tooltipFormat: 'll',
//                 },
//
//                 ticks: {
//                     display: false,
//                 }
//             },
//         ],
//
//         yAxes: [
//             {
//                 gridLines: {
//                     display: false,
//                 },
//
//                 ticks: {
//                     display: false,
//                 },
//             },
//         ],
//     },
// };
//
// function Chart() {
//
//     const [graphData, setGraphData] = useState([]);
//
//     const data = [{
//         x: 10,
//         y: 20
//     }, {
//         x: 15,
//         y: 10
//     }, {
//         x: 12,
//         y: 4
//     }]
//
//     const createMockData = () => {
//         let data = [];
//         let value = 50;
//         for (let i = 0; i < 366; i++) {
//             let date = new Date();
//             date.setDate(i);
//             value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
//             data.push({x: date, y: value});
//         }
//
//         setGraphData(data);
//     }
//
//     useEffect(() => {
//         createMockData();
//     }, [])
//
//     return (
//         <div className='chart'>
//             <Line
//                 data={{
//                     datasets: [
//                         {
//                             type: 'line',
//                             data: graphData,
//                             backgroundColor: 'black',
//                             borderColor: '#5ac53b',
//                             borderWidth: 2,
//                             pointBorderColor: 'rgba(0,0, 0, 0)',
//                             pointHoverBackgroundColor: '#000000',
//                             pointHoverBackgroundWidth: 4,
//                             pointHoverStatus: 6,
//                         }
//                     ]
//                 }}
//
//                 // options={{
//                 //     legend: {
//                 //         display: false
//                 //     },
//                 //     tooltip: {
//                 //         mode: 'index',
//                 //         intersect: false
//                 //     },
//                 //     scales: {
//                 //         xAxes: [
//                 //             {
//                 //                 type: 'time',
//                 //                 time: {
//                 //                     format: 'MM/DD/YY',
//                 //                     tooltipFormat: 'll',
//                 //                 },
//                 //                 ticks: {
//                 //                     display: false,
//                 //                 }
//                 //             },
//                 //         ],
//                 //         yAxes: [{
//                 //             ticks: {
//                 //                 display: false
//                 //             }
//                 //         }]
//                 //     }
//                 // }}
//             />
//         </div>
//     );
// }
//
// export default Chart;

import React, {useEffect, useState} from 'react';
import '../css/Chart.css';
import {Line} from 'react-chartjs-2';

const options = {
    legend: {
        display: false,
    },

    hover: {
        intersect: false
    },

    elements: {
        line: {
            tension: 0
        },

        point: {
            radius: 0,
        },
    },

    maintainAspectRatio: false,
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {},
    },

    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    format: 'MM/DD/YY',
                    tooltipFormat: 'll',
                },

                ticks: {
                    display: false,
                }
            },
        ],

        yAxes: [
            {
                gridLines: {
                    display: false,
                },

                ticks: {
                    display: false,
                },
            },
        ],
    },
};

function Chart({casesType}) {

    const [data, setData] = useState({});

    useEffect(() => {
        let data = [];
        let value = 50;

        for (let i = 0; i < 366; i++) {
            let date = new Date();
            date.setHours(0, 0, 0, 0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10);
            data.push({x: date, y: value});
        }

        setData(data)
    }, []);

    return (
        <div className='chart'>
            {
                data?.length > 0 && (
                    <Line
                        data={{
                            datasets: [
                                {
                                    type: 'line',
                                    backgroundColor: 'black',
                                    borderColor: '#5AC53B',
                                    borderWidth: 2,
                                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                                    pointHoverBackgroundColor: '#5AC53B',
                                    pointHoverBorderColor: '#000000',
                                    pointHoverBorderWidth: 4,
                                    pointHoverRadius: 6,
                                    data: data,
                                },
                            ],
                        }}

                        options={options}
                    />
                )}
        </div>
    );
}

export default Chart;