import React, { useState } from 'react'
import LoadingBar from 'top-loading-bar/dist'
import styles from '../styles/Home.module.css'
const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <div className={styles.ref}>
      <LoadingBar
        color='#fff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h1>
        Using state
      </h1>
      <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 60)}>Add 70%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 90%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <br />
    </div>
  )
}

export default App