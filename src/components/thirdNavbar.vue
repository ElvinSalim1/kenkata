<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="animated fadeInDownBig collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><button id="btnbbb" class="btn nav-item dropdown green"><a class="nav-link mm2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="animated fadeInDownBig fas fa-bars mm2 mr-1"></i>Browse Categories <i class="fas fa-chevron-down mzm mm2"></i></a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><div class="dropdown-divider"></div><a class="dropdown-item" href="#">Something else here</a></div></button>
                <li class="nav-item active mdm"><router-link class="animated fadeInDownBig nav-link" to="/">Home</router-link></li>
                <li class="nav-item mdm"><a class="" href="/Shop"><div class="animated fadeInDownBig dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop <i class="fas fa-chevron-down ssr"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item mdm"><a class="" href="/Products"><div class="animated fadeInDownBig dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products <i class="fas fa-chevron-down ssr"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item mdm"><a class="" href="/Categories"><div class="animated fadeInDownBig dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories <i class="fas fa-chevron-down ssr"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item mdm"><a class="" href="/Pages"><div class="animated fadeInDownBig dropdown nav-link"><a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <i class="fas fa-chevron-down ssr"></i></a><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div></a></li>
                <li class="nav-item mdm"><router-link class="animated fadeInDownBig nav-link" to="/">Blog</router-link></li></ul>
            </div>
            <div class=""><button class="animated bounce btn green specialoffer mm2" type="submit">SPECIAL OFFER</button></div>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>

.specialoffer {
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    padding-left: 18px;
    padding-right: 18px;
}
.specialoffer:hover {
    background-color:  var(--btnHover)!important;
}
a {
    text-decoration: none !important;
}
i {
    color: var(--green)
}
.nav-link {
    padding-bottom: 5px;
    color: #313131 !important;
    font-weight: 500;
}
.nav-link:hover {
    color: var(--green) !important;
}
#btnbbb {
    padding: 0.1rem;
    border-radius: 0;
} a {
    padding-left: 0rem !important;
} i {
    padding-left: 1.2px;
}
#btnbbb:hover {
    background-color:  var(--btnHover)!important;
}
.margin {
    margin-left: 0rem !important;
}
.mzm {
    margin-left: 3rem !important;
}
.ssr {
    margin-left: 0.2rem !important;
}
.mm2 {
    color: white !important; 
}
.nav-item:hover {
    text-decoration: none;
}
.active {
    position: relative;
}
.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 0px;
    height: 4px;
    width: 45px;
    background-color: var(--green);
}
@media (min-width: 992px) { 
    .mdm {
        margin-left: 1rem;
    }
    .active::after {
        left: 0px;
        height: 4px;
        width: 85%;
    }
}

</style>