import React, { useEffect , useState } from 'react';
import axios from 'axios';
import style from './StyleComponent';


const Escalate = () => {
    const [divisions, setDivisions] = useState([]);

        useEffect(() => {
            axios
            .get('https://www.googleapis.com/civicinfo/v2/representatives/ocdId')
            .then(response => {
                console.log(response);
                
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })
    }, [])
 
    
    return (

        <style.section>
            <div className='card'>
            {/* {props.post.response_data 
            && props.post.response_data.map( (issue, key) => {

                return (
                    <div>
                    <IssuesCard key={key} issue={issue} />
                    </div>
                )
                })} */}
            </div>
            
        </style.section>
    )
}

export default Escalate