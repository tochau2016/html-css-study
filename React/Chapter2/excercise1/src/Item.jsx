import React from 'react';

function Item(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            {/* <div className="list-group rounded-0 mb-4" id="category-list">
                <a href="" className="list-group-item list-group-item-action">Apple</a>
                <a href="" className="list-group-item list-group-item-action">Samsung</a>
            </div> */}

            {/* const itemBackground = {
                backgroundColor: props.isNew ? "red" : "white";

                "& > h4, & > p": {

                }
            } */}

            <div className="product-card card mb-4 position-relative rounded-0">
                {props.isNew ? <div className="new-label">NEW</div> : null}

                <img className="card-img-top rounded-0" src={props.src} alt="Card image" />
                <div className="card-body" style = {{ backgroundColor: props.isNew ? "white" : "white"}}>
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">Price: {props.price.toLocaleString()} VND</p>
                    <a href="fb.com" className="btn btn-outline-primary">View Detail</a>
                </div>
            </div>
        </div>

    );
}
export default Item;