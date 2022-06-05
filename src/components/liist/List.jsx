import react  , { useState ,useEffect } from "react"
import { ListItem } from "../listIItem/ListItem";
import Spinner from "../spinner/Spinner";




export const List = (props) =>{

    const [data , setData] = useState(props.data) ;
    const [loading , setLoading] = useState(true)


        setTimeout(() => {
            if(props.data.length > 0){
                setLoading(false);
            }
        }, 500);


        useEffect(() => {
            setData(props.data)
        },[props])

    async function deleteItem(id){

        const newData = data.filter(item => item.id !== id) ;
        setData(newData);

    }

    async function submitItem(item){
        const items = [...data]
        const objIndex = items.findIndex(obj => obj.id === item.id);
        items[objIndex] = item ;
        setData(items);
    }
 


        if(!loading){
        return(
            <div>
               {  data.map((item , index) =>  <ListItem key={item.id}  data={item} callbacks={{deleteItem , submitItem }} /> )}
             </div>);

        }
        else{
            return <>
            <Spinner />
              </>
        }


}


