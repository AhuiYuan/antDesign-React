import React from 'react';
import Home from './views/Home'
import Header from "./components/Header";
interface headNavList {
    headNav:[];
    image: string;
    id: number;
}

const App: React.FC = () => {
   return <div>
       <Header/>
       <Home/>
   </div>
}
export default App;