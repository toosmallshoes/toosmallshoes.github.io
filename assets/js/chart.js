window.onload = function() {

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Teaching", "Writing", "Scratch Jr.", "Scratch", "Tai Chi", "Psychology"],
    datasets: [{
      backgroundColor: [
        "#adddcf",
        "#3498db",
        "#e8e7e5",
        "#bfb1d5",
        "#f0e0a2",
        "#fed1be",
        "#777777"
      ],
      data: [95, 90, 90, 65, 80, 90],
    }]
  }
});
}

// new Chart(ctx, {
//     data: "data",
//     type: "polarArea",
//     options: "options"
// });