<template>
  <div class="container">
    <!-- Inside this component you should display the collection.items object available in the 'collection' prop.

         This component will display a basic 'item' container for each item in the collection.items array. It will display:

       - The item data
       - A link to the item url available in item.href
       - A link/button for deleting the item
       - The edit form component


         Depending on the collection.type property available in the 'type' prop, the items will be:

       - books
       - movies
       - TV series
       - videogames
       - music albums

         This component should display the right component for each collection type. E.g. if it is a "books" collection, the component "items-books" must be displayed, showing the books in the appropriate format; if it is a "movies" collection, the component "items-movies" must be displayed, showing the movies in the appropriate format.

         https://vuejs.org/v2/guide/conditional.html


         When the user clicks on the item link, the function "processLink" will be called.

         When the user clicks on the delete button, the function "deleteItem" will be called.

       -->

    <!-- https://vuejs.org/v2/guide/components.html#Custom-Events -->

    <!-- Listening to events: https://vuejs.org/v2/guide/events.html -->

    <!-- Props: https://vuejs.org/v2/guide/components.html#Dynamic-Props -->
    <div v-if="collection.type == 'index'">
      <div class="jumbotron jumbotron-fluid card">
        <div class="container">
          <h1 class="display-4">VUEMW</h1>
          <p class="lead">Proyecto hecho en VUE.JS</p>
        </div>
      </div>

      <!--Pablo-->
      <div class="row">
        <div class="col-md-4 p-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Pablo Server</h5>
              <h6 class="card-subtitle mb-2 text-muted">Programador</h6>
              <p class="card-text">Me gustan las patatas con olor a queso</p>
              <div class="row">
                <div class="col-6">
                  <a href="https://github.com/server14049" class="btn btn-outline-info col-12">GitHub</a>
                </div>
                <div class="col-6">
                  <a href="#" class="btn btn-outline-warning col-12">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Carlos-->
        <div class="col-md-4 p-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Carlos Alvarez L.</h5>
              <h6 class="card-subtitle mb-2 text-muted">Diseñador</h6>
              <p class="card-text">Tengo un chucho que te arranca la cabeza si te pones subnormal</p>
              <div class="row">
                <div class="col-6">
                  <a href="https://github.com/cArlitXs" class="btn btn-outline-info col-12">GitHub</a>
                </div>
                <div class="col-6">
                  <a href="mailto:carlitosalvarezlinares@gmail.com" class="btn btn-outline-warning col-12">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Nico-->
        <div class="col-md-4 p-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">M. Nicolás Viñals C.</h5>
              <h6 class="card-subtitle mb-2 text-muted">Programador</h6>
              <p class="card-text">Demasiadas lagunas en este cursos, aun que solventadas todas.</p>
              <div class="row">
                <div class="col-6">
                  <a href="https://github.com/nubfragger" class="btn btn-outline-info col-12">GitHub</a>
                </div>
                <div class="col-6">
                  <a href="mailto:marcosnicovi@gmail.com" class="btn btn-outline-warning col-12">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Nelson-->
        <div class="col-md-4 p-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nelson Ramos</h5>
              <h6 class="card-subtitle mb-2 text-muted">Programador</h6>
              <p class="card-text">Descripción</p>
              <div class="row">
                <div class="col-6">
                  <a href="https://github.com/NelsonRg2" class="btn btn-outline-info col-12">GitHub</a>
                </div>
                <div class="col-6">
                  <a href="#" class="btn btn-outline-warning col-12">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Angel-->
        <div class="col-md-4 p-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ángel Cava</h5>
              <h6 class="card-subtitle mb-2 text-muted">Programador</h6>
              <p class="card-text">Se meten conmigo por ser el más bajito</p>
              <div class="row">
                <div class="col-6">
                  <a href="https://github.com/cava17722" class="btn btn-outline-info col-12">GitHub</a>
                </div>
                <div class="col-6">
                  <a href="#" class="btn btn-outline-warning col-12">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="item in collection.items" class="card p-2 m-2">
      <div>
        <MoviesComponent :item="item" :template="collection.template" v-if="collection.type=='movie'"></MoviesComponent>
        <BookComponent :item="item" :template="collection.template" v-if="collection.type=='book'"></BookComponent>
        <TVSeriesComponent :item="item" :template="collection.template" v-if="collection.type=='tvseries'"></TVSeriesComponent>
        <MusicComponent :item="item" :template="collection.template" v-if="collection.type=='music'"></MusicComponent>
        <VideoGameComponent :item="item" :template="collection.template" v-if="collection.type=='VideoGame'"></VideoGameComponent>
      </div>
      <hr>
      <div class="row">
        <div class="col-12">
        <!-- Button trigger modal -->
        <button type="button"class="btn btn-warning m-1" data-toggle="modal" :data-target="'#' + item.href.replace(/\//g,'')">
          <i class="fas fa-trash"></i> Borrar
        </button>
        <!-- Modal -->
        <div class="modal fade" :id="item.href.replace(/\//g,'')" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5 class="modal-title" id="exampleModalLabel">Borrar elemento</h5>
                <button type="button" class="close bg-danger" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" style="color:white;">&times;</span>
                </button>
              </div>
              <div class="modal-body bg-dark">
                <p>
                  ¿Desea borrarlo permamentemente?
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> Cerrar</button>
                <button type="button" class="btn btn-danger" v-on:click="deleteItem(item)" data-dismiss="modal"><i class="fas fa-trash"></i> Borrar</button>
              </div>
            </div>
          </div>
        </div>
          <button class="btn btn-secondary m-1" v-if="collection.kind == 'collection'" v-on:click="processLink(item, $event)"><i class="fas fa-info-circle"></i> Detalles</button>
          <button v-if="item.data[1]" class="btn btn-info m-1" v-on:click="activo=!activo"><i class="fas fa-edit"></i> Editar</button>
        </div>
      </div>
      <EditForm v-show="activo" @refresh="refresh" :template="collection.template" :item="item" v-if="item.data[1]"></EditForm>
    </div>

  </div>
