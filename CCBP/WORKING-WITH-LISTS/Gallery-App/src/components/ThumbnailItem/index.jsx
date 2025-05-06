import './index.css'
const ThumbnailItem = (props)=>{
    const {imageDetails,updateImgUrl,isActive}=props
    const { thumbnailUrl, imageUrl } = imageDetails;

    const activeImgClassName = isActive ? "activeButt" : "";
    const onclickUpdate = ()=>{
        updateImgUrl(imageUrl);
    }
    return (
        <li className='thumbnails-list'>
            <button className={`butt ${activeImgClassName}`} onClick={onclickUpdate}>
                <img src={thumbnailUrl}/>
            </button>
        </li>
    )
}
export default ThumbnailItem;
