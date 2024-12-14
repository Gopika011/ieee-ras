import styles from './style.module.scss';

const index = () => {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`

    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
    
  return (
    <svg className='styles.svgCurve'>
        <path></path>
    </svg>
  )
}

export default index