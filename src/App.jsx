import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';

import { Post } from './Post';

import { SideBar } from './components/Sidebar';

export function App() {
  return (
    <div>      
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Lucas Luann"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor officiis alias ab labore facilis animi nostrum culpa, modi, eum est illum repellendus esse reprehenderit. Labore ipsam ad magnam amet."
          />
          <Post
            author="Giovanna Ágatha"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor officiis alias ab labore facilis animi nostrum culpa, modi, eum est illum repellendus esse reprehenderit. Labore ipsam ad magnam amet."
          />
        </main>
      </div>
    </div>
  );
}
