import React  ,{useState , useRef}from "react"; 
import SerchTimeLine from "./serach-timeline/SerchTimeLine"
import {getYearsByName1 ,getYearsByName2} from '../../services/api//requests' 
import {getCategoryByName , getItemByName} from '../../services/firebase'
import './search.css'



export const Search =() =>{

    const initState = ['name' ,  new Date(1960, 0,0),   new Date(2022, 0 ,0)] ;
    const [input , setInput] = useState('');
    const [data , setData] = useState([]);



   async function searchData(){
 
    const term =  inputValidation(input);
    const res = await getItemByName('Heavy-Metal' ,term ) ;
    const newItem = formatData(res) ;
    const newData = [...data, newItem] 

    console.log(newData);
     setData([...newData])


    }

    const formatData = (dbData)=>{

        return [dbData.name ,new Date(dbData.years[0], 0,0),   new Date(dbData.years[1], 0 ,0) ] ;
       
    }

    const inputValidation = (input) => {

       
        if (typeof input === 'string' || input instanceof String ){
           
            if(input.length > 2){

                let str = input.trim() ;
                let res =  str[0].toUpperCase() + str.slice(1);
                return res ;
            }
        }
    }
    return(
        <>
        <div >
                <div className="container">
                <input onChange={ (e) => setInput(e.target.value)} />
                <button   onClick={(e)=> searchData()}>Search</button>
                </div>

                <div className="container">
                    <SerchTimeLine data={data} />
                </div>
        </div>
        </>
    );
}