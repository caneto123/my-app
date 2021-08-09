<template>
  <div class="mensajes container pa-6">
    <div class="row justify-start textPrincipal mb-2 rounded-lg">
      <div class="col-md-11">
        <h1>Pacientes</h1>
        <p>Consulta informaciones de tus pacientes...</p>
      </div>
    </div>
    <div class="row mx-auto justify-space-between my-1">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Busca clientes por el nombre,laocupación, el número de identificación contacto..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <v-btn class="btnOne ml-2" elevation="2" color="#ea9f77">
          <v-icon left color="white"> mdi-account-search-outline </v-icon>
          <span class="white--text">Buscar</span>
        </v-btn>
      </div>
    </div>
    <div class="test1">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        v-for="person in team"
        :key="person.name"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ person.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ person.role }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ person.edad }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar size="100" class="grey lighten-2">
            <v-img :src="person.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn class="btnOne" elevation="2" color="#ea9f77">
            <v-icon left color="white"> mdi-details </v-icon>
            <span class="white--text">Detalles</span>
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">OVERLINE</div>
            <v-list-item-title class="text-h5 mb-1">
              Marcos Medina
            </v-list-item-title>
            <v-list-item-subtitle
              >Greyhound divisely hello coldly
              fonwderfully</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80">
            <v-img
              max-height="80"
              max-width="80"
              src="https://i.pravatar.cc/150?u=fake@pravatar.com"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn class="btnOne" elevation="2" color="#ea9f77">
            <v-icon left color="white"> mdi-details </v-icon>
            <span class="white--text">Detalles</span>
          </v-btn>
        </v-card-actions>
      </v-card> -->
    </div>
    <div class="row justify-space-around my-2">
      <div class="col-md-3 test2 my-1 rounded-lg">
        <p class="text-h4 text--primary">Filtrar clientes</p>
        <p>Filtra los clientes a presentar</p>
        <v-select :items="items" label="Todos los clientes" dense outlined>
        </v-select>
        <v-select :items="items" label="Clientes de Montevideo" dense outlined>
        </v-select>
        <v-select :items="items" label="Clientes de Pando" dense outlined>
        </v-select>
      </div>
      <div class="col-md-3 test2 my-1 rounded-lg">
        <p class="text-h4 text--primary">Nuevos clientes</p>
        <div>
          <p>Evolución de nuevos clientes en las últimas 6 semanas</p>
          <div class="progress my-6">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 90%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="progress my-6">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <div class="col-md-3 test2 my-1 rounded-lg">
        <p class="text-h4 text--primary">Top de clientes</p>
        <p>
          Consulta cuáles los clientes con más mensajes enviados manualmente en
          el mes actual
        </p>
        <div class="text-center">
          <v-slider
            v-model="length"
            color="red darken-4"
            min="1"
            max="15"
            label="Custom length"
          ></v-slider>
          <v-rating
            v-model="rating"
            :length="length"
            color="red lighten-3"
            background-color="grey lighten-1"
            large
          ></v-rating>
          <div>
            <span class="text-caption text-uppercase">model:</span>
            <span class="font-weight-bold">
              {{ rating }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Carlos Pacheco",
          role: "Web developer",
          genero: "masculino",
          avatar: "/avatar-4.jpg",
          edad: "21",
        },
        {
          name: "Alba Toro",
          role: "Diseñador gráfico",
          avatar: "/avatar-2.jpg",
          edad: "32",
        },
        {
          name: "Jair Díaz",
          role: "Barbero",
          avatar: "/avatar-3.jpg",
          edad: "52",
        },
      ],
    };
  },
};
</script>

<style scoped>
.textPrincipal h1 {
  color: #676a6c;
}
.textPrincipal p {
  color: #888888;
}
.box {
  margin-top: 1rem;
  padding: 1rem;
}
.boxTwo {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}
.boxThird {
  padding: 5rem;
}
.test1 {
  display: flex;
}
</style>
