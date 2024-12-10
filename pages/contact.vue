<template>
    <div class="container">
      <div class="form-container" :style="{ backgroundImage: `url(${backgroundImage})`}">
        <div class="row">
            <div class="col-md-6">
                <div class="contact-content">
                    <h3 class="contact-title">Contact Us</h3>
                    <p class="contact-page-desc">
                        Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. 
                        If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                    </p>
                </div>
            </div>
            <div class="col-md-6">
                <Form @submit="onSubmit">
                    <div class="form-item">
                        <label for="name">Name</label>
                        <Field id="name" name="name" type="text" rules="required|min:3" placeholder="Enter your name" />
                        <ErrorMessage name="name" class="error-message"/>
                    </div>
                    <div class="form-item">
                        <label for="email">Email Address</label>
                        <Field id="email" name="email" type="email" rules="required|email" placeholder="Enter your email" />
                        <ErrorMessage name="email" class="error-message" />
                    </div>
                    <div class="form-item">
                        <label for="phone">Phone</label>
                        <Field
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        />
                        <ErrorMessage name="phone" class="error-message" />
                    </div>
                    <div class="form-item">
                        <label for="message">Message</label>
                        <Field
                        id="message"
                        name="message"
                        as="textarea"
                        rules="required|min:10"
                        placeholder="Enter your message"
                        />
                        <ErrorMessage name="message" class="error-message" />
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" :disabled="isSubmitting">Submit</button>
                    </div>
                    
                </Form>
                <div v-if="emailStatus">
                    <p>{{ emailStatus }}</p>
                </div>
            </div>
        </div>
      </div>
      <Locations />
      
    </div>
  </template>
  
  <script setup>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import emailjs from 'emailjs-com';
  import { ref } from 'vue';
  import Locations from '@/components/Locations.vue';

  const backgroundImage = '/contact-us-background-image.svg'

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
  <style lang="scss">
  .form-container {
    background-color: #E7816B;
    background-position: left;
    background-repeat: no-repeat;
    min-height: 480px;
    border-radius: 15px;
    color: #fff;
    overflow: hidden;
    padding: 4rem;

    .contact-content {
        padding: 2.5rem 1.5rem 0 0;
        .contact-title {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }

    input, textarea {
        width: 100%;
        padding: 12px 20px;
        margin-bottom: 10px;
        border: none;
        border-bottom: 1px solid #fff;
        background-color: inherit;
        color: #fff; 
        transition: border-bottom 0.3s ease;
        cursor: pointer;

        &:hover {
            border-bottom: 3px solid #fff;
        }
    }
    textarea {
        resize: none;
        height: 150px;
    }
    
    label {
        position: absolute;
        left: -9999px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
    }

    input::placeholder,
    textarea::placeholder {
        color: #fff;
        opacity: 0.7; 
    }

    button {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        max-width: fit-content;
        transition: 0.3s;
        border: none; 

        &:hover {
            background-color: rgba(255, 255, 255, 0.5);
            color: #ffffff;
        }
    }
    .form-item {
        position: relative;
    }
    .error-message {
      position: absolute;
      right: 0; 
      top: 50%; 
      transform: translateY(-50%); 
      color: #ffcccc; 
      font-size: 0.875rem; 
      white-space: nowrap;
    }


  }
  </style>