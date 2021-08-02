<template>
    <div class="mensajes container pa-6">
        <div class="row justify-start textPrincipal mb-2 rounded-lg">
            <div class="col-md-11">
                <h1>Mensajes</h1>
                <p>Envía, consulta y contesta a los mensajes de tus clientes</p>
            </div>
        </div>        
        <div class="row mx-auto justify-space-between my-1">
            <v-card class="col-md-7 test1 my-1 rounded-lg">
                <v-card-text>
                    <p class="text-h4 text--primary">Carlos Pacheco</p>
                    <p>Cliente ejemplo</p>
                    <div class="text--primary">
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sint, deleniti temporibus officia id tempora cupiditate voluptates officiis nesciunt, ducimus architecto hic veniam harum odit atque! Fugiat error accusamus deserunt.
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        @click="clear"
                    >
                    <v-icon left>
                        mdi-send
                    </v-icon>
                        Enviar
                    </v-btn>
                </v-card-actions>
            </v-card>
            <v-card class="col-md-4 test1 my-1 rounded-lg">
                <v-card-text>
                    <div>Carlos Pacheco</div>
                        <p class="text-h4 text--primary">Conversación ejemplo</p>
                        <p>Cliente ejemplo</p>
                    <div class="text--primary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sint, deleniti temporibus officia id tempora cupiditate voluptates officiis nesciunt, ducimus architecto hic veniam harum odit atque! Fugiat error accusamus deserunt.
                    </div>
                </v-card-text>               
            </v-card>
        </div>
        <div class="row  justify-space-around my-2">           
            <div  class="col-md-3 test2 my-1 rounded-lg">
                <p class="text-h4 text--primary">Filtros</p>
                <p>Define los mensajes que deseas que sean presentados</p>
                <v-select
                    :items="items"
                    label="Conversaciones abiertas"
                    dense
                    outlined

                >
                </v-select>
                <v-select
                    :items="items"
                    label="Todas las conversaciones"
                    dense
                    outlined
                >
                </v-select>                
                <v-select
                    :items="items"
                    label="Todas las categorias"
                    dense
                    outlined
                >
                </v-select>
                <v-select
                    :items="items"
                    label="Todos los clientes"
                    dense
                    outlined
                >
                </v-select>                
            </div>
            <div class="col-md-3 test2 my-1 rounded-lg">
                <p class="text-h4 text--primary">Informaciones del mes</p>                
                <div>
                    <p>Consulta las estadísticas generales de los mensajes enviados manualmente</p>
                <div class="progress my-6">    
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>                      
                </div>             
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="progress my-6">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>              
            </div>
            
            <div class="col-md-3 test2 my-1 rounded-lg">
                <p class="text-h4 text--primary">Top de clientes</p>
                <p>Consulta cuáles los clientes con más mensajes enviados manualmente en el mes actual</p>
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

<style scoped>
.textPrincipal h1{
    color: #676a6c;
    line-height: 1.5rem;     
}
.textPrincipal p{
    color: #888888;  
}
.box {  
    margin-top: 1rem;
    padding: 1rem;  
}
.boxTwo{
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
}
.boxThird {
    padding: 5rem;  
}
</style>