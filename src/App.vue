<template>
<div id="app">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        VUEMW
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <!-- Display collection title -->
    <h2 class="text-center">{{c.collection.title}}</h2>
  </header>

  <main>
    <!--  links Container  -->
    <!-- We pass the links array to the links component -->
    <!-- https://vuejs.org/v2/guide/components.html#Dynamic-Props -->
    <CollectionLinks :links="c.collection.links" @link-clicked="readCollection"></CollectionLinks>

    <!--  items Container  -->
    <!-- We pass the whole collection object to the items component -->
    <!-- https://vuejs.org/v2/guide/components.html#Dynamic-Props -->
    <CollectionItems :collection="c.collection" @link-clicked="readCollection" @refresh="readCollection"></CollectionItems>

    <!-- Template Container -->
    <!-- We pass collection.href and collection.template to the component -->
    <!-- https://vuejs.org/v2/guide/components.html#Dynamic-Props -->
    <CollectionTemplate :createurl="c.collection.href" :template="c.collection.template" @refresh="readCollection"></CollectionTemplate>
  </main>
</div>
</template>

<script>
// Module to make AJAX calls to API server
import axios from 'axios';
// Import components
import CollectionLinks from './components/CollectionLinks';
import CollectionItems from './components/CollectionItems';
import CollectionTemplate from './components/CollectionTemplate';

export default {
  name: 'App',

  // Initialization:
  // Function that runs when the component is created
	// When the app ploads, it connects to the entry point of the API, "/api/", to get a collection object
	// The collection object is stored in "c"
  created: function() {
    // AJAX request to /api/ (entry point of the app)
    this.readCollection('/api/');
  },

  // Component data
  data: function() {
    return {
      // This variable will store the Collection + JSON object returned by the server
      c: null
    }
  },

  // Components used by this component
  components: {
    CollectionItems,
    CollectionLinks,
    CollectionTemplate
  },

  // Methods
  methods: {
    readCollection: function(url) {
	    // Method to do a GET request to a URL
	    // It must be called when the user clicks on a LINK
	    // url: URL of the selected link (the "href" property of the link)
	    // http://amundsen.com/media-types/collection/format/#general
      axios.get(url)
        .then(response => {
          // If success, store data returned by the server (the collection + JSON object) in the 'c' property of the component
          this.c = response.data;
        })
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
