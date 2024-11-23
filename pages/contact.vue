<template>
    <div class="container">
      <Form @submit="onSubmit">
        <div>
            <label for="name">Name</label>
            <Field id="name" name="name" type="text" rules="required|min:3" placeholder="Enter your name" />
            <ErrorMessage name="name" />
        </div>
        <div>
            <label for="email">Email Address</label>
            <Field id="email" name="email" type="email" rules="required|email" placeholder="Enter your email" />
            <ErrorMessage name="email" />
        </div>
        <div>
            <label for="phone">Phone</label>
            <Field
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            />
            <ErrorMessage name="phone" />
        </div>
        <div>
            <label for="message">Message</label>
            <Field
            id="message"
            name="message"
            as="textarea"
            rules="required|min:10"
            placeholder="Enter your message"
            />
            <ErrorMessage name="message" />
        </div>

        <button type="submit" :disabled="isSubmitting">Submit</button>
      </Form>
      <div v-if="emailStatus">
        <p>{{ emailStatus }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import emailjs from 'emailjs-com';
  import { ref } from 'vue';

  const serviceID = 'contact_service';
  const templateID = 'contact_form';
  const publicKey = 'i6NdeWgtgKE3AooAu';

  const isSubmitting = ref(false);
  const emailStatus = ref('');

  async function onSubmit(values) {
    isSubmitting.value = true;
    try {
        const response = await emailjs.send(
        serviceID,
        templateID,
        {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
        },
        publicKey
        );
        emailStatus.value = 'Email sent successfully!';
        console.log('EmailJS Response:', response);
    } catch (error) {
        emailStatus.value = 'Failed to send email. Please try again.';
        console.error('EmailJS Error:', error);
    } finally {
        isSubmitting.value = false;
    }
  
  }
  </script>