<template>
<div id="app">
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
  <header>
    <!-- Display collection title -->
    <!--<h2 class="text-center">{{c.collection.title}}</h2>-->
  </header>
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

    /*var that = this;
    window.onpopstate = function(event) {
        var currentUrl = document.URL,
        urlParts   = currentUrl.split('#')[1];
        var urlinicio = urlParts ? urlParts: "/api";
        that.readCollection(urlinicio);
      };*/

    var currentUrl = document.URL,
    urlParts   = currentUrl.split('#')[1];
    var urlinicio = urlParts ? urlParts: "/api";
    this.readCollection(urlinicio);
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
          history.pushState({}, url,"#" + url);
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
