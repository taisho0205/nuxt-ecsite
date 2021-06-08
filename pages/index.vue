<template>
  <div id="app" class="container">
    <h1>ショッピングカート</h1>
    <div class="flex-container">
      <!-- 一覧表示 -->
      <div class="flex-item">
        <div class="row" v-for="item in items" :key='item.id'>
          <div class="contents">
            <div>
              <img :src="item.image" alt="">
            </div>
            <div>{{item.title}}</div>
            <div>{{item.price | formatCurrency}}</div>
            <input v-model="item.qty" type="number" min="1" />
            <button @click="addToCart(item)" class="button button-outline">カートに入れる</button>
          </div>
        </div>
      </div>
      <!-- カート -->
      <div class="cart">
        <div class="summary">
          <table class="table table-cart">
            <tr>
              <th class="" colspan="4"><i class="fas fa-shopping-cart"></i>ショッピングカート</th>
            </tr>
            <tr v-for="(item, index) in cartItems" :key='item.id'>
              <td>{{item.title}}</td>
              <td>{{item.qty}}点</td>
              <td>
                <a href="#" @click.stop.prevent="remove(index)"><i class="fas fa-times-circle"></i>削除</a>
              </td>
            </tr>
            <tr>
              <td colspan="2">合計</td>
              <td colspan="2">{{ totals }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
      // カンマ区切り
      // Vue.filter('formatCurrency', function (value) {
        // return '¥' + String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      // });
      
  export default{
    data() {
      return {
        cartItems: [], //カート追加済みの商品
        items:[
          { id: 1, title: '商品1', price: 100, qty: 1, image: '/images/thumbnail_01.jpeg' },
          { id: 2, title: '商品2', price: 500, qty: 1, image: '/images/thumbnail_02.jpeg' },
          { id: 3, title: '商品3', price: 1000, qty: 1, image: '/images/thumbnail_03.jpeg' },
          { id: 4, title: '商品4', price: 5000, qty: 1, image: '/images/thumbnail_04.jpeg' },
          { id: 5, title: '商品5', price: 10000, qty: 1, image: '/images/thumbnail_05.jpeg' },
        ], //商品一覧
        total: 0
      } 
    },
    computed: {
      totals: function() {
        // let total = 0;
        // this.cartItems.forEach(item => {
        //   total += (item.price * item.qty);
        // });
        return this.total;
      }
    },

    methods: {
      // カートに追加
      addToCart(itemToAdd) {
        let existence = false;

        this.cartItems.forEach(item => {
          // すでにカートに追加済みの場合は価格を加算
          if (item.id === itemToAdd.id) {
            existence = true;
            item.qty += Number(itemToAdd.qty);
          }
        });

        // 新規商品の場合は商品を追加
        if (existence === false) {
          // this.cartItems.push(Vue.util.extend({}, itemToAdd));
        }

        itemToAdd.qty = 1;
      },
      // カートから削除
      remove(index) {
        this.cartItems.splice(index, 1)
      }

    }
  }

</script>

<style scoped>
 .flex-container {
    display: flex;
  }
  .cart {
    flex-grow: 1;
    margin: 20px;
    position: relative;
  }
  .summary {
    background-color: #f6f6f6;
    position: fixed;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #EDEDED;
    box-shadow: 1px 0 5px 4px rgba(85, 144, 184, 0.6);
    width: 400px;
  }
  .flex-item{
    padding: 10px;
    border-radius: 10px;
  }
  .contents {
    display: flex;
    justify-content: space-between;
    border-top: 1px gray solid;
    border-top: 1px gray solid;
    padding: 10px;
  }
  .contents *:nth-child(1){
    width: 130px;
    height: 150px;
  }
  .contents *:nth-child(2){
    width: 120px;
  }
  .contents *:nth-child(3){
    width: 100px;
  }
  .contents *:nth-child(4){
    width: 70px;
  }
  .row{
    display: block;
    margin: 10px;
    width: 100%;
  }
  .table-cart > tr > td {
    vertical-align: middle !important;
  }

</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
