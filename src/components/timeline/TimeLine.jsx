import React , {useState , useEffect} from "react";
import { Chart } from "react-google-charts";

import './timeline.css'


export default function TimeLine (props) {

  const [data , setData] = useState([]) ;

  useEffect(() => {

    loadData();   
    
  }, [props]) ;


  function loadData(){
    let data = props.data.sort((a,b) => a.data.id -b.data.id)
    let newArr =  [] ;
    data.forEach(item => {
     let temp = item.data ;
       if( parseInt(temp.years[0]) >= parseInt(temp.years[1]) ){
         temp.years = ["0" ,"0"]
       }
      newArr.push ([temp.name ,new Date(parseInt(temp.years[0]) , 0 , 0) , new Date(parseInt(temp.years[1]) , 0 , 0)] );
 
    })
    setData(newArr);
  }

 

  const  dataStruct = [
    [
      { type: "string", id: "Band" },
      { type: "date", id: "Start" },
      { type: "date", id: "End" },
    ],
    ...data
   
  ];

  const  options = {
    allowHtml: true,
    height: 630 ,
    colors: ['purple', 'blue', 'red', 'green', 'orange', 'gray'] ,
        timeline: { rowLabelStyle: { fontSize: 13 }, barLabelStyle: { fontSize: 6 } },
  };




      return (
          <div className="main-chart">

            <Chart 
        chartType="Timeline"
        data={dataStruct}
        width="100%"
        options={options}
      />
                

       </div>
      
      );
    

  



}



