<template>
    <div class="container-fluid p-0 m-0">
        <b-navbar class="navbar" toggleable="lg" type="dark">
            <!-- <b-navbar-brand class="brand" href="/">LIVE SCORE
                <div class="red-dot"></div>
            </b-navbar-brand> -->

            <b-navbar-toggle target="nav-collapse" class="bbb"></b-navbar-toggle>

            <b-collapse class="collapseNav collapse show" id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="routerLink" to='/'>Home</router-link>
                    <router-link class="routerLink" to='/about-us'>About Us</router-link>
                    <router-link class="routerLink" to='/contact'>Contact</router-link>
                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    transition: 0.4s;
}

.brand {
    padding: 5px 10px;
    border-radius: 3px;
    border: 2px solid white;
    font-family: 'Montserrat';
    font-weight: 700;
}

.red-dot {
    height: 10px;
    width: 10px;
    margin: 0px 1px 3px 3px;
    display: inline-block;
    border-radius: 50%;
    background-color: rgb(253 0 0);
}

a.routerLink {
    color: white;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
}

.collapseNav {
    border-left: 3px solid white;
    padding-left: 1rem;
}

.bbb {

    margin: 10px 0;
}

.navbar {
    width: 100%;
    display: flex;
    padding: 15px;
    /* background-color: #7c1414; */
    background-color: #000000;
    border-bottom: 6px solid rgb(255, 183, 0);
}

.collapseNav {
    /* background-color: #7c1414; */
    background-color: #000000;


}

nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px;
    list-style: circle;
}

nav ul a {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* margin: 0 0 0 0; */
    text-decoration: none;

    padding: 12px;
    margin-left: 5px;
    margin-right: 5px;
}

nav ul a:hover {
    text-decoration: none;
    background-color: rgb(239, 239, 239);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px; */
}
</style>