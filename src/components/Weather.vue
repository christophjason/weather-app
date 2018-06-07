<template>
  <div id="weather" class="text-center">
    <h1>Weather App</h1>
    <p>Server Side</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <p>Temperature:</p>
          <div class="input-group justify-content-center">
            <input type="text" v-model="temperature" @keyup.enter="submitTemperature()">
            <div class="input-group-append">
              <span class="input-group-text">°C</span>
            </div>
          </div>
          <div class="btn btn-dark my-3" @click="submitTemperature()">Insert</div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Temperature</h5>
              <div>
                <ul>
                  <li v-for="temp of temperatures" :key="temp['.key']">
                    <div v-if="!temp.edit">
                      <p>{{ temp.temperature }}°C</p>
                      <div class="btn btn-dark my-3" @click="removeTemperature(temp['.key'])">Remove</div>
                      <div class="btn btn-dark my-3" @click="setEditTemperature(temp['.key'])">Edit</div>
                    </div>
                    <div v-else>
                      <div class="input-group justify-content-center">
                        <input type="text" v-model="temp.temperature" @keyup.enter="saveEditTemperature(temp)">
                        <div class="input-group-append">
                          <span class="input-group-text">°C</span>
                        </div>
                      </div>
                      <div class="btn btn-dark my-3" @click="saveEditTemperature(temp)">Save</div>
                      <div class="btn btn-dark my-3" @click="cancelEditTemperature(temp['.key'])">Cancel</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          <div class="col">
            <p>Humidity:</p>
            <div class="input-group justify-content-center">
              <input type="text" v-model="humidity" @keyup.enter="submitHumidity()">
            </div>
            <div class="btn btn-dark my-3" @click="submitHumidity()">Insert</div>
            <div class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">Humidity</h5>
                <div>
                  <ul>
                    <li v-for="humi of humidities" :key="humi['.key']">
                      <div v-if="!humi.edit">
                        <p>{{ humi.humidity }}</p>
                        <div class="btn btn-dark my-3" @click="removeHumidity(humi['.key'])">Remove</div>
                        <div class="btn btn-dark my-3" @click="setEditHumidity(humi['.key'])">Edit</div>
                      </div>
                      <div v-else>
                        <div class="input-group justify-content-center">
                          <input type="text" v-model="humi.humidity" @keyup.enter="saveEditHumidity(humi)">
                        </div>
                        <div class="btn btn-dark my-3" @click="saveEditHumidity(humi)">Save</div>
                        <div class="btn btn-dark my-3" @click="cancelEditHumidity(humi['.key'])">Cancel</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        <div class="col">
          <p>Light:</p>
          <div class="input-group justify-content-center">
            <input type="text" v-model="light" @keyup.enter="submitLight()">
          </div>
          <div class="btn btn-dark my-3" @click="submitLight()">Insert</div>
          <div class="card mt-2">
            <div class="card-body">
              <h5 class="card-title">Light</h5>
              <div>
                <ul>
                  <li v-for="lig of lights" :key="lig['.key']">
                    <div v-if="!lig.edit">
                      <p>{{ lig.light }}</p>
                      <div class="btn btn-dark my-3" @click="removeLight(lig['.key'])">Remove</div>
                      <div class="btn btn-dark my-3" @click="setEditLight(lig['.key'])">Edit</div>
                    </div>
                    <div v-else>
                      <div class="input-group justify-content-center">
                        <input type="text" v-model="lig.light" @keyup.enter="saveEditLight(lig)">
                      </div>
                      <div class="btn btn-dark my-3" @click="saveEditLight(lig)">Save</div>
                      <div class="btn btn-dark my-3" @click="cancelEditLight(lig['.key'])">Cancel</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {temperatureRef} from "../firebase";
  import {humidityRef} from "../firebase";
  import {lightRef} from "../firebase";

  export default {
      data() {
        return {
          temperature: '',
          humidity: '',
          light: ''
        }
      },
    firebase: {
      temperatures: temperatureRef,
      humidities: humidityRef,
      lights: lightRef
    },
      methods: {
        submitTemperature() {
          temperatureRef.push({temperature: this.temperature, edit: false})
          this.temperature = ''
        },
        submitHumidity() {
          humidityRef.push({humidity: this.humidity, edit: false})
          this.humidity = ''
        },
        submitLight() {
          lightRef.push({light: this.light, edit: false})
          this.light = ''
        },
        removeTemperature(key){
          temperatureRef.child(key).remove();
        },
        removeHumidity(key){
          humidityRef.child(key).remove();
        },
        removeLight(key){
          lightRef.child(key).remove();
        },
        setEditTemperature(key) {
          temperatureRef.child(key).update({ edit: true})
        },
        setEditHumidity(key) {
          humidityRef.child(key).update({edit:true})
        },
        setEditLight(key) {
          lightRef.child(key).update({edit:true})
        },
        saveEditTemperature(tem){
          const key = tem['.key'];
          temperatureRef.child(key).set({ temperature: tem.temperature, edit: false })
        },
        saveEditHumidity(hum){
          const key = hum['.key'];
          humidityRef.child(key).set({ humidity: hum.humidity, edit: false })
        },
        saveEditLight(li){
          const key = li['.key'];
          lightRef.child(key).set({ light: li.light, edit: false })
        },
        cancelEditTemperature(key){
          temperatureRef.child(key).update({ edit: false})
        },
        cancelEditHumidity(key){
          humidityRef.child(key).update({ edit: false})
        },
        cancelEditLight(key){
          lightRef.child(key).update({ edit: false})
        },
      }
    }
</script>

<style scoped>
  .container {
    margin-top: 4rem;
  }
  ul {
    list-style-type: none;
  }
  p {
    margin: auto;
  }
  .card {
    padding: 10px 10px;
  }
</style>
