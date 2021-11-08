import {
    ref,
    //     // computed
    watchEffect,
} from 'vue'

// import axios from "axios";

import io from "socket.io-client";
// var socket = io.connect("http://localhost:6001");
// var socket = io.connect("http://localhost:4007");
// var socket = io.connect("http://localhost:4008");
var socket = io.connect("http://test.php-cat.com:4008");
// var socket = io.connect("http://test.php-cat.com:6001", { transports : ['websocket'] });
// var socket = io.connect("http://test.php-cat.com:4000", { transports : ['websocket'] });

const orders = ref({})

// const addItems = (data) => {
//     orders.value.push(data);
// };

const re1 = ref([])
const re = ref([])



const creatList = (data) => {

    //     //orders.value.push(data);
    console.log('creatList', data);

    if (data && data.length) {
        //         // console.log(222);

        re.value = [];

        let ar = [];

        //         // let cart = [];
        let element = {};
        let aa = {};

        data.forEach(el => {

            if (ar[el.productName]) { } else {

                ar[el.productName] = true;

                aa = data.filter(function (n) {
                    return n.productName == el.productName;
                }).reduce(function (sum, current) {
                    return sum + parseFloat(current.productCount);
                }, 0);
                ;


                element = new Object;
                element['ar'] = el;
                element['name'] = el.productName;
                element['kolvo'] = aa;
                //             // // cart.push({ element: element });

                re.value.push(element);

            }

            //             if ( ar[el.productName] ) {
            //                 ar[el.productName] += parseInt(el.productCount);
            //                 // console.log('444', ar[el.productName]);
            //             }
            //             else {
            //                 ar[el.productName] = parseInt(el.productCount);
            //                 // console.log('444 22', ar[el.productName]);
            //             }

        });

        console.log(555, re.value);

        // //         ar.forEach(function (item, i, arr) {
        // //             // alert(i + ": " + item + " (массив:" + arr + ")");
        // //             console.log(222, item, i, arr);

        // //         });

        //         // ar.forEach(el => {
        //         //     var element = {},
        //         //         cart = [];
        //         //     element.id = id;
        //         //     element.quantity = quantity;
        //         //     cart.push({ element: element });
        //         // }

        //         re.push(ar);

        //         console.log('res',re.value);
    }

};

socket.on("newdata", (fetchedData) => {

    // this.fillData(fetchedData);

    console.log("fetchedData", fetchedData);
    // re.value = fetchedData;
    // re1.value = fetchedData;
    creatList(fetchedData);

    // this.creatList(fetchedData)
    //   this.addItem(fetchedData);
    // this.orders.push(fetchedData);
    // const { addItem } = Orders();
    // addItem(fetchedData);

});



// watchEffect(() => {
//     creatList(re1.value)
// });


export default function Order() {
    return {
        re,
        re1,
        orders,
        // addItems,
    }
}
