import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyC84Lsvys_SLFQ9ZxOarK18GCF2GcmYj64",
  authDomain: "weatherapp-c6eec.firebaseapp.com",
  databaseURL: "https://weatherapp-c6eec.firebaseio.com",
  projectId: "weatherapp-c6eec",
  storageBucket: "weatherapp-c6eec.appspot.com",
  messagingSenderId: "974126224127"
});

export const db = app.database();
export const temperatureRef = db.ref('temperature');
export const humidityRef = db.ref('humidity');
export const lightRef = db.ref('light');

