import React from "react";


// const Heading = ({ name, school, city }) => {
//     return (
//       <h1>{` HELLO ${name} ${school} ${city}
//        `}</h1>
//     );
//   };

const Heading = (props) => {

    let currentName=props.name;
    return <h1>Hello {currentName}</h1>

}
 
  export default Heading;
  