import React, { Component } from 'react';


class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Product List</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
