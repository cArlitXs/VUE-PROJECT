<template>



  <!-- This component will receive the collection.template object available in the 'template' prop and the item.data array available in the 'data' prop.

       It will create a filled edit template combining the data and the template objects. This filled template will be available in the 'editTemplate' computed property.

       https://vuejs.org/v2/guide/computed.html#Computed-Properties

       The component should display a web form bound to the 'editTemplate' property. When the user edits this form, the 'editTemplate' property will be updated with the user data.

       When the user sends the edit form, the function "updateItem" will be called. It will send the 'editTemplate' data to the server with a PUT request.

       How to bind form inputs to data: https://vuejs.org/v2/guide/forms.html

       Listening to events: https://vuejs.org/v2/guide/events.html

     -->
  <div>

 
   <!--  <label><b>{{item.data[0].prompt}}:  {{item.data[0].value}}</b></label>
    <label><b>{{item.data[1].prompt}}:  {{item.data[1].value}}</b></label> -->

    <h1>{{item.data[0].value}}</h1>
    <div v-if=item.data[1]>
      
      <p class="font-weight-bold text-warning">Imagen del album</p>
       <p id="itemIMG" v-if="item.data[3]"><img width="300px" height="300px" :src="item.data[3].value"></p>
      <p class="font-weight-bold text-warning">{{item.data[1].prompt}}</p>
      <p>{{item.data[1].value}}</p>
      <p>{{item.data[2].prompt}}: <span class="font-weight-bold text-warning">{{item.data[2].value}} </span></p>

      <p class="font-weight-bold text-warning">Escuchala en directo:</p>
      <iframe :src="item.data[4].value" frameborder="1"></iframe>
    </div>

    

  </div>

</template>

<script>
 // Module to make AJAX calls to API server
 import axios from 'axios';

 export default {
   name: 'MusicComponent',
   // Component props https://vuejs.org/v2/guide/components.html#Props
   props: [
     // This prop stores the collection.template object
     'template',
     // This prop stores an item object
     'item'
   ],
   data: function() {
     return {
     }
   },
   computed: {
     // This prop will combine 'template' with 'item.data' to build a filled template
     editTemplate: function () {
       var e = {};
       e.data = [];
       for (var field of this.template.data) {
         for (var d of this.item.data) {
           if (d.name == field.name) {
             e.data.push(
               {
                 name: field.name,
                 prompt: field.prompt,
                 value: d.value
               }
             )
           }
         }
       }
       return e;
     }
   },
   components: {
   },
   methods: {
     updateItem: function() {
       // Method to do a PUT request to update an item
	     // The PUT request must be sent to the item.href property
	     // It must be called when the user submits the update form
	     // It must send the TEMPLATE object of the collection with the data filled by the user
	     // http://amundsen.com/media-types/collection/examples/#ex-write

       axios.put(this.item.href, {template: this.editTemplate})
            .then(function (response) {
              // Emit an event to read again the collection
              // The App component will listen to the 'refresh' event and it will call the readCollection method
              this.$emit('refresh', this.item.href);
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