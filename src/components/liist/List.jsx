import react  , { useState ,useEffect } from "react"
import { ListItem } from "../listIItem/ListItem";
import Spinner from "../spinner/Spinner";
import {deleteItemByName , updateItemByName} from '../../services/firebase'

import './list.css'




export const List = (props) =>{

    const [{data , category }, setData] = useState(props.currData) ;
    const [loading , setLoading] = useState(true)


     useEffect( () => {
            setData(props.currData) ;
            setLoading(false);
            console.log(category);
        },[props])

    async function deleteItem(item){
        
        if (window.confirm("Delete the item?")) {

            await deleteItemByName(category ,item.name ,item);
            const newData = data.filter(data => data.id !== item.id) ;
            setData({data: newData , category});
          }
      

    }

    async function updateItem(item){

        if(category !== 'non' ){

        updateItemByName(category ,item.name , item);
        // const items = [...data]
        // const objIndex = items.findIndex(obj => obj.id === item.id);
        // items[objIndex] = item ;
        // setData(items);

        }else{
            console.log('== ' + category);
        }

    }

 


        if(!loading){
        return(
            <div  className="list">
               {  data.map((item , index) =>  <ListItem key={item.id-2}  data={item} callbacks={{deleteItem , updateItem }} /> )}
             </div>);

        }
        else{
            return <>
            <Spinner />
              </>
        }


}


