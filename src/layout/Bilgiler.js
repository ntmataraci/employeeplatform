import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

  

const Bilgiler= (props) => {



  
    const options = {
        indexAxis:"y",
        responsive: true,
        plugins: {
          legend: {
            display:false,
          },
          title: {
            display: true,
            text: 'Öneri Adedi',
          },
          scales:{
              x:{
                  stacked:true
              },
              y:{
                  stacked:true
              }
          }
        },
      };
      const optionsLine = {
        responsive: true,
        plugins: {
          legend: {

            display:false,
          },
          title: {
            display: true,
            text: 'Performans',
          },
    
        },
      };
      
      const labels = props.sendPerformances&&props.sendPerformances.map(item=>item.Tarih);
      const labelsTwo=['2022']

      
      const data = {
        labels:labelsTwo,
        datasets: [
          {
            label: 'Dataset 1',
            data: [props.sendOneriQty],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            stack:"stack 0",
            barThickness: 6,
          },
          {
            label: 'Dataset 2',
            data: [8],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'white',
            stack:"stack 0",
            barThickness: 6,
          },

        ],
      };
      const dataLine = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: props.sendPerformances&&props.sendPerformances.map(item=>item.Performans),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      
    

    return(
        <>

        <div style={{marginTop:"0.5rem",width:"90%"}}>
        <Bar style={{height:"2rem",maxHeight:"100px"}} options={options} data={data}  /></div>
<div  style={{marginTop:"1rem",width:"90%"}}><Line style={{maxHeight:"400px"}} options={optionsLine} data={dataLine} /></div>
      
        </>
    )
}

export default Bilgiler