<template>
  <v-container class="home-container" style="padding:0px;">
    <section class="container">
      <v-layout text-center wrap>
        <v-flex xs12 style="display:flex; height:100vh;">
          <v-card class="form" v-show="loginShow">
            <v-card-title class="content-center">Login</v-card-title>
            <v-content>
              <v-form ref="login" v-model="loginForm">
                <v-text-field
                  label="Username"
                  :rules="[rules.required]"
                  v-model="Login.username"
                  solo
                  dense
                  background-color="rgba(255,255,255,0.8)"
                ></v-text-field>
                <v-text-field
                  v-model="Login.password"
                  label="password"
                  :type=" showPass?'text':'password'"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off' "
                  :rules="[rules.required , rules.min]"
                  solo
                  dense
                  background-color="rgba(255,255,255,0.8)"
                  @click:append="showPass = !showPass"
                ></v-text-field>
                <v-btn :disabled="!loginForm" dark>Login</v-btn>
              </v-form>
            </v-content>
            <v-divider style="margin:20px 0px; background-color:#fefefe;"></v-divider>
            <p style="color: #fefefe;">
              don't have an account
              <v-btn text @click="toggleForm()" color="#fefefe">Register</v-btn>
            </p>
          </v-card>

          <v-card class="form" v-show="registerShow">
            <v-card-title class="content-center">Register</v-card-title>
            <v-content>
              <v-form ref="preReg" v-model="preregForm" v-show="preReg">
                <v-text-field
                  label="Registration Piin"
                  :rules="[rules.required]"
                  v-model="regPin"
                  solo
                  dense
                  background-color="rgba(255,255,255,0.8)"
                ></v-text-field>

                <v-btn :disabled="!preregForm" @click="verifyPin()" dark>Verify</v-btn>
              </v-form>

              <v-form ref="preReg" v-model="fullRegForm" v-show="fullReg">
                <v-text-field
                  label="Full Name"
                  :rules="[rules.required]"
                  v-model="Registration.name"
                  solo
                  dense
                  background-color="rgba(255,255,255,0.8)"
                ></v-text-field>
                <v-text-field
                  label="email"
                  :rules="[rules.required]"
                  v-model="Registration.email"
                  solo
                  dense
                  background-color="rgba(255,255,255,0.8)"
                ></v-text-field>
                <v-text-field
                  label="phone number"
                  :rules="[rules.required]"
                  v-model="Registration.phone"
                  solo
                  dense
                  background-color="rgba(255,255,255,0.8)"
                ></v-text-field>
                <v-select
                  v-model="Registration.branch_id"
                  :items="branches"
                  label="select branch"
                  solo
                  background-color="rgba(255,255,255,0.8)"
                  @change="select()"
                ></v-select>
                <v-textarea
                  solo
                  :rules="[rules.requires]"
                  v-model="Registration.address"
                  auto-grow
                  clearable
                  background-color="rgba(255,255,255,0.8)"
                ></v-textarea>

                <v-btn :disabled="!fullRegForm" dark>Register</v-btn>
              </v-form>
            </v-content>
            <v-divider style="margin:20px 0px; background-color:#fefefe;"></v-divider>
            <p style="color: #fefefe;">
              don't have an account
              <v-btn text @click="toggleForm()" color="#fefefe">Register</v-btn>
            </p>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    Login: {
      username: "",
      password: ""
    },
    Registration: {
      branch_id: "",
      zone: "",
      rank: "",
      name: "",
      address: "",
      email: "",
      phone: ""
    },
    branches: [
      {
        text: "ilorin",
        value: 1
      },
      {
        text: "kogi",
        value: 2
      }
    ],
    showPass: false,
    loginForm: true,
    loginShow: true,
    registerForm: false,
    preReg: true,
    fullReg: false,
    preregForm: true,
    fullRegForm: true,
    regPin: "",
    registerShow: false,
    rules: {
      required: v => !!v || "required",
      min: value => value.length > 6 || "password must be at least 8 characters"
    }
  }),
  computed: {},
  created() {
    this.allBranches();
  },
  methods: {
    toggleForm() {
      this.loginShow = !this.loginShow;
      this.registerShow = !this.registerShow;
    },
    verifyPin() {
      this.fullReg = true;
      this.preReg = false;
    },
    select() {},
    allBranches() {
      var url = "http://localhost/kwaccima/admin/dashboard/api/blog.php?id=2";
      this.axios
        .get(url)
        .then(response => {
          console.log(response);
        })
        .catch();
    }
  }
};
</script>
