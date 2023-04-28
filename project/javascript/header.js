// const root = window.location.origin;
// const beforeLogin = `<header>

//         <a href="${root}/index.html"> <img src="${root}/project/assets/images/logo.png" alt="image" class="logo" /> </a>
//             <div class="search_input_logo">
//                 <input class="search_box" placeholder="Search Campaigns & Petitions"></input>
//                 <button class="search_button"><img src="${root}/project/assets/images/search_logo.png" alt="image"
//                         class="search_logo" /></button>
//             </div>
//             <div class="Login_Register">
//                 <a href="${root}/project/payment login page/login_page.html" class="login_register" >
//                 <button class="Login" id="login" type="submit">Login
//                 </button>
//                 </a>

//             </div>

//         </header>`

// const afterLogin = `<header>

//                         <a href="${root}/Main_page.html"> <img src="${root}/assets/images/logo.png" alt="image" class="logo" /> </a>
//                         <div class="search_input_logo">
//                             <input class="search_box" placeholder="Search Campaigns & Petitions"></input>
//                             <button class="search_button"><img src="${root}/assets/images/search_logo.png" alt="image" class="search_logo" /></button>
//                         </div>
//                         <div class="profile_logo">

//                             <div id="user_name" class="profile_name">

//                             </div>

//                             <div class="logo_profile">
//                             <div class="dropdown">
//                                 <img src="${root}/assets/images/user.png" alt="image" class="user_logo"/>
//                                 <div class="dropdown-content">
//                                 <a href="${root}/our profile/our_profile.html">profile</a>
//                                 <a href="${root}/index.html" id="logout">Log Out</a>

//                                 </div>
//                                 </div>
//                             </div>

//                         </div>

//                     </header>`

// let phone_id = JSON.parse(localStorage.getItem("userId"));
// if (phone_id) {

//     document.body.insertAdjacentHTML("afterbegin", afterLogin);

//     // const login_button = document.getElementsByClassName("Login");
//     // login_button?.addEventListener("click", () => document.body.innerHTML = beforeLogin)
//     const logout_button = document.querySelector("#logout");
//     logout_button?.addEventListener("click", () => {
//         if (confirm("Are you sure you want to logout")) {
//             localStorage.removeItem("userId");
//             document.body.innerHTML = beforeLogin;
//             window.location.href = "./index.html"
//         }
//     })
// }
// else {
//     document.body.insertAdjacentHTML("afterbegin", beforeLogin);
//     // const logout_button = document.getElementById("logout");
//     // logout_button?.removeEventListener("click", () => document.body.innerHTML = afterLogin);
//     // localStorage.removeItem("userID");
// }
