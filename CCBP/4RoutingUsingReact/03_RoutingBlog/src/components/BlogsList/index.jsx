import { Component } from "react";
import BlogItem from "../BlogItem";

import "./index.css";
import { TailSpin } from "react-loader-spinner"; // ✅ Correct

// const blogsData = [
//   {
//     id: 1,
//     title: "Blog 1",
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png",
//     avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
//     author: "Author Name",
//     topic: "React.js",
//   },
//   {
//     id: 2,
//     title: "Blog 2",
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png",
//     avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
//     author: "Author Name",
//     topic: "React.js",
//   },
// ];

class BlogsList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  };
  componentDidMount = () => {
    this.getBlogsData();
    // this.setState({isLoading:false})
  };
  getBlogsData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs");
    const data = await response.json();
    const updatedData = data.map((item) => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    }));
    this.setState({ blogsData: updatedData,isLoading:false });
    console.log(data);
  };
  render() {
    const { blogsData, isLoading } = this.state;
    return (
      <div className="blog-list-container">
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
          blogsData.map((item) => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    );
  }
}

export default BlogsList;
