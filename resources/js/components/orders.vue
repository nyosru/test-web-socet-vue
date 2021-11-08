<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <div class="card-header">
            Body
                          <span class="links">
                    <router-link :to="{ name: 'index' }">товары</router-link>
                    <router-link :to="{ name: 'orders' }">заказ</router-link>
              </span>

          </div>
          <div class="card-body">

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">товар</th>
                  <th scope="col">колво</th>
                </tr>
              </thead>
              <tbody>
                <test-item v-for="i in re" :key="i.id" :it="i" />
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testItem from "./ordersItem.vue";

import Orders from "./../modules/Order.ts";

export default {
  components: {
    testItem,
  },

  setup(props) {
    const { re, re1, orders } = Orders();

    return {
      re,
      re1,
      orders,
    };
  },
};
</script>


<style lang="scss">
.links {
  float: right;
  a{
      padding: 0 15px;
  }
  .active {
    background-color: orange;
  }
}
</style>
