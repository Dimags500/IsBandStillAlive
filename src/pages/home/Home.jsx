
import TimeLine from '../../components/timeline/TimeLine' ;
import React from 'react';
import  { useState ,useEffect } from "react"
import Spinner from '../../components/spinner/Spinner';

import { StartFirebase } from "../../config/firebase";
import { ref, onValue } from "firebase/database";
import {getCategoryByName} from '../../services/firebase'


const db = StartFirebase();



export class Home extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading : false
      };
    }
  




     componentDidMount() {
        // const dbref = ref(db, "/Music/Heavy-Metal");
    
        // onValue(dbref, (snapshot) => {
        //   let records = [];
        //   console.log(snapshot);
        //   snapshot.forEach((item) => {
        //     // let key = item.key;
        //     let data = item.val();
        //     records.push({ data: data });
        //   });
        //   this.setState({ data: records , loading : false });
        // });


        this.loadData('Heavy-Metal') ;

      }
    
     async structureData(dataFromDb){

        let data = dataFromDb.data.sort((a,b) => a.data.id -b.data.id)
        let newArr =  [] ;
        data.forEach(item => {
         let temp = item.data ;
           if( parseInt(temp.years[0]) >= parseInt(temp.years[1]) ){
             temp.years = ["0" ,"0"]
           }
          newArr.push ([temp.name ,new Date(parseInt(temp.years[0]) , 0 , 0) , new Date(parseInt(temp.years[1]) , 0 , 0)] );
     
        })
        return newArr
      }

    async loadData(category) {
      this.setState({ loading : true });

      const data = await getCategoryByName(category) ;
      const sorted = data.sort((a,b) => a.data.id -b.data.id) ;
      // const structured = await this.structureData(data);
      this.setState({ data : sorted, loading : false });

    }

 
        

render(){

    if(this.state.loading)
    return <Spinner/>

    return (
        <div>
            <div  className='btns'>
                        <button onClick={()=> { this.loadData('Heavy-Metal')}} >Heavy-Metal</button>
                        <button onClick={()=> {this.loadData('Hard-Rock')}} >Hard-Rock</button>
                        <button onClick={()=> { this.loadData('Rock')}} >Rock</button>
                    </div>
             <TimeLine data={this.state.data} />
        </div>
    );
}
}

   