</template>

<script>
 import axios from 'axios';
 // Import components
 import EditForm from './EditForm';
 // TODO: import components for the 5 item types
 import MoviesComponent from './MoviesComponent';
 import BookComponent from './BookComponent';
 import TVSeriesComponent from './TVSeriesComponent';
 import MusicComponent from './MusicComponent';
 import VideoGameComponent from './VideoGameComponent';

 export default {
   name: 'CollectionItems',
   props: [
     // This prop stores the collection object
     'collection'
   ],
   data: function() {
     return {
       activo : false
     }
   },
   components: {
     EditForm,
     MoviesComponent,
     BookComponent,
     TVSeriesComponent,
     MusicComponent,
     VideoGameComponent
     // TODO: add custom components for each of the four item categories
   },
   methods: {
     // Function to process the click event on a link
     // https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers
     // link: the link clicked
     // event: the event object
     processLink: function(link, event) {
       // Prevent <a> element to load the url
       event.preventDefault();
       // Emit the event link-clicked. The App component will listen to it and it will call the readCollection function.
       this.$emit('link-clicked', link.href);
     },
     // Function that runs to reload the item.url after an item update
     refresh: function(url) {
       this.$emit('refresh', url);
     },
     deleteItem: function(item) {
	     // Method to do a DELETE request to delete an item
	     // item: the item to be deleted
	     // It must be called when the user clicks on the DELETE ITEM button for a given item
	     // http://amundsen.com/media-types/collection/format/#general
       axios.delete(item.href)
            .then(function (response) {
              // Emit an event to read again the collection
              // The App component will listen to the 'refresh' event and it will call the readCollection method
              this.$emit('refresh', this.collection.href);
            }.bind(this))
            .catch(e => {
              // If error, display in console
              console.log(e);
            });
     },
   }
 }
</script>

<style scoped>

</style>
