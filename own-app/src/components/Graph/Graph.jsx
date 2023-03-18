import {  Pie } from 'react-chartjs-2';
import {Chart,Tooltip,Title,ArcElement,Legend} from "chart.js"
import { React,useEffect, useState } from 'react';


Chart.register(
    Tooltip,Title,ArcElement,Legend 
);

// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor: [
//             'Red',
//             'Yellow',
//             'Blue'
//         ]
//     }
// ],

//     labels: [
//         'Red',
//         'Yellow',
//         'Blue'
//     ]
// };


export default function Graph(){
    const [error, setError] = useState(null);
    const [data,setData] = useState(
        {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'Red',
                'Yellow',
                'Blue'
            ]
        }
    ],
    
        labels: [
            'Red',
            'Yellow',
            'Blue',
            'Pink'
        ]
        }
    )
 
    
    useEffect(()=>{
        const getData=() =>{
            fetch("https://fakestoreapi.com/products")
            .then((res)=> res.json()
                // return data;

            )
            .then((res)=>{
                console.log(res);

                let obj={}

                for(let i=0;i<res.length;i++){
                if(!obj[res[i].category]) obj[res[i].category]=1
                else obj[res[i].category]++
                };
                // console.log(obj)
                
                setData(
                    {
                        datasets: [{
                            data:Object.values(obj),
                            backgroundColor: [
                                '#ed6e85',
                                '#f2a254',
                                '#f8cd6b',
                                '#6cbdbf',
                                
                            ]
                        }
                    ],
                    
                        labels:Object.keys(obj),
                        }
                )
            })
            .catch((err)=>{
                console.log(err);
                setError(err)
            })
            
        }
        getData()
    },[])
   
    if (error) return `Error: ${error.message}`;
    if (!data) return "No post!"
    
    return (
        <div>
           <Pie data={data} />
        </div>
    )
}