import "./App.css";
import Header from "./Header";
import SlideMenu from "./SlideMenu";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import BasketModal from "./BasketModal";
import ViewItem from "./ViewItem";

export const myData = [
  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/75SAhJii9Zq9Bmx9KSEeaQ/4f927f008b6733b1e934ae204987f77b/procduct-16.jpeg",
    price: 36.99,
    title: "Bedroom Couch",
    category: "ma",
    id: 1,
  },
  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/RMSYcGzzvG7sYQaFsv3Fn/9a714cda67250097f5f86f9fc527d7cd/product-15.jpeg",
    price: 28.99,
    title: "Patio Chill",
    category: "ca",
    id: 2,
  },
  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/17os2MwEQuoqcdLscCqu9n/9c2e42c7f32ed5650630c52190192f15/product-14.jpeg",
    price: 34.99,
    title: "Garden Furniture",
    category: "li",
    id: 3,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/46XqhwLR0vxTfZ4iLaCMTP/1d375256a7f9d6cb88e54dead3309c0d/product-13.jpeg",
    price: 59.99,
    title: "Family Dinner Table",
    category: "ma",
    id: 4,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/5EidwGsXIOH3W1nwNSb0s9/af28af8ad35cb7d2f33705ac4ba5d82e/product-12.jpeg",
    price: 69.99,
    title: "Family Couch",
    category: "ca",
    id: 5,
  },
  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/Dvs5Ub93fTmYvBXIsh87Q/d27928f1c92b054e229a16b0a6812136/product-11.jpeg",
    price: 29.99,
    title: "Single Dinner table",
    category: "ma",
    id: 6,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/2uIduxU8hEft6DtAxmwmQI/39a53985dca1eb996264435e0839cf9c/product-10.jpeg",
    price: 59.99,
    title: "Family`s Love Couch",
    category: "ik",
    id: 7,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/4YfjpKmitMyzefeEBAqv3X/19ba0f1b49d7bbd35335de0dc5e5043f/product-9.jpeg",
    price: 49.99,
    title: "Bright Red Couch",
    category: "ik",
    id: 8,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/6Grbj9Lt6XwIeRIZ4CuRsJ/b1291ab88c98084776232d6a7a601dbe/product-8.jpeg",
    price: 33.99,
    title: "Table",
    category: "ik",
    id: 9,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/5ShEVnrvRai5D87kOLcau0/d794bbd594696fbe6bdccad5c9432f73/product-7.jpeg",
    price: 45.99,
    title: "Couch",
    category: "ma",
    id: 10,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/2ZPqqLpSuvdGSoHXRpV0bH/e9f9b5c37c1d2d4fefc6704fcc63d832/product-6.jpeg",
    price: 32.99,
    title: "Dresser",
    category: "ca",
    id: 11,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/4mP7iW7ElJovQuFncCC1GQ/57884e3a4aa39ea30e22bf1caa22581c/product-4.jpeg",
    price: 22.99,
    title: "Twin Panel Bed",
    category: "li",
    id: 12,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/7iByEOCtEsWewc2hUtOXFK/e500b6a4a34c55ac471dc1810d2f22e1/product-5.jpeg",
    price: 88.99,
    title: "Fridge",
    category: "ik",
    id: 13,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/61lrEgyXL2UYtjJjl9dt1J/a726bc27543b901443b32bb6cf2a076f/product-3.jpeg",
    price: 12.99,
    title: "Single Panel Bed",
    category: "ma",
    id: 14,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/5FTlt4AxWIMI8viAdNNirJ/ff5a890451581f9260c5b392c0453c67/product-2.jpeg",
    price: 12.99,
    title: "King Panel Bed",
    category: "ca",
    id: 15,
  },

  {
    image:
      "https://images.ctfassets.net/vajel9mfz0r6/2GxGNrZS4zzNjYNvND6CnW/1e584c1e95c83fdf6469664bdd6aa295/product-1.jpeg",
    price: 10.99,
    title: "Queen Panel Bed",
    category: "li",
    id: 16,
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  const [showMenu, setShow] = useState(false);
  return (
    <div className="App">
      <div className="wrapper">
        {/* <ViewItem/> */}
        <BrowserRouter>
          {/* <Header
            onState={showMenu}
            onMenuIconClick={setShow}
            onShowModal={handleModal}
          />
          <SlideMenu onState={showMenu} />
          <BasketModal onCancelModal={handleModal} showModal={showModal} /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    onState={showMenu}
                    onMenuIconClick={setShow}
                    onShowModal={handleModal}
                  />
                  <SlideMenu onState={showMenu} />
                  <BasketModal
                    onCancelModal={handleModal}
                    showModal={showModal}
                  />

                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/testing"
              element={
                <>
                  <Header
                    onState={showMenu}
                    onMenuIconClick={setShow}
                    onShowModal={handleModal}
                  />
                  <SlideMenu onState={showMenu} />
                  <BasketModal
                    onCancelModal={handleModal}
                    showModal={showModal}
                  />
                  <Products myData={myData} />
                </>
              }
            ></Route>

            <Route
              path="/viewitem/:id/:title"
              element={
                <>
                  <ViewItem />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
