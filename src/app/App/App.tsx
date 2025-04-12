import { InputForm } from '../../components/InputForm'
import { ProgressBar } from '../../components/ProgressBar'
import style from './App.module.scss'

export function App() {
  return (
    <div className={style.app}>
      <div className={style.item}>
        <InputForm value="10000" />
        <ProgressBar progressValue={37} sx={{ marginTop: '8px' }} />
      </div>
      <div className={style.item}>
        <InputForm value="100" valuta="USDT" />
        <ProgressBar progressValue={25} sx={{ marginTop: '8px' }} />
      </div>
    </div>
  )
}
