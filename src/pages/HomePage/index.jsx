import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import Banner from "../../components/Banner";
import headerImage from "../../assets/frontend/header_img.png";
import FoodCategory from "../../components/FoodCategory";
// import menu1 from "../../assets/frontend/menu_1.png";
// import menu2 from "../../assets/frontend/menu_2.png";
// import menu3 from "../../assets/frontend/menu_3.png";
// import menu4 from "../../assets/frontend/menu_4.png";
// import menu5 from "../../assets/frontend/menu_5.png";
// import menu6 from "../../assets/frontend/menu_6.png";
// import menu7 from "../../assets/frontend/menu_7.png";
// import menu8 from "../../assets/frontend/menu_8.png";
import FoodCard from "../../components/FoodCard";

// food-top-img
// import food1 from "../../assets/frontend/food_1.png";
// import food2 from "../../assets/frontend/food_2.png";
// import food3 from "../../assets/frontend/food_3.png";
// import food4 from "../../assets/frontend/food_4.png";
// import food5 from "../../assets/frontend/food_5.png";
// import food6 from "../../assets/frontend/food_6.png";
// import food7 from "../../assets/frontend/food_7.png";
// import food8 from "../../assets/frontend/food_8.png";
// import food9 from "../../assets/frontend/food_9.png";
// import food10 from "../../assets/frontend/food_10.png";
// import food11 from "../../assets/frontend/food_11.png";
// import food12 from "../../assets/frontend/food_12.png";
// import food13 from "../../assets/frontend/food_13.png";
// import food14 from "../../assets/frontend/food_14.png";
// import food15 from "../../assets/frontend/food_15.png";
// import food16 from "../../assets/frontend/food_16.png";
// import food17 from "../../assets/frontend/food_17.png";
// import food18 from "../../assets/frontend/food_18.png";
// import food19 from "../../assets/frontend/food_19.png";
// import food20 from "../../assets/frontend/food_20.png";
// import food21 from "../../assets/frontend/food_21.png";
// import food22 from "../../assets/frontend/food_22.png";
// import food23 from "../../assets/frontend/food_23.png";
// import food24 from "../../assets/frontend/food_24.png";
// import food25 from "../../assets/frontend/food_25.png";
// import food26 from "../../assets/frontend/food_26.png";
// import food27 from "../../assets/frontend/food_27.png";
// import food28 from "../../assets/frontend/food_28.png";
// import food29 from "../../assets/frontend/food_29.png";
// import food30 from "../../assets/frontend/food_30.png";
// import food31 from "../../assets/frontend/food_31.png";
// import food32 from "../../assets/frontend/food_32.png";
import AppDownload from "../../components/AppDownload";
import axiosInstance from "../../lib/axios";

const cx = classNames.bind(styles);
// const exploreMenu = [
//   {
//     name: "Salad",
//     src: menu1,
//   },
//   {
//     name: "Rolls",
//     src: menu2,
//   },
//   {
//     name: "Deserts",
//     src: menu3,
//   },
//   {
//     name: "Sandwich",
//     src: menu4,
//   },
//   {
//     name: "Cake",
//     src: menu5,
//   },
//   {
//     name: "Pure Veg",
//     src: menu6,
//   },
//   {
//     name: "Pasta",
//     src: menu7,
//   },
//   {
//     name: "Noodles",
//     src: menu8,
//   },
// ];

