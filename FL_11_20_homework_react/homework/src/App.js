import React from 'react';
import AddItem from './dashboard/item.component';
import styles from './App.module.scss';
import NewsBar from './newsbar/newsbar.component';

function App() {
  return (
    
    <div className={styles.App}>
      <NewsBar />
      <AddItem className={styles.Item} />
    </div>
  );
}

export default App;
