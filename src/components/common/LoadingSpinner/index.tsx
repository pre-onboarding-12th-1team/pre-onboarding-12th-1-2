import styles from './spinner.module.css'

const SpinnerBubble = () => (
  <div className={styles.outerContainer}>
    <div className={styles.innerContainer}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
)

export default SpinnerBubble
