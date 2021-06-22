import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "./actions";
const Products = ({ getProducts, loading, products }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">our colleges</h2>
      <ul className="products">
        {products.map((item) => {
          return (
            <li key={item.name} className="product">
              <img
                src="https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2020/12/cropped-logo_2500X1875-270x270.jpg"
                alt={item.name}
              />
              <h4>{item.name}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired,
};
const mapStateToProps = ({ productState: { products, loading } }) => {
  return { loading, products };
};
export default connect(mapStateToProps, { getProducts })(Products);
