import React, { useContext, useEffect, useState } from "react";
import "./Purchase.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios"; 
import { AppContext } from "../../Functional/App/App";

const Purchase = () => {
  const { orders, incrementCounter, decrementCounter, handleRemoveProduct } =
    useContext(AppContext);

  const [totalSum, setTotalSum] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    calculateTotalSum();
  }, [orders]);

  const calculateTotalSum = () => {
    let sum = 0;
    orders.forEach((el) => {
      sum += Number(el.price) * el.counter; 
    });
    setTotalSum(sum);
  };

  const deliveryMethod = watch("deliveryMethod");

  const handleSubmitOrder = async (e) => {
    const formData = {
      name: watch("name"),
      phoneNumber: watch("phoneNumber"),
      deliveryMethod: watch("deliveryMethod"),
      npOffice: watch("npOffice"),
      paymentMethod: watch("paymentMethod"),
      totalSum: totalSum,
    };

    await axios
      .post("http://localhost:3001/api/orders", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Помилка відправки замовлення:", error);
      });
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="purchase-wrapper">
      <div className="contacts-datails-items">
        <div className="contacts-date-items">
          <span className="contacts-date-item-name ">Контактні дані</span>
          <form
            className="contacts-date-item-form"
            onSubmit={handleSubmit(handleSubmitOrder)}
          >
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: "Будь ласка, введіть ім'я" }}
              render={({ field }) => (
                <>
                  <input
                    className="contacts-date-item-form-name"
                    placeholder="Введіть ім'я"
                    {...field}
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )}
                </>
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: "Будь ласка, введіть номер телефону",
                pattern: {
                  value: /^[0-9\b]+$/,
                  message: "Недійсний номер телефону",
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    className="contacts-date-item-form-number"
                    placeholder="Введіть номер телефону"
                    {...field}
                  />
                  {errors.phoneNumber && (
                    <p className="error-message">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </>
              )}
            />
          </form>
        </div>

        <div className="delivery-date-items">
          <span className="delivery-date-item-name">Спосіб доставки</span>
          <form className="delivery-date-item-form">
            <Controller
              name="deliveryMethod"
              control={control}
              defaultValue=""
              rules={{ required: "Будь ласка, оберіть спосіб доставки" }}
              render={({ field }) => (
                <>
                  <select className="delivery-date-item-form-select" {...field}>
                    <option className="delivery-date-item-form-option" value="">
                      Оберіть спосіб доставки
                    </option>
                    <option
                      className="delivery-date-item-form-option"
                      value="np"
                    >
                      Нова Пошта
                    </option>
                  </select>
                  {errors.deliveryMethod && (
                    <p className="error-message">
                      {errors.deliveryMethod.message}
                    </p>
                  )}
                </>
              )}
            />

            {deliveryMethod === "np" && (
              <>
                <Controller
                  name="npOffice"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Будь ласка, оберіть відділення Нової Пошти",
                  }}
                  render={({ field }) => (
                    <>
                      <select
                        className="delivery-date-item-form-select"
                        {...field}
                      >
                        <option
                          className="delivery-date-item-form-option"
                          value=""
                        >
                          Оберіть відділення
                        </option>
                        <option
                          className="delivery-date-item-form-option"
                          value="np1"
                        >
                          Відділення НП номер 1
                        </option>
                        <option
                          className="delivery-date-item-form-option"
                          value="np2"
                        >
                          Відділення НП номер 2
                        </option>
                      </select>
                      {errors.npOffice && (
                        <p className="error-message">
                          {errors.npOffice.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </>
            )}
          </form>
        </div>
        <div className="payment-date-items">
          <span className="payment-date-item-name">Оплата</span>
          <form>
            <div className="payment-date-item payment-date-item-post">
              <select
                value={selectedPaymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="">Оберіть метод оплати</option>
                <option value="PrivatPay">PrivatPay</option>
                <option value="GooglePay">GooglePay</option>
                <option value="Visa / MasterCard">Visa / MasterCard</option>
                <option value="Portmone.com">Portmone.com</option>
                <option value="Оплата під час отримання">
                  Оплата під час отримання
                </option>
              </select>
            </div>

            {errors.paymentMethod && (
              <p className="error-message">{errors.paymentMethod.message}</p>
            )}
          </form>
        </div>
        <div className="totalSum">Загальна сумма : {totalSum}</div>
        <div className="purchase-product-details-item-btn">
          <button className="purchase-product-details-item-button">
            Замовити
          </button>
        </div>
      </div>

      <div className="purchase-product-details-items">
        {orders.map((el) => {
          return (
            <div className="besket-products" key={el.id}>
              <div className="order-product">
                <div className="order-product-info">
                  <img src={el.img} className="order-product-img" alt="" />
                  <span className="order-product-name">{el.name}</span>
                </div>

                <div className="order-product-count">
                  <span className="order-product-count-item">{el.counter}</span>
                  <div className="order-product-counter">
                    <span
                      className="order-product-counter-plus"
                      onClick={() => incrementCounter(el.id)}
                    >
                      +
                    </span>
                    <span
                      className="order-product-counter-minus"
                      onClick={() => decrementCounter(el.id)}
                    >
                      -
                    </span>
                  </div>
                </div>
                <div className="order-product-price">{el.price} грн</div>
                <div
                  className="order-product-delete"
                  onClick={() => handleRemoveProduct(el.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Purchase;
