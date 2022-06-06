import react  , { useState ,useEffect , useRef} from "react"


export const NewItem = (props) =>{

    const initState =  {name: '' , years : []}
    const [item , setItem] = useState(initState)

    const name  = useRef(item.name);
    const start  = useRef(item.start);
    const end= useRef(item.end);



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
    return(
        <div>
            <div>
                <input type="text" placeholder="name"  onChange={()=>  {  if(isStringCheck(name.current.value))  setValues()   }}  value={item.name} ref={name}  />
                <input type="text" placeholder="start year" onChange={()=> {  if(isNmberCheck(name.current.value))  setValues() }}  value={item.start} ref={start}     />
                <input type="text" placeholder="end year" onChange={()=> {  if(isNmberCheck(name.current.value))  setValues() }}  value={item.end}  ref={end}        />
                <button onClick={()=> props.callback(item)}  >submit</button>

            </div>
        </div>
    );
}