<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isFormValid && username"
              >Please enter an email address</span
            >
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
          :disabled="!isFormValid || !password"
          type="submit"
          class="btn disabled"
          :class="!isFormValid || !password ? 'disabled' : 'null'"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { validateEmail } from '~/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  components: {},

  computed: {
    isFormValid() {
      return validateEmail(this.username);
    },
  },

  methods: {
    async submitForm() {
      console.log(1);
      try {
        const idInfo = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('login/LOGIN', idInfo);

        // this.$router.push('/main');
        // this.logMessage = `${data.user.nickname}님 환영합니다.`;
        this.initForm();
      } catch (error) {
        console.log(2);
        this.logMessage = error.message;
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style lang="scss"></style>
