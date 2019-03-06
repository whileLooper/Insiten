import React, { Component, Suspense } from 'react';
import './App.css';
import TopNavHeader from './components/TopNavHeader';
import BasicList from './components/BasicList';
import IntroduceRow from './components/IntroduceRow';
import OfflineData from './components/OfflineData';

class App extends Component {
  
  render() {
    return (
      <div>
        <TopNavHeader />
        <BasicList />
        <Suspense>
          <IntroduceRow />
        </Suspense>
        <Suspense>
          <OfflineData />
        </Suspense>
      </div>
    );
  }
}

export default App;
