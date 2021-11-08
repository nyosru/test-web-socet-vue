import vue from "vue";
import { createApp } from "vue";
import App from "./app.vue";


require("./bootstrap");

window.Vue = require("vue").default;

const NotFound = { template: "<h2>Page Not Found</h2>" };

import body from "./components/body.vue";
import orders from "./components/orders.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        // component: PageIndex,
        components: {
            inBody: body,
            // menu: SideMenu,
            // pHeader: null,
            // center: PageVitrin,
            // center: PageIndex,
        },
    },

    {
        path: "/orders",
        name: "orders",
        // component: PageIndex,
        components: {
            inBody: orders,
            // menu: SideMenu,
            // pHeader: null,
            // center: PageVitrin,
            // center: PageIndex,
        },
    },

    // {
    //     path: "/add",
    //     name: "add-item",
    //     // component: PageIndex,
    //     components: {
    //         // menu: SideMenu,
    //         // pHeader: null,
    //         // center: PageAddItem,
    //     },
    // },

    // {
    //     path: "/c/:catId/:itemId",
    //     name: "item_show",
    //     // component: PageIndex,
    //     components: {
    //         menu: SideMenu,
    //         // pHeader: null,
    //         // center: PageItem,
    //     },
    // },

    // {
    //     path: "/c/:catId",
    //     name: "cat_show",
    //     // component: PageIndex,
    //     components: {
    //         leftMenu: SideMenu,
    //         // pHeader: null,
    //         center: PageVitrin,
    //     },
    //     // children: [
    //     //     //item_show', params: { catId: i.cat_id, itemId: i.id } }" tag="span">
    //     //     {
    //     //         path: ":itemId",
    //     //         name: "item_show",
    //     //         // component: PageIndex,
    //     //         components: {
    //     //             leftMenu: SideMenu,
    //     //             // pHeader: null,
    //     //             center: PageItem,
    //     //         },
    //     //     },
    //     // ],
    // },

    { path: "/:pathMatch(.*)*", component: NotFound },
];

const routers = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes,
});

const app = createApp(App);
app.use(routers);
app.mount("#app");
