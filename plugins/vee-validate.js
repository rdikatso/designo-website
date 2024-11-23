import { defineRule } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';

// Define global validation rules
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

export default defineNuxtPlugin(() => {
  console.log('VeeValidate rules initialized');
});