import { Component } from "react";
import Cookies from "js-cookie";
import ProductCard from "../ProductCard";
import { TailSpin } from "react-loader-spinner";
import "./index.css";

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    let token = Cookies.get("jwt-Token");
    const url = "https://apis.ccbp.in/products";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, options);
    // console.log(response);
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({ productsList: updatedData,isLoading:false });
    }
  };

  renderProductsList = () => {
    const { productsList, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <TailSpin
              height={80}
              width={80}
              color="#00BFFF" // Set your desired color here
              ariaLabel="tail-spin-loading"
              radius="1"
              visible={true}
            />
          </div>
        ) : (
          <div>
            <h1 className="products-list-heading">All Products</h1>
            <ul className="products-list">
              {productsList.map((product) => (
                <ProductCard productData={product} key={product.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  render() {
    return <>{this.renderProductsList()}</>;
  }
}

export default AllProductsSection;
