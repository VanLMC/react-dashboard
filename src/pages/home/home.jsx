import React, { useState, useEffect } from 'react'
import './home.css';

import {Pie, Line, Bar, Doughnut} from 'react-chartjs-2';

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
                        label: 'Rendimento',
                        data: [15, 20, 30],
                        backgroundColor: ['#00008B', '#0000FF', '#87CEEB']
                    },
                
                ],

});

const [chartData2, setChartData2 ] = useState({
labels: ['dado 1','dado 2', 'dado 3'],
datasets: [{
                label: 'Retornos',
                data: [40, 40, 20],
                backgroundColor: ['#00008B', '#0000FF', '#87CEEB']
            },
        
        ],

});

    
    

    return (
        <div className="home-page container">
                <div className="grid-container">

                    <div className="card info-card card-1"> 
                            <div className="card-header">
                                <p>Total de vendas</p> 
                            </div>
                            <div className="card-footer">
                                <p>4.950</p>
                            </div>
                     </div>
                     <div className="card info-card card-2"> 
                            <div className="card-header">
                                <p>Receita total</p> 
                            </div>
                            <div className="card-footer">
                                <p>R$ 20.950</p>
                            </div>
                     </div>
                     <div className="card info-card card-3"> 
                            <div className="card-header">
                                <p>Pedidos Realizados</p> 
                            </div>
                            <div className="card-footer">
                                <p>7.500</p>
                            </div>
                     </div>
 
                    <div className="card graph-1">
                        <Bar  height={220} data={chartData} options={chartOptions}/>
                    </div>
                    <div className="card graph-2">
                        <Doughnut height={250} data={chartData2} options={chartOptions}/>
                    </div>


                </div>

        </div>

    )
}
