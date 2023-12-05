import {Post} from "./Post";
import { Header } from "./components/Header";

import './global.css';

export function App() {
   return (
     <div>
      <Header />

      <Post 
        author="Jheison Rocha" 
        content="Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:Exemplo 1:" 
      />
      <Post
        author="J.Rocha"
        content="Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:Exemplo 2:"
      />
      <Post
        author="Rocha J."
        content="Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:Exemplo 3:"
      />
     
   </div>
   
  )
}


