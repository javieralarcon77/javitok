import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker'
import styles from './styles.module.css'

export default function VideoDescription ({ author, description, albumCover, songTitle }) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${author}`}>
              @{author}
            </a>
          </strong>
          <p className={styles.text}>{description}</p>
        </section>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  )
}
