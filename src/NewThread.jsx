import './App.css'
import Header from './Header'
import { useState } from 'react'

function NewThread() {
  const [title, setTitle] = useState(""); //スレッドのタイトルを保存する

  const NewCreate = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      // HTTP リクエストメソッド
      headers: {
        "Content-Type": "application/json",
      },// JSONファイルだよ
      body: JSON.stringify({ title })
    })
  }


return (
  <div>
    <Header />
    <h1 className='shinki'>スレッド新規作成</h1>
    <input type='text' value={title}
    onChange={(e) => setTitle(e.target.value)}>
    </input>
    <button onClick={NewCreate}>スレッドを作成</button>
  </div>
)
}

export default NewThread
