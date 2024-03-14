import React from 'react'
import './FormIphone.css'
import hero from '../../../img/hero_endframe__cvklg0xk3w6e_large 1.jpg'

export default function FormIphone() {
  return (
    <div className="form">
    <div className="form-items ">
        <div className="form-item background">
            <div className="form-title">
                ХОЧЕШ IPHONE 14 PRO?
            </div>
            <form action="" className="form-form">
                <div className="flex">
                    <input type="text" placeholder="Ваше ім'я"/>
                    <input type="text" placeholder="Номер телефону"/>
                </div>
                
                <div className="form-description">
                    <span>Найближчим часом наш менеджер зв'яжеться з Вами</span>
                </div>
                <div className="form-button">
                    <button className="form-btn">ЗАМОВИТИ</button>
                </div>
            </form>
        </div>
        <div className="form-item">
            <div className="form-img">
                <img className="form-images" src={hero} alt="" />
            </div>
        </div>
    </div>
</div>
  )
}
