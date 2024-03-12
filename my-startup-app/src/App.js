import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SideMenu from './component/Sidemenu';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideMenu/>
      </div>
      <div className="content">
        {/* 右侧内容页面组件 */}
      </div>
    </div>
  );
}

export default App;