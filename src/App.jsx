import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
