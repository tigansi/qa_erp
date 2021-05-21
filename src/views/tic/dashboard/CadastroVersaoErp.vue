<template>
  <ion-page>
    <ion-header>
      <ion-toolbar id="cab">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Versão de teste</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-card-subtitle>Cadastro de versão</ion-card-subtitle>
          <ion-card-title>ERP Testado</ion-card-title>
        </ion-card-content>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="floating">ERP</ion-label>
              <ion-select>
                <ion-select-option>TOTVS</ion-select-option>
                <ion-select-option>TASY</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Versão que será testada</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </ion-list>
          <ion-grid>
            <ion-row>
              <ion-col size="10"></ion-col>
              <ion-col size="2">
                <ion-button expand="block">Salvar</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonMenuButton,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonHeader,
} from "@ionic/vue";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonMenuButton,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonHeader,
  },
});
</script>

<style>
#cab {
  --background: #00995d;
  color: white;
  font-weight: bold;
}
</style>
