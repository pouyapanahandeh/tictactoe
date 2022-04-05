<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="bg-white text-black q-ma-md">
      <q-toolbar>
        <q-toolbar-title class="text-grey-10 text-h6" id="title-font">
          Tictactoe
        </q-toolbar-title>
        <q-space />
        <q-btn round flat icon="info" class="" @click="fixed = true"/>
      </q-toolbar>
    </q-header>
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Terms of Agreement</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-blue-grey-4 text-white">
      <div class="flex flex-center">
        <div class="row q-my-sm q-gutter-sm">
          <q-btn
            flat
            round
            href="https://github.com/pouyapanahandeh/tictactoe"
            icon="fa-brands fa-github"
            color="grey-1"
          />
          <q-btn
            flat
            round
            href="https://www.linkedin.com/in/pouyapan/"
            icon="fa-brands fa-linkedin"
            color="grey-1"
          />
          <q-btn
            flat
            round
            href="https://www.instagram.com/pouyapanahi_tobe/"
            icon="fab fa-instagram"
            color="grey-1"
          />
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      fixed: ref(false)
    };
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap");

#title-font {
  font-family: "Nunito", sans-serif;
}
</style>
