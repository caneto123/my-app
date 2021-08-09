<template>
  <div class="form pa-6">
    <div class="textPrincipal">
      <h1>Registrar el cliente</h1>
      <h5>Registra tu cliente y sigue programando la cita</h5>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <!-- nombreCompleto -->
          <v-col cols="12" md="12">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="20"
              label="Nombre completo"
              prepend-inner-icon="mdi-account"
              required
            ></v-text-field>
          </v-col>
          <!-- genero -->
          <v-col class="d-flex" cols="12" sm="4">
            <v-select
              :items="items"
              label="Género"
              prepend-inner-icon="mdi-gender-male-female"
            ></v-select>
          </v-col>
          <!-- lugarDeConsulta -->
          <v-col cols="12" md="4">
            <v-select
              v-model="e1"
              :items="location"
              menu-props="auto"
              label="Lugar de consulta"
              hide-details
              prepend-inner-icon="mdi-city"
              single-line
            >
            </v-select>
          </v-col>
          <!-- fechaDeNacimiento -->
          <v-col cols="12" sm="6" md="4">
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de nacimiento"
                  prepend-inner-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <!-- ocupacion -->
          <v-col cols="12" md="4">
            <v-text-field
              label="Ocupación"
              prepend-inner-icon="mdi-book"
              required
            >
            </v-text-field>
          </v-col>
          <!-- paisDeResidencia -->
          <v-col cols="12" md="4">
            <v-select
              v-model="e1"
              :items="states"
              menu-props="auto"
              label="Pais de recidencia"
              hide-details
              prepend-inner-icon="mdi-map"
              single-line
            >
            </v-select>
          </v-col>
          <!-- númeroMovil -->
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="phone"
              :rules="phoneRules"
              label="Número de teléfono móvil"
              prepend-inner-icon="mdi-phone"
              required
            ></v-text-field>
          </v-col>
          <!-- correoElectronico -->
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Correo electrónico"
              prepend-inner-icon="mdi-email"
              required
            ></v-text-field>
          </v-col>
          <!-- peso -->
          <v-col cols="12" md="4">
            <v-text-field
              prepend-inner-icon="mdi-weight"
              label="Peso"
            ></v-text-field>
          </v-col>
          <!-- direccion -->
          <v-col cols="12" md="4">
            <v-text-field
              label="Dirección"
              prepend-inner-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Estás de acuerdo?"
        required
      >
      </v-checkbox>
      <v-btn class="btnOne mr-3" elevation="2" color="#ea9f77">
        <span class="white--text">Validar</span>
      </v-btn>
      <v-btn class="btnOne" elevation="2" color="#ea9f77">
        <span class="white--text">Limpiar formulario</span>
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      e1: "Uruguay",
      e3: null,
      e4: null,
      firstname: "",
      phone: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 20 || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [(v) => v.length != 10 || "El télefono debe de ser valido"],
      items: ["Masculino", "Femenino", "X"],
      select: { state: "Uruguay", abbr: "UY" },
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      location: [
        "Círculo católico",
        "Casmu",
        "Hospital Británico",
        "Hospital de clínicas",
      ],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      checkbox: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.phone);
      }
      console.log(this.phone);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.textPrincipal {
  text-align: center;
  color: #676a6c;
}
</style>
