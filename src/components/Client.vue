<template>
  <div id="client" class="text-center">
    <h1 class="display-1">Weather App</h1>
    <p>Client Side</p>
    <small></small>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h1>Temperature</h1>
              <img src="../assets/thermometer.png" alt="">
              <h2 id="temp">°C</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h1>Humidity</h1>
              <img src="../assets/humidity.png">
                <h2 id="humi"></h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h1>Light</h1>
              <img src="../assets/sun.png">
                <h2 id="lig"></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {lightRef, temperatureRef, humidityRef} from "../firebase";

    export default {
      data() {
        return {
          temperature: 0,
          humidity: 0,
          light: 0
        }
      },
      firebase: {
        temperatures: temperatureRef,
        humidities: humidityRef,
        lights: lightRef
      },
      mounted() {
        this.getLastTemp();
        this.getLastLight();
        this.getLastHumidity();
      },
      methods: {
        getLastTemp() {
          temperatureRef.orderByChild("temperature").limitToLast(1).on("child_added", function(snapshot) {
            var temp = snapshot.val().temperature;
            console.log(temp);
            document.getElementById("temp").innerHTML = temp;
          })
        },
        getLastHumidity() {
          humidityRef.orderByChild("humidity").limitToLast(1).on("child_added", function(snapshot) {
            var humi = snapshot.val().humidity;
            console.log(humi);
            document.getElementById("humi").innerHTML = humi;
          })
        },
        getLastLight() {
          lightRef.orderByChild("light").limitToLast(1).on("child_added", function(snapshot) {
            var ligh = snapshot.val().light;
            console.log(ligh);
            document.getElementById("lig").innerHTML = ligh;
          })
        }
        }
      }
</script>

<style scoped>
  img {
    float: left;
    width: 9rem;
  }
  ul {
    list-style-type: none;
  }
</style>
