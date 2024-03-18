<template>
  <div>
    <main id="oi">
      <section class="mb-1">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Us</h2>
        <p class="text-center w-responsive mx-auto mb-5">Have questions or comments? Send us a message!</p>
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-9 mb-md-0 mb-5">
            <form @submit.prevent="submitForm" class="container" id="form">
              <div class="mb-3">
                <label for="Inputfirstname" class="form-label">First Name</label>
                <input type="text" name="first_name" class="form-control" id="Inputfirstname" required aria-describedby="Fname">
                <label for="Inputlastname" class="form-label">Last Name</label>
                <input type="text" name="surname" class="form-control" id="Inputlastname" required aria-describedby="emailHelp">
                <label for="InputEmail1" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="InputEmail1" required aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label id="message" for="exampleInputmessage" class="form-label">Comments / Questions</label>
                <input type="text" name="message" class="form-control" id="exampleInputmessage" required>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <!-- Contact information (unchanged) -->
            </ul>
          </div>
          <!-- Grid column -->
        </div>
      </section>
      <!-- Section: Contact v.2 -->

      <!-- Map section -->
      <section class="mb-5">
        <div class="map-container">
          <div id="map"></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Handle form submission logic here
      // You can use external libraries like axios for form submission
      // or send an HTTP request to your server endpoint
      // Example: axios.post('your-api-endpoint', formData)
    },
    initMap() {
      // Initialize the map here
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    }
  },
  mounted() {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.defer = true;
    script.async = true;
    window.initMap = this.initMap;
    document.head.appendChild(script);
  }
};
</script>

<style scoped>
p {
  color: rgb(255, 255, 255);
  font-size: 22px;
  line-height: 1.6;
}
h2 {
  color: rgb(255, 255, 255);
  font-size: 36px;
  margin-bottom: 30px;
}
input {
  margin-left: 16%;
}
label {
  margin-left: 35%;
  font-weight: bold;
}
.btn {
  margin-left: 35%;
}
.form-text {
  color: white;
  margin-left: 36%;
}
#exampleInputmessage {
  padding: 2.5%;
}
h2 {
  font-family: "Honk", system-ui !important;
  font-optical-sizing: auto !important;
  font-weight: 400 !important;
  font-size: 50px;
  font-style: normal !important;
}
.row {
  background: #e7eaf6;
}

/* Map container styles */
.map-container {
  height: 400px; /* Adjust height as needed */
  margin-bottom: 20px;
}
</style>
