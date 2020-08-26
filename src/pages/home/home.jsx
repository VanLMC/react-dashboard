import React, { useState, useEffect } from 'react'
import './home.css';

import {Pie, Line, Bar} from 'react-chartjs-2';

export default function Home() {

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
            <h1>Home Page</h1>

        </div>

    )
}
