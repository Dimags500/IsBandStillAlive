import react  , { useState ,useEffect } from "react"
import { List } from "../../components/liist/List";
import { NewItem } from "../../components/newItem/NewItem";
import Spinner from "../../components/spinner/Spinner";
import {getCategoryByName , createItemByName} from '../../services/firebase'
import'./admin.css'




export const Admin = () =>{


    const [currData , setCurrData] = useState({data : [] , category : 'non'});
    // const [currCategory , setCurrCategory] = useState('non');

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false)
    const [newItem , setnewItem] = useState(false);



    useEffect(() => {
      
    
      return () => {
        setNewData('Heavy-Metal');
        console.log(currData.category);
      }

    }, [])
    


const createItem = async (info)=>{
   
    if(currData.category !== 'non' ){

        const index = currData.data.length ;
        let item = {name: info.name , years: info.years , id: index } ;
        console.log(item);
        createItemByName(currData.category , item.name,item) ;
        setNewData(currData.category)
    }   
}

async function convertData(dataFromDb){
    let data = dataFromDb.sort((a,b) => a.data.id -b.data.id) ;
    let newData =  [] ;
    data.forEach(item => {
     let temp = item.data ;
       if( parseInt(temp.years[0]) >= parseInt(temp.years[1]) ){
         temp.years = ["0" ,"0"]
       }
       newData.push ({ id: temp.id ,name :temp.name , years: temp.years}  );
       
    })
    return newData
  }

async function setNewData(category){
      console.log(category);
    const data = await getCategoryByName(category) ;
    let result = await convertData(data) ;
        setCurrData({data: result , category : category}) ;
  }



        if(!loading){
            return(

                <div>
                <div className="btns">
                    <div >
                        <button onClick={()=> {setNewData('Heavy-Metal')}} >Heavy-Metal</button>
                        <button onClick={()=> {setNewData('Hard-Rock')}} >Hard-Rock</button>
                        <button onClick={()=> {setNewData('Rock')}} >Rock</button>
                    </div>
                        <button onClick={ ()=> setnewItem(!newItem)} >New Item</button>
                  </div>
                  <div className="new-item" > { newItem ?  <NewItem callback={createItem}  />   : null}</div>
                <div> <List currData={currData}  /> </div>
                </div>
            );
        
        }
        else{
            return <Spinner />
        }
  
   
}