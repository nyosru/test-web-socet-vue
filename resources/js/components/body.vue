<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header">
            Body
            <span class="links">
              <router-link :to="{ name: 'index' }">товары</router-link>
              <router-link :to="{ name: 'orders' }">заказ</router-link>
            </span>
          </div>
          <div class="card-body">

            <table class="table table-striped" v-if="re && re.length">
              <thead>
                <tr>
                  <th scope="col">товар</th>
                  <th scope="col">колво</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <test-item v-for="i in re" :key="i.id" :it="i" :deleteItem="deleteItem" />
              </tbody>
            </table>

            <div v-else class="alert text-center alert-warning p2">
              Список пуст, скоро придут данные с вебсокета и список обновится ( я должен
              запустить сервер что веб сокеты обрабатывают (на боевом он постоянно будет
              работать и перезапускаться при падениях) , напишите мне )
            </div>
          </div>
        </div>

        <br />
        <br />

        <router-link :to="{ name: 'index' }">смотрим товары</router-link>
        <br />
        (раз в 1-2 минуты сервер websocet отправляет данные, список обновляется (смотрите
        в логе), записываем в локальные данные чтобы работала страница заказа)
        <br />
        <router-link :to="{ name: 'orders' }">смотрим заказ</router-link>
        <br />
        ( показ реактивных данных , исползуются роуты , обновление по сокетам тоже идёт)
        <br />
        <br />
        Сделал это
        <br />
        Сергей 89-222-6-222-89 пишите в телеграм
        <br />
        <br />
        чтобы выдержать нагрузку 100к посетителей, это без проблем, подготовленное решение
        провести тесты по нагрузке, спланирую подготовку и отправку точечную данных на
        устройство пользователя будет норм
        <br />
        <br />
        <br />
        vuex не нужен в vue3, в ней реализован функционал для работы с реактивными данными, быстро удобно
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import testItem from "./testItem.vue";

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

  methods: {
    deleteItem(stringName) {
      if (confirm("удалить " + stringName + " ?")) {
        const { re } = Orders();
        re.value = re.value.filter(function (n) {
          return n.name != stringName;
        });
      }
    },
  },
};
</script>

<style lang="scss">
.links {
  float: right;
  .active {
    background-color: orange;
  }
}

pre {
  max-height: 300px;
  overflow: auto;
}
</style>
