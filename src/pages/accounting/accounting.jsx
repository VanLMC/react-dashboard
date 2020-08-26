import React, { useState, useEffect } from 'react'
import './accounting.css';

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

    

    return (
        <div className="accounting-page container">

                <h1>Rendimentos Anuais</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Janeiro</th>
                            <th>Fevereiro</th>
                            <th>Março</th>
                            <th>Abril</th>
                            <th>Maio</th>
                            <th>Junho</th>
        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>50</td>
                            <td>500</td>
                            <td>900</td>
  
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>50</td>
                            <td>500</td>
                            <td>900</td>

                        </tr>
                        <tr>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>50</td>
                            <td>500</td>
                            <td>900</td>
  
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>50</td>
                            <td>500</td>
                            <td>900</td>

                        </tr>
                        <tr>
                            <td>50</td>
                            <td>100</td>
                            <td>200</td>
                            <td>50</td>
                            <td>500</td>
                            <td>900</td>

                        </tr>
                        
                    </tbody>
                </table>

        </div>

    )
}
