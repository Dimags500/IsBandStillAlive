import react  , { useState ,useEffect } from "react"
import { List } from "../../components/liist/List";




export const Admin = () =>{


    return(
        <div>
            <div>
                <button>Heavy-Metal</button>
                <button>Rock</button>
            </div>

            <div>
                <List/>
            </div>

        </div>
    );
}