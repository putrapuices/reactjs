import React, { Component } from "react";
import Header from "./Header"
import Footer from "./Footer";
import List from "./List";
import Top from "./Top";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//kita pindahkan component header ke header.js
// class Header extends Component{
//   render(){
//     return(
//       <div>
//         <h2>Makanan Khas Indonesia</h2>
//       </div>
//     )
//   }
// }
// pindahkan function component ke file Footer.js
// const Footer =()=>{
//   return(
//     <div>
//       <h4>Halaman Footer</h4>
//       <p>2018</p>
//     </div>
//   );
// };

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 terbaik"/>
        <Top/>
        <List/>
        <Footer name="Masakan Nusantara" tahun="1992"/>
      </div>
    );
  }
}

export default App;
