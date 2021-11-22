import React,{Component} from "react";

class Header extends Component{
  constructor(props){
    super(props);
    this.state ={
      daftar : "Daftar Makanan Nusantara",
      datalist: this.props.list,
      statusRendering: true,
    };
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(value,e){
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  componentDidMount(){
    console.log("Jalana Componentn Did Mount");
  }

    render(){
      console.log("Jalana : Render ya...");
      return(
        <>
        <div>
        {this.state.statusRendering === true ?(
          <>
          <h1>Selamat Datang</h1>
          <h1>Silahkan Pilih Menu Makanan</h1>
          </>
        ):(
          <h1>Selamat Tinggal</h1>
          
        )}
      </div>
        <div>
          <h2>Makanan Khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.props.list}= dipanngil langsung dengan  props langsung</p>
          <p>{this.state.datalist} = dipanngil langsung dengan state</p>
          <a href="/" onClick={this.handlePesan}>Halaman ini Header</a>
          <br/>
          {/* // untuk parameter e bisa ditukar jd event */}
          <a href="/" onClick={(e)=>this.handlePesan("Pesan ini dari Header ya",e)}>Halaman ini Header 2</a>

        </div>
        </>
      )
    }
  }
  export default Header;
  