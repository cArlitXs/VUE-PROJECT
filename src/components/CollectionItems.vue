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
    <h3>Items component</h3>

    <div v-for="item in collection.items" class="card bg-light"style="margin: 10px">
      <div v-for="movie in item.data">
        <p class="card-header" style="margin: 10px">
          {{ movie.value }}
        </p>
      </div>
    </div>

  </div>

</template>

<script>
 import axios from 'axios';
 // Import components
 import EditForm from './EditForm';
 // TODO: import components for the 5 item types

 export default {
   name: 'CollectionItems',
   props: [
     // This prop stores the collection object
     'collection'
   ],
   data: function() {
     return {
     }
   },
   components: {
     EditForm
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
     }
   }
 }
</script>

<style scoped>

</style>
