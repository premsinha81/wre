import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
   <div class="tabSystems">
       <div class="container">
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >  
   
       <div class="row">
          <div class="col-lg-4">
  
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
       
      >
          <div class="leftSideBtn">
           <div class="plusCercle">+</div>
        <Tab label="How We Rank Trade Institutes and Colleges in the U.S." {...a11yProps(0)} />
      
   
   
        </div>
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      </div>
      <div class="col-lg-8">
      <TabPanel class="tabPanel" value={value} index={0}>

                  <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
      </TabPanel>
     
      <TabPanel  class="tabPanel" value={value} index={1}>
  
                  <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
      </TabPanel>
     
      <TabPanel  class="tabPanel" value={value} index={2}>
      
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
      </TabPanel>
      <TabPanel  class="tabPanel" value={value} index={3}>
     
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               
      </TabPanel>
      <TabPanel  class="tabPanel" value={value} index={4}>

                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             
      </TabPanel>
      <TabPanel  class="tabPanel" value={value} index={5}>
    
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             
      </TabPanel>
      <TabPanel  class="tabPanel" value={value} index={6}>

                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                     industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                     and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                     the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                     desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
      </TabPanel>
      </div>
      </div>
   
   
    </Box>
    </div>
       </div>
  );
}
