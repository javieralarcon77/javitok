import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'kevinpalmeraandrade',
    description: '#humor #fyp #parati #ajajaja #viral #risa',
    src: 'https://v16-webapp.tiktok.com/59318bc7da3b4ac7f84e88c59c047982/61da23e3/video/tos/useast5/tos-useast5-ve-0068c001-tx/0077cb590cf74dac8faafac704052c9a/?a=1988&br=1892&bt=946&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=2022010817524001018907422527D0A1A8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZ4dGc6ZmZ5OTMzZzczNEApZjRkZzxlOTw1N2Q4ODU2aWdgaGc2cjRfbXBgLS1kMS9zcy0wNDYtMTEuLi8xY2AyMDU6Yw%3D%3D&vl=&vr=',
    likes: 21,
    commeents: 333,
    shares: 23,
    songTitle: 'sonido original - Kevin Palmera Andrad',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4e53b3121c80bb9ce05ad0f6c3cec327~c5_720x720.jpeg?x-expires=1641747600&x-signature=D1DF0iUfQvZGycCscfohSzGAAdo%3D'
  },
  {
    id: 2,
    author: 'marcosjcj7',
    description: 'Guerraaa de stickers 🔥 #parati #foryou',
    src: 'https://v16-webapp.tiktok.com/e287731b348f118a2daa77f7e49313ff/61da2412/video/tos/useast2a/tos-useast2a-ve-0068c003/42001a8051244c1a81bb2599cd4736b0/?a=1988&br=1080&bt=540&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FFkkag3-I&l=2022010817524001018907422527D0A1A8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZ4ZGg6ZjN5OTMzNzczM0ApPDU7NzM0OTw8NzxmN2lpPGc0LWJocjRfXm9gLS1kMTZzczBgLTUxYy00LjMuY2MuLS06Yw%3D%3D&vl=&vr=',
    likes: 1.6,
    commeents: 16.5,
    shares: 99.7,
    songTitle: 'Vale la Pena - Live - Juan Luis Guerra 4.40',
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/cdd823001b584eb5a20c5297a0b144a3~c5_200x200.jpeg'
  }
]

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
