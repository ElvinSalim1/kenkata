<template>
    <div>
        <div class="container" >
            <div class="row marginfooter">
                <div class="wow animated zoomIn col-12 col-md-4 col-xl mb-4"><img class="animated tada mx-auto d-block" src="../assets/Bexim.png" alt=""></div>
                <div class="wow animated zoomIn col-12 col-md-4 col-xl mb-4"><img class="mx-auto d-block" src="../assets/Lighton.png" alt=""></div>
                <div class="wow animated zoomIn col-12 col-md-4  col-xl mb-4"><img class="mx-auto d-block" src="../assets/Dismis.png" alt=""></div>
                <div class="wow animated zoomIn col-12 col-md  col-xl mb-4"><img class="mx-auto d-block" src="../assets/Rosimo.png" alt=""></div>
                <div class="wow animated zoomIn col-12 col-md  col-xl "><img class="mx-auto d-block" src="../assets/Dallas.png" alt=""></div>
            </div>
        </div>
        <div class="footer6 newpart">
            <div class="container ">
                <div class="row pt-5 pb-5">
                    <div class=" col col-md-6 col-xl-3"><a class="navbar-brand" id="brand" href="#"><img class="wow animated tada"  src="../assets/logo2.png" alt=""></a>
                        <p class="wow animated fadeInLeftBig mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
                        <p class="mb-0">Follow us<img class="ml-5" src="../assets/line2.png" alt=""></p>
                        <div class="mt-2 white">
                            <i class="wow animated fadeInLeftBig fab fa-facebook green-color"></i>
                            <i class="wow animated fadeInLeftBig fab fa-instagram ml-3 green-color"></i>
                            <i class="wow animated fadeInLeftBig fab fa-twitter ml-3 green-color"></i>
                            <i class="wow animated fadeInLeftBig fas fa-envelope ml-3"></i>
                            <i class="wow animated fadeInLeftBig fab fa-google-plus-g ml-3 green-color"></i>
                        </div>
                    </div>
                    <div class="wow animated zoomIn col col-md-6 col-xl-3 mt-2">
                        <h6 class="green-color mb-3">CONTACT INFO</h6>
                        <p class="green-color mb-1">Address:</p>
                        <p class="">Solna Business Park<br>Feni-2500, Stockholm</p>
                        <p class="green-color mb-1">Phone:</p>
                        <p class="">+08-123456789<br>+08-123456789</p>
                        <p class="green-color mb-1">Email:</p>
                        <p class="">support@website.com<br>info@website.com</p>
                    </div>
                    <div class="wow animated zoomIn col col-sm-4 col-md-6 col-xl-3 mt-2">
                        <h6 class="green-color mb-3">USEFUL LINKS</h6>
                        <p class="mb-2 white"><a href="">Privacy Policy</a></p>
                        <p class="mb-2 green-color white"><a href="" id="footer5">Terms & Conditions</a></p>
                        <p class="mb-2 white"><a href="">Contact Us</a></p>
                        <p class="mb-2 white"><a href="">Our Sitemap</a></p>
                        <p class="mb-2 white"><a href="">Latest News</a></p>
                        <p class="mb-2 white"><a href="">Returns</a></p>
                    </div>
                    <div class="wow animated fadeInRightBig col-12 col-sm-8 col-md-6 col-xl-3 mt-2">
                        <h6 class="green-color mb-3">RECENT INSTAGRAM</h6>
                        <div>
                            <img class="" src="../assets/picture11.png" alt="">
                            <img class="ml-2" src="../assets/picture11.png" alt="">
                            <img class="ml-2" src="../assets/picture11.png" alt="">
                        </div>
                        <div>
                            <img class="mt-2" src="../assets/picture11.png" alt="">
                            <img class="mt-2 ml-2 footerdel" src="../assets/picture12.png" alt="">
                            <i class="fab fa-instagram ml-3 pr-3 footerdel2"></i>
                            <img class="mt-2 ml-5" src="../assets/picture11.png" alt="">
                        </div>
                        <div>
                            <img class="mt-2" src="../assets/picture11.png" alt="">
                            <img class="mt-2 ml-2" src="../assets/picture11.png" alt="">
                            <img class="mt-2 ml-2" src="../assets/picture11.png" alt="">
                        </div>
                    </div>
                    <a id="newbtn" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="wow animated bounce fas arrow2 fa-long-arrow-alt-up"></i></a>
                </div>
            </div>
        </div>
        <hr id="footer3" class="mb-0 mt-0">
        <div class="footer2">
            <div class="container">
                <div class="row pt-4 pb-3">
                    <div class="col-12 col-md-6 mt-2 mb-2 text-center">© Copyright 2020 KenKata</div>
                    <div class="col-12 col-md-6 mb-2">
                        <img class="img-fluid float-right" src="../assets/picture13.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.newpart {
    position: relative;
}
#newbtn{
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 22px;
  width: 50px;
  height: 50px;
  background: var(--green);
  color: white;
  border: none;
  cursor: pointer;
}
button {
    outline: 0 !important;
}
.marginfooter {
    margin-top: 6rem;
    margin-bottom: 5rem;
}
#footer3 {
    background-color: rgb(59, 59, 59);
}
.footerdel {
    position: absolute;
}
.footerdel2 {
    position: relative;
    top: 4px;
    left: 25px;
}
#footer5 {
    text-decoration: underline;
    color: var(--green)
}
#footer5:hover {
    color: white;
}
a {
    color: white;
}
a:hover {
    text-decoration: none;
    color: var(--green)
}

.footer6 {
    background-image: url('../assets/picture14.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
}
.footer2 {
    background-image: url('../assets/picture15.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
}
@media (min-width: 576px) {  
    .text-center {
        text-align: left !important;
    }
}
</style>