import React from "react";

const Footer =(props)=>{
    return(
      <div>
        <h4>Halaman Footer {props.name}</h4>
        <p>{props.tahun}</p>
      </div>
    );
  };

// membuat function component
// function Footer() {
//   var name = "rahmat putra"
//   return(
//     <div>
//       <h4>Halaman Footer {name}</h4>
//       <p>2018</p>
//     </div>
//   );
// };

  export default Footer;