import "./index.css";

const TabItem = (props) => {
  const { tabDetails, updateActiveTabId, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const activetabClassName = isActive ? "active-tab-btn" : "";
  const onClickTabItem = () => {
    updateActiveTabId(tabId);
  };
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activetabClassName}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;