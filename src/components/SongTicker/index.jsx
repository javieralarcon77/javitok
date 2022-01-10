import styles from './styles.module.css'
import MusicIcon from '../Icons/MusicIcon'
import Marquee from 'react-fast-marquee'

export default function SongTicker ({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee gradient={false} speed={80}>
        {songTitle}
      </Marquee>
    </div>
  )
}
