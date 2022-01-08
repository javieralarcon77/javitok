import { Heart } from '../icons/Heart.jsx'
import { Comment } from '../icons/Comment.jsx'
import { Share } from '../icons/Share.jsx'

import styles from './styles.module.css'

export default function VideoPlayerActions ({ likes = 2041, comments = 333, shares = 12, hearted = false }) {
  const handleLike = () => {
    console.log('like')
  }
  const handleComment = () => {
    console.log('comment')
  }
  const handleShare = () => {
    console.log('share')
  }

  return (
    <aside className={styles.actions}>
      <button className={styles.action} onClick={handleLike}>
        <Heart width='45' />
        <span title='like'>{likes}</span>
      </button>
      <button className={styles.action} onClick={handleComment}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>
      <button className={styles.action} onClick={handleShare}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}
