import React  ,{useState , useRef}from "react"; 
import SerchTimeLine from "./serach-timeline/SerchTimeLine"
import {getYearsByName1 ,getYearsByName2} from '../../services/api//requests' 
import {getCategoryByName , getItemByName} from '../../services/firebase'
import './search.css'



export const Search =() =>{

    const initState = ['name' ,  new Date(1960, 0,0),   new Date(2022, 0 ,0)] ;
    const [input , setInput] = useState('');
    const [category , setCategory] = useState('Heavy-Metal') ;
    const [data , setData] = useState([]);



   async function searchData(){
 
    const term =  inputValidation(input);
    const res = await getItemByName(category ,term ) ;
    
    if(res === undefined){
        alert('no data , try to switch category')
    }

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
                     <div  className='btns'>
                        <button onClick={()=> { setCategory('Heavy-Metal')}} >Heavy-Metal</button>
                        <button onClick={()=> {setCategory('Hard-Rock')}} >Hard-Rock</button>
                        <button onClick={()=> { setCategory('Rock')}} >Rock</button>
                    </div>
                <div className="container">
                <button onClick={(e)=> setData([])}>Reset</button>
                <input id="search-input" onChange={ (e) => setInput(e.target.value)} />
                <button onClick={(e)=> searchData()}>Search</button>
                </div>

                <div className="timeline">
                    <SerchTimeLine data={data} />
                </div>
        </div>
        </>
    );
}