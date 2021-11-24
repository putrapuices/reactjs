import React, { Component } from "react";

// penulisan css secara internal
const judul = {
  color: "orange",
  backgroundColor: "blue",
  marginTop: "4px",
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      datalist: this.props.list,
      statusRendering: true,
      date: new Date(),
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  componentDidMount() {
    console.log("Jalana Componentn Did Mount");
  }

  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering };
    });
  }

  render() {
    console.log("Jalana : Render ya...");
    console.log(this.state.statusRendering);
    return (
      <>
        <div>
          {this.state.statusRendering === true ? (
            <>
              {/* pembuatan css secara inline */}
              <h1
                style={{
                  color: "green",
                  backgroundColor: "orange",
                  marginTop: "2px",
                }}
              >
                Selamat Datang
              </h1>
              <h1 style={judul}>Silahkan Pilih Menu Makanan</h1>
            </>
          ) : (
            <>
              <h1>Selamat Tinggal</h1>
              <h1>Jangan Lupa Datang Kembali</h1>
            </>
          )}
          <button onClick={this.handleElement}>CHANGE</button>
        </div>
        <div>
          <h2>Makanan Khas Indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.props.list}= dipanngil langsung dengan props langsung</p>
          <p>{this.state.datalist} = dipanngil langsung dengan state</p>
          <a href="/" onClick={this.handlePesan}>
            Halaman ini Header
          </a>
          <br />
          {/* // untuk parameter e bisa ditukar jd event */}
          <a
            href="/"
            onClick={(e) => this.handlePesan("Pesan ini dari Header ya", e)}
          >
            Halaman ini Header 2
          </a>
        </div>
      </>
    );
  }
}
export default Header;
