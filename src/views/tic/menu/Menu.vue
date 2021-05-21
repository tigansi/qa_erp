<template>
  <ion-menu content-id="main" side="start" type="push" id="main-menu">
    <ion-header>
      <ion-toolbar id="cab">
        <ion-title>QA ERP</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <!--
        <ion-list-header>
          <h2>Páginas</h2>
        </ion-list-header>
        teste
        -->
        <ion-menu-toggle auto-hide="false">
          <ion-item button @click="$router.push('/HomePainelTic/MeuPainel')">
            <ion-icon slot="start" :icon="easel"></ion-icon>
            <ion-label>
              <span>Dashboard</span>
            </ion-label>
          </ion-item>
          <ion-item
            button
            @click="$router.push('/HomeDashboardTic/CadastroVersaoErp')"
          >
            <ion-icon slot="start" :icon="gitBranch"></ion-icon>
            <ion-label>
              <span>Versão do ERP</span>
            </ion-label>
          </ion-item>

          <!--
          <ion-item button @click="$router.push('/HomePainelTic/Relatorio')">
            <ion-icon slot="start" name="stats-chart"></ion-icon>
            <ion-label>
              <span>Relatório dos testes</span>
            </ion-label>
          </ion-item>
          -->

          <ion-item button @click="logOut">
            <ion-icon slot="start" :icon="close"></ion-icon>
            <ion-label>
              <span>Sair</span>
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
    <ion-footer>
      <center>
        <p style="font-size: 15px; margin-bottom: 0" class="ion-text-center">
          Bem vindo(a) <strong></strong>
        </p>
        <ion-img
          class="ion-padding img_unimed"
          :src="require('../../../assets/logo_unimed_normal.png')"
        >
        </ion-img>
      </center>
    </ion-footer>
  </ion-menu>
</template>

<script>
import { defineComponent } from "vue";
import { close, gitBranch, easel } from "ionicons/icons";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonFooter,
  IonImg,
} from "@ionic/vue";
export default defineComponent({
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonFooter,
    IonImg,
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      //
    },
  },
  mounted() {
    /*var dados = JSON.parse(localStorage.getItem("dados_usuario"));
    this.nm_usuario_logado = dados.nm_usuario;*/
    //console.log(this.nm_usuario_logado);
  },
  setup() {
    return {
      close,
      gitBranch,
      easel,
    };
  },
});
</script>

<style>
.img_unimed {
  width: 180px;
}
ion-icon {
  /*color: #f47920;*/
  color: rgb(177, 211, 75);
}
#cab {
  --background: #00995d;
  color: white;
  font-weight: bold;
}
</style>
