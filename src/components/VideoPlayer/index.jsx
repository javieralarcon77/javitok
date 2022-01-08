import { useRef, useState } from 'react'
import styles from './styles.module.css'
const SRC = 'https://v16-webapp.tiktok.com/2ff39c89697289016519a4df0ab0cef3/61da2281/video/tos/useast2a/tos-useast2a-pve-0068/98c9878e94444351bfa7bc91d583e63a/?a=1988&br=2918&bt=1459&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=2022010817460701022312107909CC28AD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amxtO2Q6ZmU7ODMzNzczM0ApZTllZWY8OmRmN2k8aDozZmdiY21zcjRfaG5gLS1kMTZzczIwLjJiLzFiM15fLjQyLTI6Yw%3D%3D&vl=&vr='

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef()
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className={styles.wrapper}>

      <video
        ref={video}
        className={styles.video}
        src={SRC}
        controls={false}
      />
      <button className={styles.player} onClick={handlePlay} />
    </div>
  )
}
