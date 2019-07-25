import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest,actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';


class ProductActionPage extends Component {

  // for form
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      Name: '',
      Price: '',
      Status: false
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      var {itemEditing} = nextProps;
      this.setState({
        id: itemEditing.id,
        Name: itemEditing.name,
        Price: itemEditing.price,
        Status: itemEditing.status
      })
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    var { history } = this.props;
    e.preventDefault();
    var { id, Name, Price, Status } = this.state;
    var product = {
      id: id,
      name: Name,
      price: Price,
      status: Status
    }
    
    if (id) {
      this.props.onUpdateProduct(product);
    }
    else {
      this.props.onAddProduct(product);
    }
    alert("success");
    history.goBack();
  }


  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Product Name:</label>
            <input
              type="text"
              className="form-control"
              name='Name'
              value={this.state.Name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label >Price:</label>
            <input
              type="text"
              className="form-control"
              name='Price'
              value={this.state.Price}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Status: </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={this.state.Status}
                name='Status'
                onChange={this.onChange}
                checked={this.state.Status}
              />
              Available
            </label>
          </div>


          <button type="submit" className="btn btn-primary mr-10">Save</button>
          <Link to='/product-list' className="btn btn-danger">
            Back
          </Link>
        </form>

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}


const mapDispatchtoProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct : (id) =>{
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct : (product) =>{
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ProductActionPage);
