import React , {useState , useEffect} from "react";
import { Chart } from "react-google-charts";
import './timeline.css'


export default function TimeLine(props ) {

const [data ,setData] = useState([])


useEffect(() => {
    let newData = props.data.map( item => {
        return [item.name ,new Date(parseInt(item.years[0]) , 0 , 0) , new Date(parseInt(item.years[1]) , 0 , 0) ]
    })
    setData(newData)
  }, [props.data])


  
  const dataStruct = [
    [
      { type: "string", id: "Band" },
      { type: "date", id: "Start" },
      { type: "date", id: "End" },
    ],
    ...data
   
  ];

  const options = {
    allowHtml: true,
    height: 650 ,
    timeline: { rowLabelStyle: { fontSize: 13 }, barLabelStyle: { fontSize: 6 } },
  };








  return (
    <div className="main-chart">  <Chart 
    chartType="Timeline"
    data={dataStruct}
    width="100%"
    options={options}
  />
   </div>
  );
}



