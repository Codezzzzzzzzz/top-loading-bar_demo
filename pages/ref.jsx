import React, { useRef } from 'react'
import LoadingBar from 'top-loading-bar/dist'
import styles from '../styles/Home.module.css'
const op = () => {
  const ref = useRef(null)

  return (
     
    <div className={styles.ref}>
     
     
      <LoadingBar color='blueviolet' ref={ref} />
     <h1>Using ref</h1>
      <button onClick={() => ref.current.continuousStart()}>
        Start Continuous Loading Bar
      </button>
      <button onClick={() => ref.current.staticStart()}>
        Start Static Loading Bar
      </button>
      <button onClick={() => ref.current.complete()}>Complete</button>
      <br />
    </div>
  )
}

export default op