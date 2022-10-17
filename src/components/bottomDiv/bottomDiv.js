import { IconButton, Slider } from '@mui/material'
import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export const BottomDiv = ({videoDuration,setHtml,setCss,setJs,video}) => {

  const getLastChanges = (time,video) =>{
    if(!video)
      return null
    else
    {let result=video[1];
      for (let i=0;i<video.length-1;i++){
        if(time<video[i].time)
          {break;}
          else
          {
            result=video[i];
          }
      }
      return result
    }

  }

  const [playPauseCurrentIcon, setPlayPauseCurrentIcon] = useState(<PlayArrowIcon/>);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  React.useEffect(() => {
    let interval=null
    if(isPlaying){
      interval = setInterval(() => {
        setTime((time) => time+0.1);
      },  videoDuration/1000);
      let result=getLastChanges(time,video);
      console.log(result);
      if(result){
        switch (result.fileName) {
          case "xml":
            
            setHtml(result.value);
            break;
            case "css":
              setCss(result.value);
              break;
              case "js":
                setJs(result.value);
              break;
        
          default:
            break;
        }
      }


        


    }
    else{
      setTime(time);
      clearInterval(interval);
      
    }

    
    
  
    
  }, [isPlaying])
  
  return (
    <div style={{gap:15,position:'fixed',bottom:0,width:"97%",padding:10,display:'flex',alignItems:'center'}}>
<IconButton color="primary" aria-label="upload picture" component="label" onClick={()=>{
if(isPlaying)
{
  // pausi el video
  setPlayPauseCurrentIcon(<PlayArrowIcon/>);
  
}
else{
  setPlayPauseCurrentIcon(<PauseIcon/>);
}
setIsPlaying(!isPlaying);
}}>
  {playPauseCurrentIcon}
</IconButton>
<Slider
  size="small"
  defaultValue={0}
  aria-label="Small"
  value={time}
  // valueLabelDisplay="auto"
/>
    </div>
  )
}
