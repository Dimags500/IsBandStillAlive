import react  , { useState ,useEffect , useRef} from "react"
import {getYearsByName1 ,getYearsByName2} from '../../services/api//requests' 
import'./newitem.css'


export const NewItem = (props) =>{

    const initState =  {name: '' , years : []}
    const [item , setItem] = useState(initState)

    const name  = useRef(item.name);
    const start  = useRef(item.start);
    const end= useRef(item.end);
    const activeYears = useRef('text');




const setValues = () =>{

    setItem({ name : name.current.value , years :[ start.current.value ,end.current.value ]})

}

function isNmberCheck (input){


    // if(input.match(/[0-9]/g) ){
    //     console.log(input);
    // }

    return true
}

function isStringCheck (input){


    // if(input.match(/[a-z][A-Z]/g) ){
    //     console.log(input);
    // }

    return true
}

const getYears = async (source)=> {
    if(source === 1){
        activeYears.current.value = await getYearsByName1(item.name)
    }
    if(source === 2){
        activeYears.current.value = await getYearsByName2(item.name)

    }
}
    return(
        <div className="new-item">
            <div>
                <input type="text" placeholder="name"  onChange={()=>  {  if(isStringCheck(name.current.value))  setValues()   }}  value={item.name} ref={name}  />
                <input type="text" placeholder="start year" onChange={()=> {  if(isNmberCheck(name.current.value))  setValues() }}  value={item.start} ref={start}     />
                <input type="text" placeholder="end year" onChange={()=> {  if(isNmberCheck(name.current.value))  setValues() }}  value={item.end}  ref={end}        />
                <button onClick={()=> props.callback(item)}  >submit</button>


         

            </div>

            <div className="get-years">
                            <textarea ref={activeYears} name="" id="" >{activeYears.current.value}</textarea>
            <button  onClick={ () => {getYears(1)}}> metal-archives </button>
            <button  onClick={ () => {getYears(2)}}> last.fm </button>
            </div>



          
        </div>
    );
}