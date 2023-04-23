import {Component} from 'react'
import './index.css'

class Btn extends Component {
  render() {
    const {each, changeUi} = this.props
    const {name, imageUrl} = each

    const onBtnClick = () => {
      changeUi()
    }
    return (
      <li className="btn" onClick={onBtnClick}>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default Btn
