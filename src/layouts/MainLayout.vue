<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="chevron_right"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-grey-10 text-h6" id="title-font">
          Tictactoe
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-blue-grey-4 text-white">

        <div class="flex flex-center">
          <div class="row q-my-sm q-gutter-sm">
            <q-btn
              flat
              round
              href="https://www.facebook.com/Banzzay-105578805218330"
              icon="fa-brands fa-github"
              color="grey-1"
            />
            <q-btn
              flat
              round
              href="https://twitter.com/BanzzayOfficial"
              icon="fab fa-twitter"
              color="grey-1"
            />
            <q-btn
              flat
              round
              href="https://www.instagram.com/banzzayofficial/"
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
    const leftDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
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
