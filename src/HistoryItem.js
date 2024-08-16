import {Component} from 'react'
import EachItem from './EachItem'
import './HistoryItem.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryItem extends Component {
  state = {historyDetails: initialHistoryList, inputText: ''}

  onChangeInputField = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  getFilteredHistoryDetails = () => {
    const {historyDetails, inputText} = this.state
    const filteredHistoryDetails = historyDetails.filter(eachHistory =>
      eachHistory.title
        .toLocaleLowerCase()
        .includes(inputText.toLocaleLowerCase()),
    )
    return filteredHistoryDetails
  }

  deleteAHistoryItem = id => {
    const {historyDetails} = this.state
    const filteredHistoryDetails = historyDetails.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({
      historyDetails: filteredHistoryDetails,
    })
  }

  renderHistoryViewOrNoHistoryView = () => {
    const filteredHistoryDetails = this.getFilteredHistoryDetails()
    if (filteredHistoryDetails.length === 0) {
      return <p className="noHistory">There is no history to show</p>
    }
    return (
      <ul className="history-container">
        {filteredHistoryDetails.map(eachHistory => (
          <EachItem
            historyDetails={eachHistory}
            key={eachHistory.id}
            deleteAHistoryItem={this.deleteAHistoryItem}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {inputText} = this.state
    return (
      <>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-image"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              type="search"
              className="input-container"
              placeholder="Search history"
              onChange={this.onChangeInputField}
              value={inputText}
            />
          </div>
        </div>
        {this.renderHistoryViewOrNoHistoryView()}
      </>
    )
  }
}

export default HistoryItem
