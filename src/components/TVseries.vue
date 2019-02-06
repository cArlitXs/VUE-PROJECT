<template>

  <div class="container">
    <h3>Template component</h3>

    <!-- <div v-for="element in item.data">
      <strong><label v-if="element.name !== 'name'">{{element.prompt}}</label></strong>
      <br>
      <label v-if="element.name !== 'name'">{{element.value}}</label>
    </div>
  </div> -->

    <div v-for="element in items.data">
        {{element.data}}
    </div>
    <!-- {{ item.value }} -->

  </div>
</template>

<script>
 // Module to make AJAX calls to API server
 import axios from 'axios';

 export default {
   name: 'TVseries',
   // Component props https://vuejs.org/v2/guide/components.html#Props
   props: [
     // This prop stores the collection.href property
     'item',
     // This prop stores the collection.template object
     'template'
   ],
   data: function() {
     return {
     }
   },
   components: {
   },
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
