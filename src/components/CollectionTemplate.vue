<template>
  <!-- This component will build a web form to display the collection.template available in the 'template' prop. This form will be bound to the 'template' prop. When the form is submitted, the method 'createItem' will be called to send the data to the server and create a new item. -->
  <!-- How to bind form inputs to data: https://vuejs.org/v2/guide/forms.html -->
  <!-- Listening to events: https://vuejs.org/v2/guide/events.html -->

  <!--ESTE FUNCIONA-->
  <!--<div class="container">
    <button class="btn btn-secondary m-1 btn-sm" v-on:click="activo=!activo">+</button>
    <div v-show="activo" class="card p-2 m-2">
      <div class="form-group" v-for="item in template.data">
        <div class="row">
          <div class="col-md-3">
            <label>{{item.prompt}}: </label>
          </div>
          <div class="col-md-6">
            <input class="form-control" v-model="item.value" :type="item.type" :name="item.name" v-if="item.type!='textarea'" :placeholder="item.prompt + '...'">
            <textarea class="form-control" v-model="item.value" :type="item.type" :name="item.name" v-if="item.type=='textarea'" :placeholder="item.prompt + '...'" rows="6"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success btn-sm" v-on:click="createItem(item)">Crear Nuevo</button>
        </div>
      </div>
    </div>
  </div>-->

  <div class="container">
    <button class="btn btn-secondary m-1 btn-sm" v-on:click="activo=!activo"  data-toggle="modal" data-target="#modalNew">+</button>
    <div class="modal fade bd-example-modal-lg" id="modalNew" tabindex="-1" role="dialog" aria-labelledby="modalNewLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4>Crear un nuevo item</h4>
            <button type="button" class="close bg-danger" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-show="activo" class="card p-2 m-2 sinColor">
              <div class="form-group" v-for="item in template.data">
                <div class="row">
                  <div class="col-md-3">
                    <label>{{item.prompt}}: </label>
                  </div>
                  <div class="col-md">
                    <input class="form-control" v-model="item.value" :type="item.type" :name="item.name" v-if="item.type!='textarea'" :placeholder="item.prompt + '...'">
                    <textarea class="form-control" v-model="item.value" :type="item.type" :name="item.name" v-if="item.type=='textarea'" :placeholder="item.prompt + '...'" rows="6"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button class="btn btn-success btn-md" v-on:click="createItem(item)">Crear Nuevo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Module to make AJAX calls to API server
import axios from "axios";

export default {
  name: "CollectionTemplate",
  // Component props https://vuejs.org/v2/guide/components.html#Props
  props: [
    // This prop stores the collection.href property
    "createurl",
    // This prop stores the collection.template object
    "template"
  ],
  data: function() {
    return {
      activo : false
    };
  },
  components: {},
  methods: {
    createItem: function() {
      // Method to do a POST request to create an item in a collection
      // The POST request must be sent to the collection.href property of the collection object
      // It must be called when the user clicks on the CREATE ITEM button
      // It must send the TEMPLATE object of the collection with the data filled by the user
      // http://amundsen.com/media-types/collection/examples/#ex-write

       // Post to the collection url, available in this.createurl
       // We send the 'template' prop, which is bound to the form
       axios.post(this.createurl, {template: this.template})
            .then(function (response) {
              // Emit an event to read again the collection
              // The App component will listen to the 'refresh' event and it will call the readCollection method
              this.$emit('refresh', this.createurl);
            }.bind(this))
            .catch(e => {
              // If error, display in console
              console.log(e);
            });
     }
   }
 }
</script>

<style scoped>
</style>
