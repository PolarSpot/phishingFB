import './global.css';
import style from './App.module.css';
import { Header } from './components/Header/Header';

export function App() {

  return (
      <div className={style.contactList}>
        <Header/>
      </div>

  )
}
