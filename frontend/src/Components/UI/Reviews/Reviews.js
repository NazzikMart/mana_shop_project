import React from "react";
import stars from "../../../img/Frame 257.png";
import "./Reviews.css";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews-title">Відгуки</div>
      <div className="reviews-items">
        <div className="reviews-item">
          <div className="reviews-item__name">
            <div className="reviews-name">Анна</div>
            <span className="reviews-date">07 вер 2019</span>
          </div>
          <div className="reviews-item__stars">
            <img src={stars}></img>
          </div>
          <div className="reviews-item_merits">
            <div>Переваги</div>
            <span>
              Доставка у строк. Товар повністю відповідає опису та фотографії.
            </span>
          </div>
          <div className="reviews-item_disadvantages">
            <div>Недоліки</div>
            <span>Не помітила</span>
          </div>
          <div className="reviews-item_comment">
            <div>Коментар</div>
            <span>
              Скористалася вперше. Все відмінно! Сукня дуже сподобалася доньці.
              Навіть пишніше виглядає, ніж на офто. І знижка порадувала.
            </span>
          </div>
        </div>
        <div className="reviews-item">
          <div className="reviews-item__name">
            <div className="reviews-name">Мар'яна</div>
            <span className="reviews-date">07 вер 2019</span>
          </div>
          <div className="reviews-item__stars">
            <img src={stars}></img>
          </div>
          <div className="reviews-item_merits">
            <div>Переваги</div>
            <span>
              Чудовий магазин! Просто знахідка! Всі замовлення отримали досить
              швидко, упаковано акуратно та якість товарів хороша! Ціни
              привабливі! Ввічливий персонал!
            </span>
          </div>
          <div className="reviews-item_disadvantages">
            <div>Недоліки</div>
            <span>НЕ є!</span>
          </div>
          <div className="reviews-item_comment">
            <div>Коментар</div>
            <span>
              Замовляли 2 рази у цьому магазині, і не пошкодували! Всі товари як
              на картинці, так і в описі. Відчувається чуйність, м'якість та
              відповідальність до кожного Покупця з боку продавця. Величезна
              подяка за подаруночок! Дуже приємненько!)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
