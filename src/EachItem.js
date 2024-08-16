const EachItem = props => {
  const {historyDetails, deleteAHistoryItem} = props
  const {id, logoUrl, title, timeAccessed, domainUrl} = historyDetails

  const onDeleteBtnClicked = () => {
    deleteAHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-details-container">
        <img src={logoUrl} className="history-logo" alt="domain logo" />
        <div className="logo-info-container">
          <p className="title">{title}</p>
          <p className="logoUrl">{domainUrl}</p>
        </div>
        <button
          className="delete-btn"
          type="button"
          onClick={onDeleteBtnClicked}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default EachItem
