import react  , { useState ,useEffect } from "react"
import { List } from "../../components/liist/List";
import { NewItem } from "../../components/newItem/NewItem";




export const Admin = () =>{


    const [currData , setCurrData] = useState([]);
    const [newItem , setnewItem] = useState(false);


const data1 =    [{ id: 0 ,name: 'rock' , start: 1990 , end: 2000}  ,{  id: 1 ,name: 'rock' , start: 1990 , end: 2000} ,{ id: 2 , name: 'rock' , start: 1990 , end: 2000} ] ;
const data2 =    [{ id: 0 ,name: 'gr' , start: 1990 , end: 100}  ,{  id: 1 ,name: 'rock' , start: 1990 , end: 2000} ,{ id: 2 , name: 'rock' , start: 1990 , end: 2000} ]


const createItem = async (info)=>{

    let item = { id : info.id ,name: info.name , start: info.start , end: info.end}
    const data = [...currData]
    item.id = data.map(item => item.id).sort((a,b)=> b-a)[0]+1;
    data.push( item );
    setCurrData(data);
}


useEffect(() => {
 console.log(currData);
})


    return(
        <div>
            <div>
                <button  onClick={()=> setCurrData(data1)}>Heavy-Metal</button>
                <button onClick={()=> setCurrData(data2)} >Rock</button>
            </div>
             <div >
                     <button onClick={ ()=> setnewItem(!newItem)} >New Item</button>
                     { newItem ?  <NewItem callback={createItem}  />   : null}
          </div>
         

            <div>
                <List data={currData} />
            </div>

        </div>
    );

   
}