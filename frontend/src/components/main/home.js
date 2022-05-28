import React from "react";
import "./resource/home.css";

const Home = () => {
  return (
    <>
      <body>

{/* <!-- ======= Hero Section ======= --> */}
<section id="hero">
 <div class="hero-container">
   <div id="heroCarousel" data-bs-interval="3000" class="carousel slide carousel-fade" data-bs-ride="carousel">

     <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

     <div class="carousel-inner" role="listbox">

       {/* <!-- Slide 1 --> */}
       <div class="carousel-item active" style="background-image: url(assets/img/slide/slide-1.jpg)">
         <div class="carousel-container">
           <div class="carousel-content">
             <h2 class="animate__animated animate__fadeInDown">Welcome to <span>My SelfStorage</span></h2>
             <p class="animate__animated animate__fadeInUp">Our website will provide you rental storage services for
               your Household goods </p>
             {/* <!-- <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a> --> */}
           </div>
         </div>
       </div>
       {/* <!-- Slide 2 --> */}
       <div class="carousel-item" style="background-image: url(assets/img/slide/slide-2.jpg)">
         <div class="carousel-container">
           <div class="carousel-content">
             <h2 class="animate__animated fanimate__adeInDown">My <span>SelfStorage</span></h2>
             <p class="animate__animated animate__fadeInUp">Reclaim Your Personal Space
               Declutter Your Life With The Power Of Self Storage!
               
               </p>
             {/* <!-- <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a> --> */}
           </div>
         </div>
       </div>

       {/* <!-- Slide 3 --> */}
       {/* <!-- <div class="carousel-item" style="background-image: url(assets/img/slide/slide-3.jpg)">
         <div class="carousel-container">
           <div class="carousel-content">
             <h2 class="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
             <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
             <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
           </div>
         </div>
       </div> --> */}

     </div>

     <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
       <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
     </a>

     <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
       <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
     </a>

   </div>
 </div>
</section>
{/* <!-- End Hero --> */}
 {/* <!-- ======= Clients Section ======= --> */}
 <section id="clients" class="clients">
   <div class="container">

     <div class="section-title">
       <h2>Why My SelfStorage</h2>
       <p>Real estate prices in Delhi-NCR and other major Indian metros are very expensive so individuals and
         businesses alike should re-evaluate how they currently utilize their work or living areas. Too much “stuff”
         can cause a mess and reduce the effectiveness and efficiency of work/living areas – clutter kills efficiency
         and quality of life. We help resolve this issue by providing a safe, convenient, effective, and affordable
         solution via the power of self storage.</p>
     </div>

     <div class="clients-slider swiper">
       <div class="swiper-wrapper align-items-center">
         <div class="swiper-slide"><img
             src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/452/external-cctv-camera-museum-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
             class="img-fluid" alt=""/>
           <p style="text-align: center;">CCTV Camera</p>
         </div>
         <div class="swiper-slide"><img
             src="https://img.icons8.com/external-itim2101-lineal-itim2101/452/external-security-man-male-occupation-avatar-itim2101-lineal-itim2101.png"
             class="img-fluid" alt=""/>
           <p style="text-align: center;">24*7 security</p>
         </div>
         <div class="swiper-slide"><img
             src="https://img.icons8.com/external-bluetone-bomsymbols-/452/external-fire-sign-symbols-bluetone-bluetone-bomsymbols--2.png"
             class="img-fluid" alt=""/>
           <p style="text-align: center;">fire control</p>
         </div>
         <div class="swiper-slide"><img src="https://img.icons8.com/nolan/452/point-objects.png" class="img-fluid"
             alt=""/>
           <p style="text-align: center;">Esey Location</p>
         </div>
         <div class="swiper-slide"><img
             src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/452/external-pest-control-bee-farming-inipagistudio-mixed-inipagistudio.png"
             class="img-fluid" alt=""/>
           <p style="text-align: center;">pest control</p>
         </div>
       </div>

     </div>

   </div>

   {/* </div> */}
 </section>
 {/* <!-- End Clients Section --> */}


 <main id="main">

   {/* <!-- ======= Featured Section ======= --> */}
   <section id="featured" class="featured">
     <div class="container">

       <div class="row">
         <div class="col-lg-4">
           <div class="icon-box icon-bg-1">
             <div>

               <h3><a href="">Storage Space</a></h3>
               <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                 non provident</p>
             </div>
           </div>
         </div>
         <div class="col-lg-4 mt-4 mt-lg-0">
           <div class="icon-box icon-bg-2">
             <div>

               <h3><a href="">Lockers</a></h3>
               <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad
                 limino ata</p>
             </div>
           </div>

         </div>
         <div class="col-lg-4 mt-4 mt-lg-0">
           <div class="icon-box icon-bg-3">
             <div>

               <h3><a href="">Packers & Movers</a></h3>
               <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
               </p>
             </div>
           </div>
         </div>
       </div>

     </div>
   </section>
   {/* <!-- End Featured Section --> */}

   {/* <!-- ======= About Section ======= --> */}
   <section id="about" class="about">
     <div class="container ">

       <div class="row">
         <div class="col-lg-6">
           <img src="https://cdn.pixabay.com/photo/2016/11/22/19/24/archive-1850170__480.jpg" class="img-fluid" alt=""/>
         </div>
         <div class="col-lg-6 pt-4 pt-lg-0 content">
           <h3>About My SelfStorage</h3>
           <p class="fst-italic">
             Our website will helps you to store your Household goods and provide you rental storage space at low cost.
           </p>
           <ul>
             <li><i class="bi bi-check-circle"></i>Need to temporarily store your inventory</li>
             <li><i class="bi bi-check-circle"></i>Your business might have come to an end , but there some personal
               goods that you want to store and
               revisit at a later date.</li>
             <li><i class="bi bi-check-circle"></i> whether you are relocating your home or office,or a university
               student returning home for holidays -
               there will always be some additional belongings ,which will not fit in your current plans and space..
             </li>
           </ul>
           {/* <!-- <p>
             Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum
           </p> --> */}
         </div>
       </div>

     </div>
   </section>
   {/* <!-- End About Section --> */}

   {/* <!-- ======= Services Section ======= --> */}
   <section id="services" class="services service-bg">
     <div class="container ">
       <div class="section-title">
         <h2>Sevices</h2>
         <p>Our website will helps you to store your Household goods and provide you rental storage space at low cost.
         </p>
       </div>

       <div class="row">
         <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
           <div class="icon-box">
             <div class="icon"><i class="bx bi bi-house-door"></i></div>
             <h4><a href="">Relocating</a></h4>
             <p>whether you are relocating your home or office,or a university student returning home for holidays -
               there will always be some additional belongings ,which will not fit in your current plans and space.</p>
           </div>
         </div>

         <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
           <div class="icon-box">
             <div class="icon"><i class="bx bi bi-house-door"></i></div>
             <h4><a href="">Renovating</a></h4>
             <p>On multiple occaasion, homes and office need renovating. we understand that in such instances, you
               would need free up space and temporarily move some items to a safer location.</p>
           </div>
         </div>

         <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
           <div class="icon-box">
             <div class="icon"><i class="bx bi bi-house-door"></i></div>
             <h4><a href="">Liqidating</a></h4>
             <p>Your business might have come to an end , but there some personal goods that you want to store and
               revisit at a later date.</p>
           </div>
         </div>

         <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
           <div class="icon-box">
             <div class="icon"><i class="fa-solid fa-warehouse-full"></i></div>
             <h4><a href="">Excess Inventory</a></h4>
             <p>Need to temporarily store your inventory? We realize your dilemma, and have just the space you need for
               your excess inventories, including those old but iportant that you might need later.</p>
           </div>
         </div>

         <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
           <div class="icon-box">
             <div class="icon"><i class="bx bi bi-house-door"></i></div>
             <h4><a href="">Expanding your business</a></h4>
             <p>You need to scale-up your business and replace timeworm properties with newer ones, but are not ready
               yet to dispose them. SelfStorage is the way ahead for you</p>
           </div>
         </div>

         <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
           <div class="icon-box">
             <div class="icon"><i class="bi bi-house-door"></i></div>
             <h4><a href="">Downsizing</a></h4>
             <p>If you are looking to downsizing your business'or home, there whold undoubtedly be some possessions
               that might have to be moved to a secure place, Our SelfStorage facility</p>
           </div>
         </div>

       </div>

     </div>
   </section>
   {/* <!-- End Services Section --> */}



 </main>
 {/* <!-- End #main --> */}

 {/* <!-- ======= Footer ======= --> */}
 <footer id="footer">

   {/* <!-- <div class="footer-newsletter">
     <div class="container offer-con">
       <div class="row">
         <div class="col-lg-12 r">

           <h1 class="align-items-center">Our Offering</h1>
         </div>
       </div>
       <div class="row">
         <div class="col-lg-4">
           <div class="icon-box">
             <i class="bi bi-card-checklist"></i>
             <h3><a href="">Lorem Ipsum</a></h3>
             <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
               non provident</p>
           </div>
         </div>
         <div class="col-lg-4 mt-4 mt-lg-0">
           <div class="icon-box">
             <i class="bi bi-bar-chart"></i>
             <h3><a href="">Dolor Sitema</a></h3>
             <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad
               limino ata</p>
           </div>
         </div>
         <div class="col-lg-4 mt-4 mt-lg-0">
           <div class="icon-box">
             <i class="bi bi-binoculars"></i>
             <h3><a href="">Sed ut perspiciatis</a></h3>
             <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
             </p>
           </div>
         </div>
       </div> --> */}

   {/* </div>
   </div> */}

   <div class="footer-top">
     <div class="container">
       <div class="row">

         <div class="col-lg-3 col-md-6 footer-links">
           <h4>Useful Links</h4>
           <ul>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
           </ul>
         </div>

         {/* <!-- <div class="col-lg-3 col-md-6 footer-links">
           <h4>Our Services</h4>
           <ul>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
             <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
           </ul>
         </div> --> */}

         <div class="col-lg-3 col-md-6 footer-contact">
           <h4>Contact Us</h4>
           <p>
             A108 Adam Street <br/>
             New York, NY 535022<br/>
             United States <br/><br/>
             <strong>Phone:</strong> +1 5589 55488 55<br/>
             <strong>Email:</strong> info@example.com<br/>
           </p>

         </div>

         <div class="col-lg-3 col-md-6 footer-info">
           <h3>About My SelfStorage</h3>
           <p>Our website will helps you to store your Household goods and provide you rental storage space at low cost
           </p>
           <div class="social-links mt-3">
             <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
             <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
             <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
             <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
           </div>
         </div>

       </div>
     </div>
   </div>
   <div>
     <h5 style="text-align: center; padding-top :40px"> My SelfStorage</h5>
   </div>

 </footer>
 {/* <!-- End Footer --> */}


 {/* <!-- Vendor JS Files --> */}
 <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
 <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
 <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
 <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
 <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
 <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
 <script src="assets/vendor/php-email-form/validate.js"></script>

 {/* <!-- Template Main JS File --> */}
 <script src="assets/js/main.js"></script>

</body>
    </>
  );
};

export default Home;
