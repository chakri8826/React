import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import "./index.css";

// const blogData = {
//   title: "Blog Name",
//   imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png",
//   avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
//   author: "Author Name",
//   content:
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// };

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  };
  componentDidMount() {
    this.getBlogItemData();
  }
  getBlogItemData = async () => {
    // console.log(this.props);
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    // console.log(id);
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
    const item = await response.json();
    const updatedData = {
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    };
    this.setState({ blogData: updatedData, isLoading: false });
  };
  renderBlogItemDetails = () => {
    const { blogData, isLoading } = this.state;
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div>
        {isLoading ? (
          <TailSpin
            height={80}
            width={80}
            color="#00BFFF" // Set your desired color here
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        ) : (
          <div className="blog-info">
            <h2 className="blog-details-title">{title}</h2>

            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>

            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    );
  };

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>;
  }
}

export default BlogItemDetails;
