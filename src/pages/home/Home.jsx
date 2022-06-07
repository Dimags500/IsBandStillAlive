
import TimeLine from '../../components/timeline/TimeLine' ;
import { getData , postData } from "../../services/api/requests";
import  { useState ,useEffect } from "react"
import Spinner from '../../components/spinner/Spinner';


export const Home = () =>{

    const [data , setData] = useState([]) ;
    const [loading , setLoading] = useState(true)


        useEffect(() => {
            const fetchData = async () => {
                const result = await await getData()
                setData(result.data);
              };
          
              fetchData();
              setLoading(false);

        },[])


    if(loading)
        return <Spinner/>
    
    else {
        return (
            <div>
                 <TimeLine data={data} />
            </div>
        );
    }


}