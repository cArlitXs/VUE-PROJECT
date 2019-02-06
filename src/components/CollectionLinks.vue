<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="https://getbootstrap.com/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          VUEMW
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!--<li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>-->
            <li class="nav-item" v-for="link in links" v-if="link.rel=='collection'">
              <a class="nav-link pl-3 pr-3" :href="link.href" @click="processLink(link, $event)">{{link.prompt}}</a>
            </li>
            <!--<li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>-->
          </ul>
          <!--<form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>-->
        </div>
      </div>
    </nav>
    <!--
         Inside this component you should display the collection.links object available in the 'links' prop.

         When the user clicks on a link, the component should emit an event to call the function "readCollection" defined in the 'App' component.
       -->

    <!-- https://vuejs.org/v2/guide/components.html#Custom-Events -->

    <!-- Listening to events: https://vuejs.org/v2/guide/events.html -->

    <!-- Props: https://vuejs.org/v2/guide/components.html#Dynamic-Props -->


    <!--<h3>Links component</h3>-->

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
