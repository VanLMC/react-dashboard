import React, { useState } from 'react'
import './finances.css';

import {Pie, Line, Bar} from 'react-chartjs-2';

export default function Finances() {

    let [chartOptions, setOptions ] = useState({            
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    
                    fontColor: '#00008B'

                }
                
                
            }
    })

    const [chartData, setChartData ] = useState({
            labels: ['dado 1','dado 2', 'dado 3'],
            datasets: [{
                            data: [10, 20, 30],
                            backgroundColor: ['#00008B', '#0000FF', '#87CEEB']
                        },
                    
                    ],

});

const [chartData2, setChartData2 ] = useState({
    labels: ['dado 1','dado 2', 'dado 3'],
    datasets: [{
                    data: [40, 40, 20],
                    backgroundColor: ['#00008B', '#0000FF', '#87CEEB']
                },
            
            ],

});

    
    
    //const chart = () => {
/*
        setChartData = {

            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['Red', 'Yellow', 'Blue']
            }]
            // These labels appear in the legend and in the tooltips when hovering different arcs

        }
*/
  /*  }
    
    useEffect(() => {
       chart();
    }, [])
*/ 

    return (
        <div className="home-page container">

            <div className="grid-container">

                    <div className="card graph-1">
                        <Pie  height={200} data={chartData} options={chartOptions}/>
                    </div>
                    <div className="card graph-2">
                        <Pie height={200} data={chartData2} options={chartOptions}/>
                    </div>
                    <div className="card graph-3">
                        <Pie height={200} data={chartData} options={chartOptions}/>
                    </div>


                    <div className="card  graph-4">
                        <Line height={180} data={chartData} options={chartOptions}/>
                    </div>
                    <div className="card  graph-5">
                        <Line height={180} data={chartData2} options={chartOptions}/>
                    </div>
                    

            </div>
        </div>

    )
}
