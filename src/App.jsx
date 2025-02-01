import './App.css'
// import Header from './Header'
// import { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewThread from './NewThread';
import Threads from './Threads';

function App() {
  // const [data, setData] = useState([]); //データを保存するstate

  // useEffect(() => {
  //   //データを取得する
  //   fetch("https://railway.bulletinboard.techtrain.dev/threads") //APIのURL
  //   .then(response => response.json()) //json形式で取得
  //   .then(data => setData(data)) //取得したデータをstateに保存
  //   .catch(error => console.error("エラーが発生しました",error)); //エラーが発生した場合
  // }, []); //初回のみ実行

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Threads />} />
        <Route path="/threads" element={<Threads />} />
        <Route path="/threads/new" element={<NewThread />} />
      </Routes>
    </BrowserRouter>
  )


//   return (
//     <>
//       <Header />
//       <h1 className='shinchaku'>新着スレッド</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item.title}</li>
//           ))}
//       </ul>
//     </>
//   )
// }

// function Threads() {
//   const [data, setData] = useState([]); //データを保存するstate

//   useEffect(() => {
//     //データを取得する
//     fetch("https://railway.bulletinboard.techtrain.dev/threads") //APIのURL
//     .then(response => response.json()) //json形式で取得
//     .then(data => setData(data)) //取得したデータをstateに保存
//     .catch(error => console.error("エラーが発生しました",error)); //エラーが発生した場合
//   }, []); //初回のみ実行

//   return (
//     <div>
//       <Header />
//       <h1 className='shinchaku'>新着スレッド</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item.title}</li>
//           ))}
//       </ul>
//       <Link to="/threads/new">
//           <button>スレッド新規作成</button>
//       </Link>
//     </div>
//   )
}




export default App
