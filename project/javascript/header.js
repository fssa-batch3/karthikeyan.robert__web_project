const root = window.location.origin;
const beforeLogin = `<header>
        <div class="navbar">
               <div class="logodiv"><a href = "${root}/index.html"><img class = "logo" src="${root}/assets/images/cattles/logo1.png" alt="logo"></a></div>
            <div class="lotit"><a href = "${root}/index.html"><h1 class = "hd"> KowMart </h1></a></div>
        </div>
        <div id="mySidenav" class="sidenav">
             <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <ul class = "navbar">
                <li><a href="${root}/pages/cattle/cattle_index.html">Cattles</a></li>
                <li><a href="${root}/pages/about.html">About Us</a></li>
                <li class = "logbutton"><a href="${root}/pages/sign in.html"><button class = "btn"> LOGIN </button></a></li>
            </ul>
        </div>
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
        <div class = "link_container">
            <ul class = "navbar">
                <li><a href="${root}/pages/cattle/cattle_index.html">Cattles</a></li>
                <li><a href="${root}/pages/about.html">About Us</a></li>
            </ul>
        </div>
        <div class = "butcot"><div class = "butspace"><a href="${root}/pages/sign in.html"><button class = "btn" id = "login"> LOGIN </button></a></div></div>
    </header>`
const afterLogin = `<header>
        <div class="navbar">
            <div class="logodiv"><a href="${root}/index.html"><img class="logo" src="${root}/assets/images/cattles/logo1.png" alt="logo"></a></div>
            <div class="lotit"><a href="${root}/index.html">
                <h1 class="hd"> KowMart </h1></a></div>
            </div>
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <ul class="navbar">
                <li><a href="${root}/pages/cattle/cattle_index.html">Cattles</a></li>
                <li><a href="${root}/pages/about.html">About Us</a></li>
                <li class="logbutton"><a href="${root}/cattle/sell_details1.html"><button class="sell"> SELL </button></a>
                </li>
                <li class="profile_icon"><a href="${root}/#"><i class="fa-solid fa-user"></i></a></li>
            </ul>
        </div>
        <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
        <div class="link_container">
            <ul class="navbar">
                <li><a href="${root}/pages/cattle/cattle_index.html">Cattles</a></li>
                <li><a href="${root}/pages/about.html">About Us</a></li>
            </ul>
        </div>
        <div class="navbar butcot" id="sellpro">
            <div class="butspace"><a href="${root}/pages/cattle/sell_details1.html"> <button class="sell"> SELL </button> </a></div>
            <div class="user"><a href=${root}/pages/buyer_profile.html><i class="fa-solid fa-user"></i></a></div>
        </div>
    </header>`
let phone_id = JSON.parse(localStorage.getItem("phone_no_id"));
if (phone_id) {
    document.body.insertAdjacentHTML("afterbegin", afterLogin);
    const login_button = document.getElementById("login");
    login_button?.addEventListener("click", () => document.body.innerHTML = beforeLogin)
    const logout_button = document.querySelector("#logOut");
    logout_button?.addEventListener("click", () => {
        if (confirm("Are you sure you want to logout")) {
            localStorage.removeItem("phone_no_id");
            document.body.innerHTML = beforeLogin;
            window.location.href = "../../index.html"
        }
    })
}
else {
    document.body.insertAdjacentHTML("afterbegin", beforeLogin);
    const logout_button = document.getElementById("logOut");
    logout_button?.removeEventListener("click", () => document.body.innerHTML = afterLogin);
    localStorage.removeItem("phone_no_id");
}