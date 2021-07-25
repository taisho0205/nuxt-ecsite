<template>
  <div id="app" class="container">
    <h1>ショッピングカート</h1>
    <div class="flex-container">
      <!-- 一覧表示 -->
      <div class="flex-item">
        <input
          type="button"
          value="価格の高い順"
          @click="sortedByPrice(item)"        />
        <input type="text" v-model="search" placeholder="商品を検索" />
        <div class="row" v-for="item in items" :key="item.id">
          <div class="contents">
            <div>
              <img :src="item.image" alt="" />
            </div>
            <div>{{ item.title }}</div>
            <div>¥{{ item.price }}</div>
            <input v-model="item.qty" type="number" min="1" />
            <button @click="addToCart(item)" class="button button-outline">
              カートに入れる
            </button>
          </div>
        </div>
      </div>
      <!-- カート -->
      <div class="cart">
        <div class="summary">
          <table class="table table-cart">
            <tr>
              <th class="" colspan="4">
                <i class="fas fa-shopping-cart"></i>ショッピングカート
              </th>
            </tr>
            <tr v-for="(item, index) in cartItems" :key="item.id">
              <td>{{ item.title }}</td>
              <td>¥{{ item.price }}</td>
              <td>{{ item.qty }}点</td>
              <td>
                <button @click="remove(index)">
                  <i class="fas fa-times-circle"></i>削除
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="2">合計</td>
              <td colspan="2">￥{{ sum }}</td>
            </tr>
          </table>

          <router-link to="/confirmPage" @click="jumpPage"
            >購入画面へ</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [], //カート追加済みの商品
      search: "",
      items: [
        {
          id: 1,
          title: "商品1",
          price: 100,
          qty: 1,
          image: "/images/thumbnail_01.jpeg"
        },
        {
          id: 2,
          title: "商品2",
          price: 500,
          qty: 1,
          image: "/images/thumbnail_02.jpeg"
        },
        {
          id: 3,
          title: "商品3",
          price: 1000,
          qty: 1,
          image: "/images/thumbnail_03.jpeg"
        },
        {
          id: 4,
          title: "商品4",
          price: 5000,
          qty: 1,
          image: "/images/thumbnail_04.jpeg"
        },
        {
          id: 5,
          title: "商品5",
          price: 10000,
          qty: 1,
          image: "/images/thumbnail_05.jpeg"
        }
      ], //商品一覧
      total: 0
    };
  },
  computed: {
    sortedByPrice(item) {
      items.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
});
    },
    search_items() {
      return this.items.filter(item => {
        return (
          item.title.includes(this.search) ||
          item.price.includes(this.search) ||
          item.id.includes(this.search)
        );
      });
    },
    sum: function() {
      let sum = 0;
      this.cartItems.forEach(item => {
        sum += item.price * item.qty;
      });
      return sum;
    }
  },
  methods: {
    // カートに追加(引数には何を入れるかを質問する)
    addToCart(item) {
      let isExist = false;
      this.cartItems.forEach(cartItem => {
        if (item.id === cartItem.id) {
          cartItem.qty++;
          isExist = true;
        }
      });
      if (isExist) return;
      // for (let cartItem of this.cartItems) {
      //   if (item.id === cartItem.id) {
      //     cartItem.qty++;
      //     return;
      //   }
      // }
      this.cartItems.push(item);
    },
    // カートから削除
    remove(targetItemsIndex) {
      this.cartItems.splice(targetItemsIndex, 1);
    },
    //購入画面へ遷移
    jumpPage() {
      router.push({
      title: this.addToCart.title, price: this.addToCart.price, qty: this.addToCart.qty 
      });
    }
  }
};
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
  border: 1px solid #ededed;
  box-shadow: 1px 0 5px 4px rgba(85, 144, 184, 0.6);
  width: 400px;
}
.flex-item {
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
.contents *:nth-child(1) {
  width: 130px;
  height: 150px;
}
.contents *:nth-child(2) {
  width: 120px;
}
.contents *:nth-child(3) {
  width: 100px;
}
.contents *:nth-child(4) {
  width: 70px;
}
.row {
  display: block;
  margin: 10px;
  width: 100%;
}
.table-cart > tr > td {
  vertical-align: middle !important;
}
</style>
