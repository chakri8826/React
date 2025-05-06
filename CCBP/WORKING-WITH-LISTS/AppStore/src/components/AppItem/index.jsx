import './index.css'
const AppItem = (props)=>{
  const { details} = props;
  const { appId, imageUrl, appName } = details;
  return (
    <>
      <li className="app-container">
        <div className="">
          <img
            className="app-item-image"
            src={imageUrl}
            alt={`project-item ${appId}`}
          />
          <h1>{appName}</h1>
        </div>
      </li>
    </>
  );

}
export default AppItem 