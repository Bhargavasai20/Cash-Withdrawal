// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, cashBtn} = props
  const {value} = cash
  const onClickCash = () => cashBtn(value)
  return (
    <li className="cash-item">
      <button className="btn" onClick={onClickCash} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
