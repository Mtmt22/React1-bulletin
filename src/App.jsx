import './App.css'
import Header from './Header'
import { useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([]); //データを保存するstate

  useEffect(() => {
    //データを取得する
    fetch("https://railway.bulletinboard.techtrain.dev/threads") //APIのURL
    .then(response => response.json()) //json形式で取得
    .then(data => setData(data)) //取得したデータをstateに保存
    .catch(error => console.error("エラーが発生しました",error)); //エラーが発生した場合
  }, []); //初回のみ実行

  return (
    <>
      <Header />
      <h1 className='shinchaku'>新着スレッド</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
          ))}
      </ul>
    </>
  )
}

export default App
