import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest,actDeleteRequest } from './../../actions/index';

class ProductListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        )
      })
    }
    return result;
  }

  onDelete = (id) => {
    // var { products } = this.state;
    // callApi(`products/${id}`, 'DELETE', null).then(res => {
    //   if (res.status === 200) { // ok
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products
    //       });
    //     }
    //   }
    // })
    this.props.onDelete(id);
  }



  render() {
    var { products } = this.props;
    return (
      <div className="HomePage" >
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to='/product/add' className="btn btn-info mb-10">Add Item</Link>
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </div>
      </div>
    );
  }


}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchtoProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDelete: (id) =>{
      dispatch(actDeleteRequest(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ProductListPage);

