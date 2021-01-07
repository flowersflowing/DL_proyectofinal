<template>
  <div class="newproject container my-5">
    <section class="formulario p-5">
        <h4 class="mb-4">Comienza un nuevo proyecto</h4>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Nombre del proyecto" label-for="input-1">
            <b-form-input id="input-1" v-model="proj.name" placeholder="Fotografía y ciudad." required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Institución o territorio" label-for="input-2">
            <b-form-input id="input-2" v-model="proj.place" placeholder="Junta de vecinos Plaza Ratón." required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Breve descripción del proyecto" label-for="input-3">
          <b-form-textarea id="textarea" v-model="proj.description" placeholder="En 100 caracteres escribe en qué consiste y para quien." rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="warning">Submit</b-button>
        <b-button class="mx-2" type="reset" variant="secondary">Reset</b-button>
        </b-form>        
    </section>
  </div>
</template>

<script>
export default {
  name: 'Nuevo',
    data() {
        return {
        proj: {
            name: '',
            place: '',
            description: ''
        },
        show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.name = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        // Agregar función para enviar los datos a firebase 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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