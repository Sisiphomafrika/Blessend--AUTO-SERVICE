<template>
    <div class="home-container">
      <h1>Welcome to Our Website</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis consectetur velit.</p>
      <div class="login-container">
        <h2>Login</h2>
        <input v-model="email" type="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="login">Login</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
          alert('Login successful');
          // Redirect or set user state
        } else {
          alert('Invalid email or password');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .home-container {
    text-align: center;
    padding: 20px;
  }
  
  .home-container h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .home-container p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }
  
  .login-container {
    background-image: url('https://via.placeholder.com/150');
    background-size: cover;
    background-position: center;
  }
  </style>
  
