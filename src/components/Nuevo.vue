<template>
  <div class="newproject container my-5">
    <section class="formulario p-5">
        <h4 class="mb-5">Comienza un nuevo proyecto</h4>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Nombre del proyecto" label-for="input-1">
            <b-form-input id="input-1" v-model="form.name" placeholder="Fotografía y ciudad" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Institución o territorio" label-for="input-2">
            <b-form-input id="input-2" v-model="form.place" placeholder="Junta de vecinos Plaza Ratón" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>        
    </section>
  </div>
</template>

<script>
export default {
  name: 'Nuevo',
    data() {
        return {
        form: {
            name: '',
            place: ''
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
        }
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