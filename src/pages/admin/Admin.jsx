import react  , { useState ,useEffect } from "react"
import { List } from "../../components/liist/List";
import { NewItem } from "../../components/newItem/NewItem";
import Spinner from "../../components/spinner/Spinner";
import { getData , postData } from "../../services/api/requests";
import'./admin.css'




export const Admin = () =>{


    const [currData , setCurrData] = useState([]);
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false)
    const [newItem , setnewItem] = useState(false);


      const getDataFormDb = async (category)=>{
        setLoading(true);

        const result = await getData();  
        setCurrData(result.data);
        setLoading(false);

      }


const data2 =    [{ id: 0 ,name: 'gr' , years: [1990,100]}  ,{  id: 1 ,name: 'rock' ,years: [1990,100]} ,{ id: 2 , name: 'rock' , years: [1990,100]} ]


const createItem = async (info)=>{
    let item = {name: info.name , years: info.years } ;
     await postData(item)
     getDataFormDb() ;
   
}




        if(!loading){
            return(

                <div>
                <div className="btns">
                    <div >
                        <button  onClick={()=> getDataFormDb('heavy_metal')}>Heavy-Metal</button>
                        <button onClick={()=> setCurrData(data2)} >Rock</button>
                    </div>
                    <button onClick={ ()=> setnewItem(!newItem)} >New Item</button>

                  </div>


                  <div className="new-item" >
                             { newItem ?  <NewItem callback={createItem}  />   : null}
                    </div>
                <div> <List data={currData} /> </div>
        

                </div>

            );
        
        }
        else{
            return <Spinner />
        }
  
   
}