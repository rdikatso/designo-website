<template>
    <div class="container-fluid footer-wrapper">
        <div class="container newsletter">
            <div class="row">
                <div class="col-lg-6 newsletter-desc">
                    <p class="newsletter-header">
                        Let's talk about <br /> your project
                    </p>
                    <p class="newsletter-description">
                        Ready to take it to the next level? Contact us today and find out <br/> how our expertise can help your business grow.
                    </p>
                </div>
                <div class="col-lg-6 newsletter-button">
                    <div>
                        <CustomButton link="/contact">Get in Touch</CustomButton>
                    </div>
                </div>
            </div>
        </div>
        <footer class="container">
            <div class="footer">
                <div class="logo-container">
                    <nuxt-link class="" to="/">
                        <img src="/designo-logo-white.png" alt="Designo Logo" class="mall-logo">
                    </nuxt-link>
                </div>
                <ul class="footer-links">
                    <li class="footer-item">
                        <nuxt-link class="footer-link" to="/about">Our Company</nuxt-link>
                    </li>
                    <li class="footer-item">
                        <nuxt-link class="footer-link" to="/locations">Locations</nuxt-link>
                    </li>
                    <li class="footer-item">
                        <nuxt-link class="footer-link" to="/contact">Contact</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="footer-address row">
                <div class="address col-md-5">
                    <p class="bold-text">Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div class="contact-us col-md-4 bold-text">
                    <p>Contact us(Central Office)</p>
                    <p> P : <a href="tel:+1 253-863-8967">+1 253-863-8967</a></p>
                    <p>M : <a href="mailto:contact@designo.co">contact@designo.co</a></p>
                </div>
                <div class="social-media-links col-md-3">
                    <div class="icon">
                        <font-awesome-icon :icon="['fab', 'square-facebook']" />
                    </div>
                    <div class="icon">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                    </div>
                    <div class="icon">
                        <font-awesome-icon :icon="['fab', 'square-x-twitter']" />
                    </div>
                    <div class="icon">
                        <font-awesome-icon :icon="['fab', 'pinterest']" />
                    </div>
                    <div class="icon">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
<script setup>
import CustomButton from '@/components/CustomButton.vue';
</script>
<style  scoped lang="scss"> 
.footer-wrapper {
    background-color: black;
    margin-top: 20rem;
    padding: 6rem 0 3rem 0;
    position: relative;
}
footer {
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    margin-top: 125px;
    .bold-text {
        font-weight: 500;
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .footer-links {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
        
    }
    .footer-item{
        margin: 0.5rem 0;
    }
    .footer-link {
        text-decoration: none;
        color: #fff;
    }
    .logo-container {
        border-bottom: 1px solid #ccc;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
        img {
            max-width: 200px;
        }
    }
    
}
.footer-address {
    text-transform: none;
    padding-top: 2.5rem;
    .address, .contact-us {
        text-align: center;
        margin-bottom: 40px;
        p {
            margin-bottom: 0.25rem;
            a {
                color: #fff;
                text-decoration: none;
                transition: 0.3s;

                &:hover{
                    color: rgba(255, 255, 255, 0.5);
                }
            }
            
        }
    }
    .social-media-links {
        display: flex;
        justify-content: center;
    }
}
.social-media-links {
    align-items: end;
    .icon {
        margin-left: 1rem;
        color: #E7816B;
    }
}
.newsletter {
    background-image: url('/newsletter-background.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: -25%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    background-color: #E7816B;
    padding: 3rem 4rem;
    color: #fff;
    text-align: center;
    max-width: 90%;

    .newsletter-header{
        font-size: 1.5rem;
    }
    .newsletter-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
@media (min-width: 768px) and (max-width: 1024px){
    footer{
        .footer {
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 2.5rem;
        }
        .logo-container {
            border-bottom: none;
            width: auto;
            padding-bottom: 0;
        }
        .footer-links {
            flex-direction: row;
            padding-top: 0;
            margin-left: 1rem;
        }
        .footer-item {
            margin: 0.5rem 1rem
        }
    }
    .footer-address {
        border-top: 1px solid #ccc;
        .address, .contact-us {
            text-align: left;
            margin-bottom: 0;
        }
    }
    .newsletter-background-img {
        top: -45px;
    }
    
}
@media (min-width: 1025px){
    .newsletter {
        top: -45%;
        padding: 3rem 6rem;
        max-width: 1320px;
        .newsletter-desc {
            text-align: left;
        }
        .newsletter-header {
            font-size: 2.5rem;
        }
        .newsletter-button {
            justify-content: flex-end;
            margin-top: 20px;
        } 
    }
    footer {
        margin-top: 75px;
        .footer {
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 0;
        }
        .logo-container {
            width: auto;
            padding-bottom: 0;
            border-bottom: none;
        }
        .footer-links {
            flex-direction: row;
            margin-top: 0;
            padding-top: 0;
        }
        .footer-item {
            margin: .5rem;;
        }
    }
    .footer-address {
        margin-top: 2.5rem;
        border-top: 1px solid #ccc;
        .address, .contact-us {
            margin-bottom: 0;
            text-align: left;
        }
        .social-media-links {
            justify-content: end;
        }
    }
}
</style>