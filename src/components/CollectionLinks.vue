<template>
  <div>

    <!--
         Inside this component you should display the collection.links object available in the 'links' prop.

         When the user clicks on a link, the component should emit an event to call the function "readCollection" defined in the 'App' component.
       -->

    <!-- https://vuejs.org/v2/guide/components.html#Custom-Events -->

    <!-- Listening to events: https://vuejs.org/v2/guide/events.html -->

    <!-- Props: https://vuejs.org/v2/guide/components.html#Dynamic-Props -->

    <h3>Links component</h3>
    <!-- TODO --> 
  </div>

</template>

<script>

 export default {
   name: 'CollectionLinks',
   /* https://vuejs.org/v2/guide/components.html#Dynamic-Props*/
   props: [
     // This prop stores the collection.links array
     //Que solo aparecen los enlaces de tipo collection
     'links'
   ],
   data: function() {
     return {
     }
   },
   components: {
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
     }
   }
 }
</script>

<style scoped>

</style>
