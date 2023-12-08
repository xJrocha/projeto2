import { Post } from  "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
   return (
     <div>
      <Header />

     <div className={styles.wrapper}>
     <Sidebar />
     <main>

        <Post
          author="Jheison Rocha"
          content="Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:"
        />

        <Post
          author="J.rocha"
          content="Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:"
        />
        <Post
          author="Rocha J."
          content="Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:"
       />

        </main>
      </div>
    </div>
   
  )
}


