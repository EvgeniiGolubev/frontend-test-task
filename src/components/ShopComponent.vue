<template>
  <div class="product-card">
    <div class="product-image-wrap">
      <div class="product-image">
        <img :src="require('@/assets/phone.png')" alt="Product Image">
        <p class="overlay-button">Быстрый просмотр</p>
      </div>
      <div class="product-tips">
        <p class="tip">-14%</p>
      </div>
    </div>
    <div class="product-info">
      <p class="price">
        <span class="price-low">86 956 ₽</span>
        <span class="price-hi">99 990 ₽</span>
      </p>
      <p class="special-price">85 251 ₽</p>
      <p class="tags">Apple / Смартфон iPhone 12 Pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ</p>
    </div>
    <div class="product-rating">
      <span class="stars">
        <font-awesome-icon :icon="['fas', 'star']" style="color: #cb11ab;" />
        <font-awesome-icon :icon="['fas', 'star']" style="color: #cb11ab;" />
        <font-awesome-icon :icon="['fas', 'star']" style="color: #cb11ab;" />
        <font-awesome-icon :icon="['fas', 'star']" style="color: #cb11ab;" />
        <font-awesome-icon :icon="['fas', 'star']" style="color: #cb11ab;" />
      </span>
      <span class="rating-number">87</span>
    </div>
    <div class="product-buttons">
      <p class="button-credit">РАССРОЧКА 0-0-6</p>
      <div>
        <p class="button-order">В корзину</p>
        <font-awesome-icon :icon="['far', 'heart']" size="xl" style="color: #cb11ab;" />
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

export default {
  name: 'ShopComponent',
  components: {FontAwesomeIcon},
}

</script>

<style scoped>
.product-card {
  font-family: system,-apple-system,BlinkMacSystemFont,'Segoe UI','Segoe WP',Roboto,Ubuntu,Oxygen,Cantarell,'Fira Sans','Helvetica Neue',Helvetica,'Lucida Grande','Droid Sans',Tahoma,'Microsoft Sans Serif',sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  width: 260px;
  margin: 10px;
}

.product-image-wrap {
  position: relative;
  border-radius: 8px;
  background-color: #f6f6f9;
}

.product-image {
  position: relative;
}

.product-image img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.overlay-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  font-size: 12px;
  padding: 10px 15px;
  color: #242424;
  white-space: nowrap;
  font-weight: 600;
}

.product-tips {
  display: flex;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -24px;
  z-index: 2;
  padding: 4px;
}

.tip {
  background-color: #fff0f5;
  font-size: 16px;
  line-height: 14px;
  font-weight: 600;
  color: #cb11ab;
  padding: 1px 4px;
  border-radius: 10px;
  white-space: nowrap;
}

.product-info {
  margin-top: 4px;
}

.price {
  margin-bottom: 2px;
}

.price-low {
  font-size: 20px;
  color: #242424;
  font-weight: 700;
  margin-right: 8px;
}

.price-hi {
  font-size: 18px;
  color: #868695;
  font-weight: 700;
  text-decoration: line-through;
}

.special-price {
  font-size: 18px;
  font-weight: 700;
  color: #cb11ab;
  margin-top: 4px;
  margin-bottom: 0;
}

.tags {
  font-size: 14px;
  color: #868695;
  margin-top: 4px;
  margin-bottom: 4px;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  margin-top: 4px;
}

.stars {
  display: flex;
  align-items: center;
}

.rating-number {
  margin-left: 5px;
  font-size: 15px;
  color: #868695;
}

.product-buttons {
  margin-bottom: 4px;
  margin-top: 4px;
}

.button-credit {
  display: inline-block;
  background: #ecff4c linear-gradient(90deg,#d1fff0 0,#ecff4c 95.32%);
  color: #242424;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 15px;
  margin-top: 4px;
}

.button-order {
  display: inline-block;
  background: #cb11ab;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 25px;
  border-radius: 10px;
  margin-top: 4px;
  margin-bottom: 0;
  margin-right: 15px;
}
</style>