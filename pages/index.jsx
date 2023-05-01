import { useState } from "react"
import styles from '@/styles/Home.module.css'


const Home = () => {
  const [names, setNames] = useState([]);
  const [tmpName, setTmpName] = useState("");

  const addName = () => {
    if (tmpName == "") {
      alert("文字を入力してください");
      return;
    }
    setNames([...names, tmpName]);
    setTmpName("");
  };

  const deleteName = index => {
    const newNames = names.filter((name, i) => {
      return index !== i;
    });
    setNames(newNames);
  };

  return( 
      <>
      <h1>Waiting Board</h1>
      <div className="form">
        <input 
          type="text"
          name="name"
          onChange={e => setTmpName(e.target.value)}
          value={tmpName} />
          <button onClick={addName}>送信</button>
      </div>
      <ul>
        <br />
        <div>順番待ち</div>
        {names.map((name, index) => {
          return (
            <li key={index}>
              {name}
              <button onClick={() => deleteName(index)}>削除</button>
            </li>
          );
        })}
      </ul>
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        ul {
          width: 200px;
          margin: 10px auto;
        }
      `}</style>
      </>
  )
}


export default Home
