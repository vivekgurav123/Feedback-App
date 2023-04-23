// Write your React code here.
import {Component} from 'react'
import Btn from '../Btn'
import './index.css'

class Feedback extends Component {
  render() {
    const {resources, loveEmojiUrl} = this.props
    const {emojis} = resources

    const changeUi = () => {
      const data = document.getElementById('data')
      while (data.hasChildNodes()) {
        data.removeChild(data.firstChild)
      }
      const imgElem = document.createElement('img')
      imgElem.src = loveEmojiUrl
      imgElem.alt = 'love emoji'
      data.appendChild(imgElem)

      const headingElem = document.createElement('h1')
      headingElem.textContent = 'Thank You'
      headingElem.classList.add('heading')
      data.appendChild(headingElem)

      const pElem = document.createElement('p')
      pElem.textContent = 'We will user your feed back for improvement'
      pElem.classList.add('para')
      data.appendChild(pElem)
    }
    return (
      <div id="cont" className="container">
        <div id="data" className="content">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="feedback">
            {emojis.map(each => (
              <Btn each={each} key={each.id} changeUi={changeUi} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Feedback
