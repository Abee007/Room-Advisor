import React, {useState} from 'react'
import Tabs from 'react-bootstrap/Tabs'
import './TabBar.css'
import Tab from 'react-bootstrap/Tabs'
import ScrollContainer from './ViewReviews/ScrollContainer'
import Sonnet from 'react-bootstrap/Tabs'


function TabBar() {
    const [key, setKey] = useState('Recommend?');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-2"
      >
        <Tab eventKey="Recommend?" title="Recommend?">
        <ScrollContainer/>
        </Tab>

        <Tab eventKey="Strengths/Weaknesses" title="Strengths/Weaknesses">
        <ScrollContainer/>
        </Tab>
        
      </Tabs>
    );
  }
  
export default TabBar;