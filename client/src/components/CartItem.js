import React from "react";

function CartItem({ product, quantity }) {
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={product.image ? product.image : product.poster_url}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{product.name}</p>
            <p>
              <span className="text-muted">Size: </span>M{" "}
              <span className="text-muted">Color: </span>Grey
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min="1"
              name="quantity"
              value={quantity}
              type="number"
              className="form-control form-control-sm"
            />

            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">${product.price}.00</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a className="text-danger">
              <i
                className="fas fa-trash fa-lg"
                onClick={console.log("deleted")}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
