import './index.css'
const TabItem = (props)=>{
    const { details, updateTabId, isActive } = props;
    const { tabId,displayText } = details;

    const activetabClassName = isActive ? "active-tab-btn" : "";
    const onclickTabChange = ()=>{
        updateTabId(tabId)
    }
    return (
      <li className="tabs-container">
        <button
          type="button"
          className={`tab-btn ${activetabClassName}`}
          onClick={onclickTabChange}
        >
          {displayText}
        </button>
      </li>
    );
}

export default TabItem 