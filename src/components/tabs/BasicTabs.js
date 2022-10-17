import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Editor from '../Editor';
import useLocalStorage from '../../hooks/useLocalStorage';
import Navigator from '../Navigator/Navigator';
import { FlottedButton } from '../flottedButton/flottedButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SquareIcon from '@mui/icons-material/Square';
import { BottomDiv } from '../bottomDiv/bottomDiv';


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [showButton, setShowButton] = React.useState(true);
  const [buttonColor, setButtonColor] = React.useState('red');
  const [buttonTitle, setButtonTitle] = React.useState('Record');
  const [buttonIcon, setButtonIcon] = React.useState(<FiberManualRecordIcon/>);
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = React.useState("");
  const [video, setVideo] = React.useState([]);
  const [videoDuration, setVideoDuration] = React.useState(0);

  // time parametres

  const [isActive, setIsActive] = React.useState(false);
const [isPaused, setIsPaused] = React.useState(true);
const [time, setTime] = React.useState(0);

React.useEffect(() => {
	let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
}, [isActive, isPaused]);

const handleStart = () => {
	setIsActive(true);
	setIsPaused(false);
};

const handlePauseResume = () => {
	setIsPaused(!isPaused);
};

const handleReset = () => {
	setIsActive(false);
	setTime(0);
};

const handleStop = () =>{
  setIsActive(false);
  if(video[video.length-1]){

    setVideoDuration(video[video.length-1].time);
  }
}

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  const [value, setValue] = React.useState(0);
  const [x, setx] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<>

    <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color:"white" ,textTransform:"none"}} label="Index.html" {...a11yProps(0)} />
          <Tab style={{color:"white" ,textTransform:"none"}} label="Style.css" {...a11yProps(1)} />
          <Tab style={{color:"white" ,textTransform:"none"}} label="Script.js" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/* <StopWatch></StopWatch> */}
      <TabPanel value={value} index={0}>
      <Editor
      time={time}
      video={video}
      setVideo={setVideo}
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Editor
      time={time}
      video={video}
      setVideo={setVideo}
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Editor
      time={time}
      video={video}
      setVideo={setVideo}
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </TabPanel>
    </Box>
    <br/>
    <Navigator srcDoc={srcDoc}/>
    {showButton && <FlottedButton color={buttonColor} title={buttonTitle} icon={buttonIcon}  onClick={(e)=>{

      if(buttonTitle==='Record')
      {
        setButtonTitle('Stop');
        setButtonIcon(<SquareIcon/>);
        setButtonColor('black');
        // here to start counting
        handleStart();
        let initVideo=video;
        initVideo.push({
          fileName:'xml',
          value:html,
          time:0
        })
        initVideo.push({
          fileName:'css',
          value:css,
          time:0
        })
        initVideo.push({
          fileName:'javascript',
          value:js,
          time:0
        })

      }
      else if(buttonTitle==="Stop")
      {
        setShowButton(false);
        // save video
        handleStop();
      }


      }} />}
      {!showButton && <BottomDiv setHtml={setHtml} setCss={setCss} setJs={setJs} video={video} videoDuration={videoDuration}></BottomDiv>}
      
    </>
  );
}
