<template>
  <form  @submit.prevent="submitForm">
    <div class="form-control">
      <label> Firstname </label>
      <input type="text" id="firstname" v-model="firstName" required >
    </div>
      <div class="form-control">
        <label> lastname </label>
        <input type="text" id="lastname" v-model="lastName" required >
      </div>
        <div class="form-control">
          <label> Description </label>
          <textarea type="text" 
                    id="description" 
                    v-model="description">
          </textarea>
        </div>
        <div class="form-control">
          <label for="rate"> Hourly Rate </label>
          <input type="number" 
                 id="rate" 
                 v-model.number="rate" 
                  required >
        </div>
          <div class="form-control">
            <h3>Areas of Expertise</h3>
            <div>
              <input 
              type="checkbox" 
              id="frontend" 
              v-model="areas"  
              value="frontend" 
              checked>
              <label for="frontend"> Frontend Development </label>
            </div>
            <div>
              <input 
              type="checkbox" 
              id="backend" 
              v-model="areas" 
              value="backend" 
              checked>
              <label for="backend"> Backend Development </label>
            </div>
            <div>
              <input 
              type="checkbox" 
              id="carrer" 
              v-model="areas" 
              value="carrer" checked>
              <label for="carrer"> Carrer Advisory </label>
            </div>
          </div>
          <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: 0,
      areas: []
    }
  },
  methods: {
    submitForm(){
      const coachData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.rate,
        areas: this.areas
      }
      console.log(coachData);
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
