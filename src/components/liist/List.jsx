import react  , { useState ,useEffect } from "react"
import { ListItem } from "../listIItem/ListItem";
import Spinner from "../spinner/Spinner";
import {putData , deleteData}from '../../services/api/requests'

import './list.css'




export const List = (props) =>{

    const [data , setData] = useState(props.data) ;
    const [loading , setLoading] = useState(true)


        useEffect(() => {
            setData(props.data) ;
            setLoading(false);
        },[props])

    async function deleteItem(id){
        

        if (window.confirm("Delete the item?")) {

            deleteData(id);
            const newData = data.filter(item => item.id !== id) ;
            setData(newData);
          }
      

    }

    async function submitItem(item){

        const items = [...data]
        const objIndex = items.findIndex(obj => obj.id === item.id);
        items[objIndex] = item ;
        setData(items);

        await putData(item.id , item);
    }
 


        if(!loading){
        return(
            <div  className="list">
               {  data.map((item , index) =>  <ListItem key={item.id-2}  data={item} callbacks={{deleteItem , submitItem }} /> )}
             </div>);

        }
        else{
            return <>
            <Spinner />
              </>
        }


}


