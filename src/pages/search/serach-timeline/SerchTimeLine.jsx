import React , {useState , useEffect} from "react";
import { Chart } from "react-google-charts";



export default function SerchTimeLine (props) {

  const [data , setData] = useState([]) ;

  useEffect(() => {

    setData(props.data)
    
  }, [props]) ;




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



