import React,{Component} from "react";

class Header extends Component{
  constructor(props){
    super(props);
    this.state ={
      daftar : "Daftar Makanan Nusantara",
      datalist: this.props.list
    };
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(){
    alert(this.state.daftar);
  }
    render(){
      return(
        <div>
          <h2>Makanan Khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.props.list}= dipanngil langsung dengan  props langsung</p>
          <p>{this.state.datalist} = dipanngil langsung dengan state</p>
          <a href="/" onClick={this.handlePesan}>Halaman ini Header</a>
        </div>
      )
    }
  }
  export default Header;
  