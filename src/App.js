import React, { Component, Suspense } from 'react';
import './App.css';
import TopNavHeader from './components/TopNavHeader';
import BasicList from './components/BasicList';
import IntroduceRow from './components/IntroduceRow';
import OfflineData from './components/OfflineData';
import { FirebaseContext } from './components/Firebase';
class App extends Component {
  
  render() {
    return (
      <div>
        <TopNavHeader />
        <FirebaseContext.Consumer>
          {firebase => <BasicList firebase={firebase} />}
        </FirebaseContext.Consumer>
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
