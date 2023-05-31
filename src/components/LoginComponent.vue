<template>
  <div class="form-container">
    <el-form ref="form" :model="formData" label-width="120px" @submit.passive.prevent class="form">
      <el-form-item label="Email" prop="email" :rules="emailRules">
        <el-input v-model.trim="formData.email"></el-input>
      </el-form-item>

      <el-form-item label="Пароль" prop="password" :rules="passwordRules">
        <el-input v-model.trim="formData.password" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="loading" @click="submitForm">Войти</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      loading: false,
      emailRules: [
        {required: true, message: 'Введите email', trigger: 'blur'},
        {type: 'email', message: 'Введите корректный email адрес', trigger: 'blur'}
      ],
      passwordRules: [
        {required: true, message: 'Введите пароль', trigger: 'blur'},
        {min: 8, message: 'Минимальная длина пароля - 8 символов', trigger: 'blur'},
        {
          validator: (rule, value, callback) => {
            if (!/[A-Z]/.test(value)) {
              callback(new Error('Пароль должен содержать хотя бы одну заглавную букву'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }
      ]
    }
  },
  methods: {
    // Имитация запроса на сервер
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.$router.push('/')
          }, 2000)
        }
      })
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form {
  width: 50%;
}
</style>