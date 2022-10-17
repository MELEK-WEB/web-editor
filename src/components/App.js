import React, { useEffect, useState } from "react";
import ButtonAppBar from "./navbar/Navbar";
import BasicTabs from "./tabs/BasicTabs";
function App() {
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <BasicTabs srcDoc={srcDoc} />
    </>
  );
}

export default App;
