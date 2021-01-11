<template>
  <div class="newproject container my-5">
    <!-- Sacar del navbar y vincular al botón de editar del proyecto -->
    <section class="formulario p-5">
        <h4 class="mb-4">Editar proyecto</h4>
        <b-form @submit.prevent="editProject" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Nombre del proyecto" label-for="input-1">
              <b-form-input id="input-1" v-model="project.title" placeholder="Fotografía y ciudad." required></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Institución o territorio" label-for="input-2">
              <b-form-input id="input-2" v-model="project.place" placeholder="Junta de vecinos Plaza Ratón." required></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="Link de imagen" label-for="input-3">
              <b-form-input id="input-3" v-model="project.img" placeholder="Copia y pega el link de la imagen que quieras usar" required></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="Breve descripción del proyecto" label-for="input-3">
            <b-form-textarea id="textarea" v-model="project.description" placeholder="En 100 caracteres escribe en qué consiste y para quién." rows="3" max-rows="6"></b-form-textarea>
          </b-form-group>
          <!-- <b-form-file class="mb-3" v-model="project.img" :state="Boolean(project.img)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..."></b-form-file> -->
          <!-- <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div> -->

          <b-button type="submit" variant="warning">Editar</b-button>
          <b-button class="mx-2" type="reset" variant="secondary">Borrar</b-button>
        </b-form>        
    </section>
  </div>
</template>

<script>
export default {
  name: 'Nuevo',
    data() {
        return {
        project: {
            title: '',
            place: '',
            description: '',
            img: '',
            id: ''
            // img: null
        },
        show: true
        }
    },
    methods: {
        editProject() {
            if(this.project.title && this.project.place && this.project.description && this.project.img) {
                console.log('llena formulario');
                let data = {
                    title: this.project.title,
                    place: this.project.place,
                    description: this.project.description,
                    img: this.project.img,
                };
                console.log(data);
                this.$store.dispatch('editandoProyecto', data);
                console.log('Editando');                
            } else {
                console.log('No entra');
            }
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.project.name = ''
            this.project.place = ''
            this.project.img = ''
            this.project.description = ''         
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
    }
}
</script>

<style scoped lang="scss">
.formulario {
  background-color: #ffffff;
//   border-radius: 3%;
  outline-style: solid;
  outline-color: #e9e8e8;
  outline-width: 1px;
}
h2 {
  margin-bottom: 5em;
}
</style>