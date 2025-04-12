import style from './ProgressBar.module.scss'

type PropsType = {
  progressValue: number
  sx?: object
}

export function ProgressBar({ progressValue, sx }: PropsType) {
  const progressStyle_25 = {
    ['--progress']: '0',
  }
  const progressStyle_50 = {
    ['--progress']: '0',
  }
  const progressStyle_75 = {
    ['--progress']: '0',
  }
  const progressStyle_100 = {
    ['--progress']: '0',
  }

  if (progressValue <= 25) {
    progressStyle_25['--progress'] = (100 * progressValue) / 25 + '%'
  } else if (progressValue > 25 && progressValue <= 50) {
    progressStyle_25['--progress'] = 100 + '%'
    progressStyle_50['--progress'] = (100 * (progressValue - 25)) / 25 + '%'
  } else if (progressValue > 50 && progressValue <= 75) {
    progressStyle_25['--progress'] = 100 + '%'
    progressStyle_50['--progress'] = 100 + '%'
    progressStyle_75['--progress'] = (100 * (progressValue - 50)) / 25 + '%'
  } else if (progressValue > 75 && progressValue <= 100) {
    progressStyle_25['--progress'] = 100 + '%'
    progressStyle_50['--progress'] = 100 + '%'
    progressStyle_75['--progress'] = 100 + '%'
    progressStyle_100['--progress'] = (100 * (progressValue - 75)) / 25 + '%'
  } else {
    progressStyle_25['--progress'] = 100 + '%'
    progressStyle_50['--progress'] = 100 + '%'
    progressStyle_75['--progress'] = 100 + '%'
    progressStyle_100['--progress'] = 100 + '%'
  }

  return (
    <div className={style.wrapper} style={{ ...sx }}>
      <div className={style.progress} style={progressStyle_25 as React.CSSProperties}>
        <span data-text="25%">25%</span>
      </div>
      <div className={style.progress} style={progressStyle_50 as React.CSSProperties}>
        <span data-text="50%">50%</span>
      </div>
      <div className={style.progress} style={progressStyle_75 as React.CSSProperties}>
        <span data-text="75%">75%</span>
      </div>
      <div className={style.progress} style={progressStyle_100 as React.CSSProperties}>
        <span data-text="100%">100%</span>
      </div>
    </div>
  )
}
