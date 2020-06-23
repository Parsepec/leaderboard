var app = new Vue({
  el: "#app",
  data: {
    interns: [],
    search: "",
    positions: [],
  },
  methods: {
    sort: function (arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function (a, b) {
        return b.score - a.score;
      });
    },
    makePositions: function (arr) {
      var art = arr.slice().forEach(function (intern) {
        intern.position = arr.indexOf(intern) + 1;
      });
      return art;
    },
  },
  computed: {
    filteredItems() {
      if (this.search) {
        return this.interns.filter((intern) => {
          return intern.score == this.search;
        });
      } else {
        return this.interns;
      }
    },
  },
  mounted() {
    axios.get("./data.json").then((response) => {
      this.interns = response.data;
    });
  },
});
