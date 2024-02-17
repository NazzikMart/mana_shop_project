import React, { useState, createContext } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../../UI/Footer/Footer.js";
import products from "../../../json/product.json";
import categorie from "../../../json/categorie.json";
import producer from "../../../json/producer.json";
import service from "../../../json/service";
import "../../../index.css";
import axios from "axios";

export const AppContext = createContext();
const App = () => {
  const [product, setProduct] = useState(products.product);
  const [orders, setOrders] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [infoProducts, setInfoProducts] = useState([]);
  const [producers, setProducers] = useState(producer.producer);
  const [categories, setCategories] = useState(categorie.categorie);
  const [currentItems, setCurrentItems] = useState([...product]);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducers, setSelectedProducers] = useState([]);
  const [renderCart, setRenderCart] = useState(false);
  const [services, setServices] = useState(service.service);
  const [userData, setUserData] = useState({
    firstName: "",
    number: "",
    password: "",
  });
  const [isAccount, setIsAcount] = useState(true);

  const handleRegistration = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/register", data);
      console.log(response.data);
      setUserData({
        firstName: data.firstName,
        number: data.number,
        password: data.password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAccount = () => {
    setIsAcount(!isAccount);
  };
  console.log(userData);

  const addToOrder = (item) => {
    const isItemInOrder = orders.some((orderItem) => orderItem.id === item.id);

    if (!isItemInOrder) {
      setOrders([...orders, item]);
      calculateTotalCost();
    } else {
      console.log("Цей товар вже є в кошику");
    }
  };
  const updateOrders = (updatedOrders, totalCost) => {
    setOrders(updatedOrders);
    setTotalCost(totalCost);
  };
  const infoProduct = (item) => {
    setInfoProducts([item]);
  };

  const removeProduct = (productId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== productId)
    );
    calculateTotalCost();
  };

  const calculateTotalCost = () => {
    const total = orders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    setTotalCost(total);
  };
  const choseCategory = (category, heading) => {
    if (category === "all") {
      setCurrentItems(product);
    } else {
      setCurrentItems(
        product.filter(
          (el) => el.category === category || el.heading === heading
        )
      );
    }
  };

  const choseCategoryNew = (category) => {
    if (category === "all") {
      setCurrentItems(product);
      return;
    }

    setCurrentItems(product.filter((el) => el.category === category));
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = product.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  const filterByPcrice = () => {
    if (minPrice !== "" && maxPrice !== "") {
      const FilterProductPrice = currentItems.filter((el) => {
        return el.price >= Number(minPrice) && el.price <= Number(maxPrice);
      });
      setCurrentItems(FilterProductPrice);
    }
  };

  const filterByProducer = () => {
    if (selectedProducers.length > 0) {
      const filteredProducts = product.filter((el) =>
        selectedProducers.includes(el.producerц)
      );
      setCurrentItems(filteredProducts);
    } else {
      setCurrentItems(product);
    }
  };

  const choseProducer = (producer) => {
    if (selectedProducers.includes(producer)) {
      setSelectedProducers(selectedProducers.filter((p) => p !== producer));
    } else {
      setSelectedProducers([...selectedProducers, producer]);
    }
  };

  const showFunction = () => {
    filterByProducer();
    filterByPcrice();
  };

  const incrementCounter = (productId, price) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === productId) {
        const newCounter = order.counter + 1;
        if (newCounter >= 1) {
          return { ...order, counter: newCounter };
        }
      }
      return order;
    });

    const totalCost = updatedOrders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    updateOrders(updatedOrders, totalCost);
  };

  const decrementCounter = (productId, price) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === productId) {
        const newCounter = order.counter - 1;
        if (newCounter >= 1) {
          return { ...order, counter: newCounter };
        } else {
          return null;
        }
      }
      return order;
    });

    const filteredOrders = updatedOrders.filter((order) => order !== null);

    const totalCost = filteredOrders.reduce((accumulator, order) => {
      return accumulator + order.price * order.counter;
    }, 0);

    updateOrders(filteredOrders, totalCost);
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const contextValues = {
    product,
    addToOrder,
    orders,
    removeProduct,
    totalCost,
    infoProduct,
    infoProducts,
    updateOrders,
    searchResults,
    services,
    renderCart,
    searchTerm,
    currentItems,
    choseProducer,
    categories,
    minPrice,
    maxPrice,
    producers,
    selectedProducers,
    showFunction,
    choseCategory,
    handleSearch,
    choseCategoryNew,
    handleRemoveProduct,
    decrementCounter,
    incrementCounter,
    handleRegistration,
    handleLogin,
    toggleAccount,
    isAccount,
    userData,
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValues}>
        <Navbar />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
