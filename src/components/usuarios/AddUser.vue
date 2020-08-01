<template>
  <div class="container mt-5">
    <h3>Novo Usuário</h3>

    <form @submit.prevent="save">
      <div class="col-sm-8">
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model="modelo.name"
          />
        </div>
        <div class="form-group ">
          <label for="lastname">Sobrenome</label>
          <input
            type="text"
            id="lastname"
            class="form-control"
            v-model="modelo.lastname"
          />
        </div>
        <div class="form-group ">
          <label for="email">Email</label>
          <input
            type="mail"
            id="email"
            class="form-control"
            v-model="modelo.email"
          />
        </div>
        <div class="form-group ">
          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="modelo.password"
          />
        </div>
        <div class="form-group ">
          <label for="confirm">Confirme a Senha</label>
          <input
            type="password"
            id="confirme"
            class="form-control"
            v-model="confirm"
          />
        </div>
        <div class="float-right ">
          <button
            class="btn btn-success"
            type="submit"
            v-if="modelo.password === confirm"
          >
            Salvar
          </button>
          <button class="btn btn-success" type="submit" v-else disabled="true">
            Salvar
          </button>
          <router-link class="btn btn-danger ml-3" to="/usuarios"
            >Cancelar</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddUser",
  data: () => {
    {
      return {
        modelo: {},
        confirm: {},
      };
    }
  },
  methods: {
    insert() {
      const data = this.modelo;
      this.$http.post("user_save", data).then((res) => {
        console.log(res);
      });
    },
    save() {
      this.insert();
      this.$router.push("/users");
    },
  },
};
</script>
