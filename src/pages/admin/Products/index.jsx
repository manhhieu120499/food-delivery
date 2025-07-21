import React from 'react';
import classNames from 'classnames/bind';
import styles from './Products.module.scss'
import ProductItem from '../../../components/admin/ProductItem';

import food1 from "../../../assets/frontend/food_1.png";
import food2 from "../../../assets/frontend/food_2.png";
import food3 from "../../../assets/frontend/food_3.png";
import food4 from "../../../assets/frontend/food_4.png";
import food5 from "../../../assets/frontend/food_5.png";
import food6 from "../../../assets/frontend/food_6.png";
import food7 from "../../../assets/frontend/food_7.png";
import food8 from "../../../assets/frontend/food_8.png";
import food9 from "../../../assets/frontend/food_9.png";
import food10 from "../../../assets/frontend/food_10.png";
import food11 from "../../../assets/frontend/food_11.png";
import food12 from "../../../assets/frontend/food_12.png";
import food13 from "../../../assets/frontend/food_13.png";
import food14 from "../../../assets/frontend/food_14.png";
import food15 from "../../../assets/frontend/food_15.png";
import food16 from "../../../assets/frontend/food_16.png";
import food17 from "../../../assets/frontend/food_17.png";
import food18 from "../../../assets/frontend/food_18.png";
import food19 from "../../../assets/frontend/food_19.png";
import food20 from "../../../assets/frontend/food_20.png";
import food21 from "../../../assets/frontend/food_21.png";
import food22 from "../../../assets/frontend/food_22.png";
import food23 from "../../../assets/frontend/food_23.png";
import food24 from "../../../assets/frontend/food_24.png";
import food25 from "../../../assets/frontend/food_25.png";
import food26 from "../../../assets/frontend/food_26.png";
import food27 from "../../../assets/frontend/food_27.png";
import food28 from "../../../assets/frontend/food_28.png";
import food29 from "../../../assets/frontend/food_29.png";
import food30 from "../../../assets/frontend/food_30.png";
import food31 from "../../../assets/frontend/food_31.png";
import food32 from "../../../assets/frontend/food_32.png";

const cx = classNames.bind(styles)

const foodList = [
  {
    category: "Salad",
    menu: [
      {
        name: "Greak Salad",
        pic: food1,
        price: 18,
        category: "Salad",
      },
      {
        name: "Veg Salad",
        pic: food2,
        price: 22,
        category: "Salad",
      },
      {
        name: "Clover Salad",
        pic: food3,
        price: 25,
        category: "Salad",
      },
      {
        name: "Chicken Salad",
        pic: food4,
        price: 12,
        category: "Salad",
      },
    ],
  },
  {
    category: "Rolls",
    menu: [
      {
        name: "Lasagna Rolls",
        pic: food5,
        price: 11,
        category: "Rolls",
      },
      {
        name: "Peri Peri Rolls",
        pic: food6,
        price: 17,
        category: "Rolls",
      },
      {
        name: " Chicken Rolls",
        pic: food7,
        price: 28,
        category: "Rolls",
      },
      {
        name: "Veg Rolls",
        pic: food8,
        price: 19,
        category: "Rolls",
      },
    ],
  },
  {
    category: "Deserts",
    menu: [
      {
        name: "Ripple Ice Cream",
        pic: food9,
        price: 25,
        category: "Deserts",
      },
      {
        name: "Fruit Ice Cream",
        pic: food10,
        price: 14,
        category: "Deserts",
      },
      {
        name: "Jar Ice Cream",
        pic: food11,
        price: 22,
        category: "Deserts",
      },
      {
        name: "Vanilla Ice Cream",
        pic: food12,
        price: 21,
        category: "Deserts",
      },
    ],
  },
  {
    category: "Sandwich",
    menu: [
      {
        name: "Pip Steak Sandwich",
        pic: food13,
        price: 32,
        category: "Sandwich",
      },
      {
        name: "Tomato Sandwich",
        pic: food14,
        price: 30,
        category: "Sandwich",
      },
      {
        name: "Pig por Sandwich",
        pic: food15,
        price: 25,
        category: "Sandwich",
      },
      {
        name: "Noa Goa Sandwich",
        pic: food16,
        price: 24,
        category: "Sandwich",
      },
    ],
  },
  {
    category: "Cake",
    menu: [
      {
        name: "Cherry Cake",
        pic: food17,
        price: 8,
         category: "Cake",
      },
      {
        name: "Strawberry Cake",
        pic: food18,
        price: 12,
         category: "Cake",
      },
      {
        name: "Grape Cake",
        pic: food19,
        price: 17,
         category: "Cake",
      },
      {
        name: "Banana Cake",
        pic: food20,
        price: 16,
         category: "Cake",
      },
    ],
  },
  {
    category: "Pure Veg",
    menu: [
      {
        name: "Lacosta Pure Veg",
        pic: food21,
        price: 20,
         category: "Pure Veg",
      },
      {
        name: "Lacosta 1 Pure Veg",
        pic: food22,
        price: 24,
         category: "Pure Veg",
      },
      {
        name: "Lacosta 2 Pure Veg",
        pic: food23,
        price: 29,
         category: "Pure Veg",
      },
      {
        name: "Lacosta 3 Pure Veg",
        pic: food24,
        price: 33,
         category: "Pure Veg",
      },
    ],
  },
  {
    category: "Pasta",
    menu: [
      {
        name: "Katishot Pasta",
        pic: food25,
        price: 35,
         category: "Pasta",
      },
      {
        name: "Katishot 1 Pasta",
        pic: food26,
        price: 36,
         category: "Pasta",
      },
      {
        name: "Katishot 2 Pasta",
        pic: food27,
        price: 34,
         category: "Pasta",
      },
      {
        name: "Katishot 3 Pasta",
        pic: food28,
        price: 32,
         category: "Pasta",
      },
    ],
  },
  {
    category: "Noodles",
    menu: [
      {
        name: "Mixed Noodles",
        pic: food29,
        price: 40,
         category: "Noodles",
      },
      {
        name: "Spicy Noodles",
        pic: food30,
        price: 45,
         category: "Noodles",
      },
      {
        name: "Udon Noodles",
        pic: food31,
        price: 46,
         category: "Noodles",
      },
      {
        name: "Pho Noodles",
        pic: food32,
        price: 48,
         category: "Noodles",
      },
    ],
  },
];

const Products = () => {
    const handleRemoveFood = (item) => {
        //call api
    } 
    return (
        <div className={cx('wrapper-product')}>
            <h2>All Foods List</h2>
            <table className={cx('table-product')}>
                <thead>
                    <tr className={cx('row-head')}>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {foodList.map(food => food.menu.map((data, index) => <ProductItem key={index} item={data} onClick={() => handleRemoveFood(data)}/>))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Products;