// const foodList = [
//   {
//     category: "Salad",
//     menu: [
//       {
//         name: "Greak Salad",
//         pic: food1,
//         price: 18
//       },
//       {
//         name: "Veg Salad",
//         pic: food2,
//         price: 22
//       },
//       {
//         name: "Clover Salad",
//         pic: food3,
//         price: 25
//       },
//       {
//         name: "Chicken Salad",
//         pic: food4,
//         price: 12
//       },
//     ],
//   },
//   {
//     category: "Rolls",
//     menu: [
//       {
//         name: "Lasagna Rolls",
//         pic: food5,
//         price: 11
//       },
//       {
//         name: "Peri Peri Rolls",
//         pic: food6,
//         price: 17
//       },
//       {
//         name: " Chicken Rolls",
//         pic: food7,
//         price: 28
//       },
//       {
//         name: "Veg Rolls",
//         pic: food8,
//         price: 19
//       },
//     ],
//   },
//   {
//     category: "Deserts",
//     menu: [
//       {
//         name: "Ripple Ice Cream",
//         pic: food9,
//         price: 25
//       },
//       {
//         name: "Fruit Ice Cream",
//         pic: food10,
//         price: 14
//       },
//       {
//         name: "Jar Ice Cream",
//         pic: food11,
//         price: 22
//       },
//       {
//         name: "Vanilla Ice Cream",
//         pic: food12,
//         price: 21
//       },
//     ],
//   },
//   {
//     category: "Sandwich",
//     menu: [
//       {
//         name: "Pip Steak Sandwich",
//         pic: food13,
//         price: 32
//       },
//       {
//         name: "Tomato Sandwich",
//         pic: food14,
//         price: 30
//       },
//       {
//         name: "Pig por Sandwich",
//         pic: food15,
//         price: 25
//       },
//       {
//         name: "Noa Goa Sandwich",
//         pic: food16,
//         price: 24
//       },
//     ],
//   },
//   {
//     category: "Cake",
//     menu: [
//       {
//         name: "Cherry Cake",
//         pic: food17,
//         price: 8
//       },
//       {
//         name: "Strawberry Cake",
//         pic: food18,
//         price: 12
//       },
//       {
//         name: "Grape Cake",
//         pic: food19,
//         price: 17
//       },
//       {
//         name: "Banana Cake",
//         pic: food20,
//         price: 16
//       },
//     ],
//   },
//   {
//     category: "Pure Veg",
//     menu: [
//       {
//         name: "Lacosta Pure Veg",
//         pic: food21,
//         price: 20
//       },
//       {
//         name: "Lacosta 1 Pure Veg",
//         pic: food22,
//         price: 24
//       },
//       {
//         name: "Lacosta 2 Pure Veg",
//         pic: food23,
//         price: 29
//       },
//       {
//         name: "Lacosta 3 Pure Veg",
//         pic: food24,
//         price: 33
//       },
//     ],
//   },
//   {
//     category: "Pasta",
//     menu: [
//       {
//         name: "Katishot Pasta",
//         pic: food25,
//         price: 35
//       },
//       {
//         name: "Katishot 1 Pasta",
//         pic: food26,
//         price: 36
//       },
//       {
//         name: "Katishot 2 Pasta",
//         pic: food27,
//         price: 34
//       },
//       {
//         name: "Katishot 3 Pasta",
//         pic: food28,
//         price: 32
//       },
//     ],
//   },
//   {
//     category: "Noodles",
//     menu: [
//       {
//         name: "Mixed Noodles",
//         pic: food29,
//         price: 40
//       },
//       {
//         name: "Spicy Noodles",
//         pic: food30,
//         price: 45
//       },
//       {
//         name: "Udon Noodles",
//         pic: food31,
//         price: 46
//       },
//       {
//         name: "Pho Noodles",
//         pic: food32,
//         price: 48
//       },
//     ],
//   },
// ];

const HomePage = () => {
  const [filterFood, setFilterFood] = useState([])
  const [exploreMenu, setExploreMenu] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try {
          const res = await axiosInstance.get("/categories")
          setExploreMenu(res.data.data)
      }catch(err) {
          throw new Error(err.response.data.message);
      }
    }

    const fetchFood = async () => {
      try {
          const res = await axiosInstance.get("/food")
          setFilterFood(res.data.data)
      }catch(err) {
          throw new Error(err.response.data.message);
      }
    }
    fetchCategory()
    fetchFood()
  }, [])

  const handleFilterFood = useCallback((id) => {
    setFilterFood(prev => prev.filter(food => food.categoryId === id))
  }, [])
  return (
    <>
      <div className={cx("wrapper-home")}>
        <Banner imageSrc={headerImage} />

        {/**Explore or menu */}
        <section className={cx("explore")}>
          <h1 className={cx("explore-title")}>Explore our menu</h1>
          <p className={cx("explore-des")}>
            Choose from a diverse menu featuring a delectable array of dishes.
            Our mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <div className={cx("explore-submenu")}>
            {exploreMenu.map((menu, index) => (
              <FoodCategory index={index} key={index} id= {menu.categoryId} imageSrc={menu.image} name={menu.name} onClick={handleFilterFood}/>
            ))}
          </div>
        </section>

        <hr className={cx("line")} />

        {/** Top dish food */}
        <section className={cx("food-top")}>
          <h1 className={cx("food-top-title")}>Top dishes near you</h1>
          <div className={cx("food-list")}>
            {filterFood.length > 0 && filterFood.map((food, index) => <FoodCard key={index} id={food.foodId} name={food.name} pic={food.image} price={food.price} des={food.des}/>)}
          </div>
        </section>

        <AppDownload/>
      </div>
    </>
  );
};

export default HomePage;
