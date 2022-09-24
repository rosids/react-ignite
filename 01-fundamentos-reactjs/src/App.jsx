import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rosiele David"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ex, recusandae obcaecati magnam molestiae reiciendis ut neque dolorum, voluptates maiores laboriosam maxime explicabo veritatis architecto natus. Quis veniam animi hic?"
          />
          <Post
            author="Diego Fernandes"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
