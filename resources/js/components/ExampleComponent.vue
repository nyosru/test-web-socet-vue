<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Example Component</div>

          <div class="card-body">I'm an example component.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import io from "socket.io-client";
var socket = io.connect("http://localhost:4000");
// var socket = io.connect("http://localhost:6001");
// var socket = io.connect("http://test.php-cat.com:6001");


import { onMounted } from 'vue';

export default {

    setup(props) {
        onMounted(() => {

              socket.on('chat-message', (data) => {
                this.messages.push({
                    message: data.message,
                    type: 1,
                    user: data.user,
                });

            });
        });
    },

// created() {
// listenForBroadcast(survey_id) {
//     Echo.join('survey.' + survey_id)
//         .here((users) => {
//         this.users_viewing = users;
//         this.$forceUpdate();
//         })
//         .joining((user) => {
//         if (this.checkIfUserAlreadyViewingSurvey(user)) {
//             this.users_viewing.push(user);
//             this.$forceUpdate();
//         }
//         })
//         .leaving((user) => {
//         this.removeViewingUser(user);
//         this.$forceUpdate();
//         });
//     }
// },
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
