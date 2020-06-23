var path = "./data.json";
var app = new Vue({
  el: "#app",
  data: {
    interns: [],
    search: "",
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
    positions() {
      var pos = [];
      for (let index = 1; index < this.interns.length - 1; index++) {
        pos.push(index);
      }
      console.log(pos);
      return pos;
    },
  },
  mounted() {
    axios.get(path).then((response) => {
      this.interns = response.data;
    });
  },
});
