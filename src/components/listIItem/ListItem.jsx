import react  , { useState ,useEffect , useRef} from "react"




export const ListItem = (props) =>{

    const [edit , setEdit] = useState(false)
    const [item , setItem] = useState(props.data)

    const name  = useRef(item.name);
    const start  = useRef(item.start);
    const end= useRef(item.end);

useEffect(() => {

    setItem(props.data)

}, [props.data])


const setValues = (data) =>{
    setItem({name : name.current.value , start: start.current.value , end : end.current.value})
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
    return(
        <div>
            <div>
                <span>{item.id}</span>
                <input type="text"  onChange={()=>  {  if(isStringCheck(name.current.value))  setValues()   }}  value={item.name} ref={name}     readOnly={!edit}  />
                <input type="text"  onChange={()=> {  if(isNmberCheck(name.current.value))  setValues() }}  value={item.start} ref={start}   readOnly={!edit}   />
                <input type="text"  onChange={()=> {  if(isNmberCheck(name.current.value))  setValues() }}  value={item.end}  ref={end}      readOnly={!edit}  />

        
                <button onClick={()=> setEdit(!edit)} >edit</button>
                <button onClick={()=> props.callbacks.deleteItem(item.id)}  >delete</button>
                <button onClick={()=> props.callbacks.submitItem(item)}  >apllay</button>

            </div>
        </div>
    );
}