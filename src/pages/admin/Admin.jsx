import react  , { useState ,useEffect } from "react"
import { List } from "../../components/liist/List";




export const Admin = () =>{


    const [currData , setCurrData] = useState([]);

const data1 =    [{ id: 0 ,name: 'rock' , start: 1990 , end: 2000}  ,{  id: 1 ,name: 'rock' , start: 1990 , end: 2000} ,{ id: 2 , name: 'rock' , start: 1990 , end: 2000} ] ;
const data2 =    [{ id: 0 ,name: 'gr' , start: 1990 , end: 100}  ,{  id: 1 ,name: 'rock' , start: 1990 , end: 2000} ,{ id: 2 , name: 'rock' , start: 1990 , end: 2000} ]


    return(
        <div>
            <div>
                <button  onClick={()=> setCurrData(data1)}>Heavy-Metal</button>
                <button onClick={()=> setCurrData(data2)} >Rock</button>
            </div>

            <div>
                <List data={currData} />
            </div>

        </div>
    );
}