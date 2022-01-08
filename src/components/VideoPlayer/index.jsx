import clsx from 'clsx'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'

export default function VideoPlayer ({ src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    const { current } = video
    playing
      ? current.pause()
      : current.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        src={src}
        ref={video}
      />
      <i className={playerClassName} />
      <VideoPlayerActions />
    </div>
  )
}
