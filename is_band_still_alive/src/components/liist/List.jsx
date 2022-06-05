import react  , { useState ,useEffect } from "react"
import { ListItem } from "../listIItem/ListItem";




export const List = (props) =>{

    const [data , setData] = useState(props.data)

    return(
        <div>
           <ListItem data={{name: 'rock' , start: 1990 , end: 2000}}   />
        </div>
    );
}