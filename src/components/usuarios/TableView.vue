<template>
  <div class="container">
    <table class="table table-stripped">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reg in registros" :key="reg.id">
          <td>{{ reg.name }}</td>
          <td>{{ reg.lastname }}</td>
          <td>{{ reg.email }}</td>
        </tr>
      </tbody>
    </table>
    <ButtonUrl
      url="/adduser"
      btnClass="btn btn-success rounded-circle"
      fa="fa fa-plus"
    />
  </div>
</template>
<script>
import ButtonUrl from "../buttons/ButtonUrl";
export default {
  name: "TableView",
  components: {
    ButtonUrl,
  },
  data: () => {
    return {
      registros: {},
    };
  },
  methods: {
    show() {
      this.$http.get("user_show").then((res) => {
        this.registros = res.data;
      });
    },
  },
  created() {
    this.show();
  },
};
</script>
