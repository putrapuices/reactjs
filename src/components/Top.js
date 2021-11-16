import React from "react";

const Top = () => {
  const handlePesan2 = (value) => {
    alert("Halaman Top Tampil2");
    alert(value)
  };
  function handlePesan() {
    alert("Halaman Top Tampil");
  }

  return (
      <>
    <a href="/" onClick={handlePesan}>
      Halaman Top
    </a>
    <br/>
    <a href="/" onClick={()=>handlePesan2("Pesan Dari TOp")}>
    Halaman Top2
  </a>
  </>
  );
};
export default Top;
