import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CreateProduct.module.scss";
import Input from "../../../components/Input";

const cx = classNames.bind(styles);

const listCategory = ['Salad', 'Rolls', 'Deserts', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles']

const CreateProduct = () => {
  const imgRef = useRef();
  const [imagePreview, setImagePreview] = useState("https://cdn-icons-png.flaticon.com/512/126/126477.png");
  const [food, setFood] = useState ({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: ''
  })

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const url = reader.result;
      setImagePreview(url);
    };
  };

  const handleCreateProduct = (food) => {
    //call api
  }

  return (
    <div className={cx("wrapper-create-product")}>
      <h1>Create Food</h1>
      <div className={cx("container")}>
        <div
          className={cx("upload-img")}
          onClick={() => imgRef.current.click()}
        >
          <h3>Upload Image</h3>
          <div
            className={cx("image-preview")}
            style={{ backgroundImage: `url(${imagePreview})` }}
          ></div>
          <input ref={imgRef} type="file" hidden onChange={handleUploadImage} />
        </div>
        <div className={cx("product-name")}>
          <h3>Product name</h3>
          <Input value={food.name} onChange={(e) => setFood(prev => ({...prev, name: e.target.value}))} placeholder={"Product name"} size={"admin-default"} />
        </div>
        <div className={cx("product-des-wrapper")}>
          <h3>Product description</h3>
          <textarea className={cx("product-des")} value={food.description} onChange={(e) => setFood(prev => ({...prev, description: e.target.value}))}></textarea>
        </div>
        <div className={cx("product-category-price")}>
          <div className={cx("product-category")}>
            <h3>Product category</h3>
            <select className={cx("select-category")} value={food.category} onChange={(e) => setFood(prev => ({...prev, category: e.target.value}))}>
                {listCategory.map(category => <option key={category}>{category}</option>)}
            </select>
          </div>
          <div className={cx("product-price")}>
            <h3>Product price</h3>
            <Input
              value={food.price}
              type={"text"}
              placeholder={"price"}
              size={"admin-default"}
              onChange={(e) => setFood(prev => ({...prev, price: e.target.value}))}
            />
          </div>
        </div>
        <button className={cx("btn-create")} onClick={() => handleCreateProduct(food)}>ADD</button>
      </div>
    </div>
  );
};

export default CreateProduct;
