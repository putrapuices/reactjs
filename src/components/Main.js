import React, { Component } from "react";

const menuMakananinternalfile =[
  {
    nama:"Mie Ayam internal file",
    harga:10000
  },
  {
    nama:"Mie Ayam1 internal file",
    harga:20000
  },
  {
    nama:"Mie Ayam2 internal file",
    harga:30000
  }
];


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      menuMakanan: [
        {
          nama: "Mie Ayama",
          harga: 10000,
        },
        {
          nama: "Bakso",
          harga: 20000,
        },
        {
          nama: "Mie Ayama Bakso",
          harga: 10000,
        },
        {
          nama: "Soto",
          harga: 10000,
        },
      ],
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //   cara pertama
  //   rubahData() {
  //     this.setState({ title: "Pilih Makanan" });
  //   }
  //cara kedua ini lebih disarankan
  rubahData() {
    this.setState((state, props) => {
      //   return { title: "Pilih Menu Makanan", title2: "Pilih Menu Minuman" };
      return { title: state.title2, title2: state.title };
    });
  }
  // ditambah params value untuk menghadle dynami method dr form kota dan nama
  handleChange(value, e) {
    //penulisan dengan cara object setStatenya
    // this.setState({inputValue:e.target.value});
    this.setState({ [value]: e.target.value });
    console.log(e.target.value);
    //penulisan dengan errow function
    // const EventTarget = e.target.value;
    // this.setState((state, props) => {
    //   return {
    //     inputValue: EventTarget,
    //   };
    // });
  }
  render() {
    console.log(this.props.menuMakanan2);
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>

        <br />
        <br />
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        /> */}
        {/* agar method hanlde change dynamic maka dibuat seperti dibawah */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange("inputValue", e)}
          placeholder="nama"
        />

        <input
          type="text"
          value={this.state.inputKota}
          onChange={(e) => this.handleChange("inputKota", e)}
          placeholder="kota"
        />

        {this.state.menuMakanan.map((value, index) => {
          console.log(value);
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}

        {this.props.menuMakanan2.map((value, index) => {
          console.log(value);
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}

{menuMakananinternalfile.map((value, index) => {
          console.log(value);
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
