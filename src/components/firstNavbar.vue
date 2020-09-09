<template>
    <div class="navbar navbar-dark green firstnavbar">
        <div class="container">
            <div class="d-flex">
                <div class="dropdown mt-2">
                    <a class="animated fadeInDownBig" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ENG <i class="fas fa-chevron-down pill"></i></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="green dropdown-item" href="#">Action</a>
                        <a class="green dropdown-item" href="#">Another action</a>
                        <a class="green dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown ml-3 mt-2">
                    <a class="animated fadeInDownBig" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD <i class="fas fa-chevron-down pill"></i></a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="green dropdown-item" href="#">Action</a>
                        <a class="green dropdown-item" href="#">Another action</a>
                        <a class="green dropdown-item" href="#">Something else here</a>
                    </div>
                </div> 
                <div><img id="Line" class="ml-3" src="../assets/line.png" alt=""></div>
            </div>
            <div class="d-flex flex-right">
                <div class="animated fadeInDownBig mt-2"><a href="">Newsletter</a></div>
                <div><img class="ml-3" src="../assets/line.png" alt=""></div>
                <div class="animated fadeInDownBig mt-2 ml-3"><a href="">Contact us</a></div>
                <div><img class="ml-3" src="../assets/line.png" alt=""></div>
                <div class="animated fadeInDownBig mt-2 ml-3"><a href="">FAQs</a></div>
                <div><img class="ml-3" src="../assets/line.png" alt=""></div>
                <div class=" mt-2 ml-3 icons">
                    <i class="animated tada fab fa-twitter"></i>
                    <i class="animated tada fab fa-instagram ml-2"></i>
                    <i class="animated tada fab fa-facebook ml-2"></i>
                    <i class="animated tada fas fa-envelope ml-2"></i>
                    <i class="animated tada fab fa-google-plus-g ml-2"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.icons {
    color: white !important; 
}
.pill {
    font-weight: 400;
    font-size: 14px;
}
.firstnavbar a {
    color: white !important; 
}
.firstnavbar {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

</style>