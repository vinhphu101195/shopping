import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) =>{
    if(confirm("do you want to remove it ?")){ //eslint-disable-line
      this.props.onDelete(id);
    };
  }

  onEdit = (id) =>{
    //console.log(id);
  }

  render() {
    var{product,index} = this.props;
    var statusName = product.status ? "Available" : "Sold Out";
    var statusClass = product.status ? "warning" : "default";
    return (
        <tr>
          <td>{index +1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <spand className={`label label-${statusClass}`}>{statusName}</spand>
          </td>
          <td>
            <Link to ={`/product/${product.id}/edit`} className="btn btn-success mr-10" onClick = {() =>this.onEdit(product.id)}>Edit</Link>

            <button type="button" className="btn btn-danger" onClick = {() =>this.onDelete(product.id) } >Delete</button>
          </td>
        </tr>
    );
  }
}

export default ProductItem;
