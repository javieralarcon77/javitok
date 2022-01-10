import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
import { VIDEOS } from '../../constants/videos'

export default function FeedVideos () {
  return (
    <section className={styles.feed}>
      {
            VIDEOS.map(video => (
              <div className={styles.item} key={video.id}>
                <VideoPlayer {...video} />
              </div>
            ))
        }
    </section>
  )
}
