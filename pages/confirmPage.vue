<template>
  <div id='app' class='container'>
    <div class="cart">
        <div class="summary">
          <table class="table table-cart">
            <tr>
              <th class="" colspan="4">
                <i class="fas fa-shopping-cart"></i>ショッピングカート
              </th>
            </tr>
            <tr v-for="(item, index) in cartItems" :key="item.id">
              <td> {{ this.$route.query.title }}</td>
              <td> ￥{{ this.$route.query.price }}</td>
              <td>{{ this.$route.query.qty}}点</td>
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
          <router-link to="/confirmPage">注文を確定する</router-link>
        </div>
      </div>
  </div>
</template>