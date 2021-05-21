<template>
  <ion-page>
    <ion-content>
      <ion-split-pane content-id="main">
        <Menu />
        <ion-router-outlet id="main"></ion-router-outlet>
      </ion-split-pane>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent, IonSplitPane, IonRouterOutlet } from "@ionic/vue";

import Menu from "./menu/Menu.vue";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonSplitPane,
    IonRouterOutlet,
    Menu,
  },
});
</script>

<style></style>
