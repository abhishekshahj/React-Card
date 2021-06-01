import React from 'react';
import Card from './component/Card';
import './index.css';
import Sdata from './Sdata';

// Map Method(Loop) Starts

// const App = () => {
//    return (
//         <>      
//         {Sdata.map((val) => {
//             return(
//                 <Card 
//                     key = {val.id}
//                     firstname = {val.firstname}
//                     lastname = {val.lastname}
//                     designation = {val.designation}
//                     content = {val.content}
//                     links = {val.links} />
            
//                         )
//                     }
//                 )
//             }
//         </>
//    )}

// Map Method(Loop) Ends

// By Props

const App = () => {
    return (
        <>
        <Card 
            firstname = "Abhishek"
            lastname = "Shah"
            designation = "Web Developer"
            content = "Lorem Ipsum Dolor Sit Amet"
            links = "https://www.facebook.com/abhishekshahj" />
        </>
    )
}

// By Props

export default App;