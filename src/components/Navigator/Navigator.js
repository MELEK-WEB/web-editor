import React from "react";
import { Rnd } from "react-rnd";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Paper from '@mui/material/Paper';
import { CircleButton } from "../circleButton/circleButton";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Navigator({ srcDoc }) {
  const style = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    border: "solid 1px #ddd",
    background: "white",
    position:'absolute',
    zIndex:3,
  };

  return (
    <div>
      <Rnd
        style={style}
        minHeight={220}
        minWidth={400}
        default={{
          x: 500,
          y: 0,
          width: 400,
          height: 200,
          
        }}
      >
        <div>
          <div className="Header">
            {/* <PrimarySearchAppBar/> */}
            <div style={{gap:"10px", backgroundColor: '#e6e6e6', height: 50, display: 'flex', alignItems: 'center', paddingLeft:10}}>



            <CircleButton color='#ff622e' borderColor="#e25324" />
            <CircleButton color='#ffa62e' borderColor="#e8982d"/>
            <CircleButton color="#55cc43" borderColor="#57b949"/>
            <ArrowBackIcon style={{color:'grey'}}/>
            <ArrowForwardIcon style={{color:'grey'}}/>
            <RefreshIcon style={{color:'grey'}}/>
            <input style={{backgroundColor:'#fafafa',border:'none',borderRadius:10,paddingLeft:10}} placeholder="Recherche.." />


            </div>
          </div>
          <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        </div>

      </Rnd>

    </div>
  );
}


