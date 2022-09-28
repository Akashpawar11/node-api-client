<template>
    <div class="container-fluid p-0 m-0">
        <header-nav />

        <div class="row d-flex flex-column">
            <h1 class="home-header pt-2 d-inline-block">Users List</h1>
            <input v-if="!addUser" type="text" v-model="id1" @keyup="search()">
            <button class="btn btn-primary" @click="addForm">Add User</button>
        </div>

        <div v-if="addUser" class="form d-flex">
            <input class="input" name="id" type="number" v-model="id" placeholder="id"><br>
            <input class="input" name="name" type="text" v-model="name" placeholder="name"><br>
            <input class="input" name="email" type="email" v-model="email" placeholder="email"><br>
            <input class="input" name="created_at" type="date" v-model="created_at" placeholder="created_at"><br>
            <button class="adduser-btn btn btn-dark" @click="add()">submit</button>
        </div>

        <div v-if="!addUser" class="container-fluid p-0 m-0">
            <table class="table">
                <thead class="bg-dark text-white">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody v-if="!single">
                    <tr v-for='user in data' :key="user.id">
                        <th scope="row">{{user.id}}</th>
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.created_at}}</td>
                    </tr>
                </tbody>
                <tbody v-if="single">
                    <tr>
                        <th scope="row">{{this.searchData.id}}</th>
                        <td>{{this.searchData.name}}</td>
                        <td>{{this.searchData.email}}</td>
                        <td>{{this.searchData.created_at}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import HeaderNav from '../components/Header.vue'
export default {
    name: 'HomePage',
    components: {
        HeaderNav
    },
    data() {
        return {
            data: [],
            searchData: [],
            id1: '',
            single: false,
            id: '',
            name: '',
            email: '',
            created_at: '',
            user: {},
            addUser: false
        }
    },
    methods: {
        async search() {
            if (this.id1 == '') {
                this.single = false
                let results = await axios.get('http://localhost:3000/users')
                console.log(results)
                this.data = results.data.data
                console.log(this.data)
            } else {
                let result = await axios.get(`http://localhost:3000/user/${this.id1}`)
                console.log(result)
                this.single = true
                this.searchData = result.data.data
            }
            console.log(this.id1)
        },
        async add() {
            await axios.post(`http://localhost:3000/user`, {
                "id": this.id,
                "name": this.name,
                "email": this.email,
                "created_at": this.created_at
            }).then((res) => {
                console.log(res.data)
            }).catch(() => {
                alert('something went wrong')
            })
        },
        addForm() {
            this.addUser = !this.addUser
        }
    },
    async mounted() {
        if (!this.single && this.id1 == '') {
            let results = await axios.get('http://localhost:3000/users')
            console.log(results)
            this.data = results.data.data
            console.log(this.data)
        }
    }
}
</script>

<style>
.home-header {
    font-family: 'Montserrat';
    font-weight: 900;
}
.input{
    width: 45%;
    max-width: 25rem;
    min-width: 18rem;
    padding: 10px;
    border-radius: 5px;
}
.form{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: rem;
}
.adduser-btn{
    width: 45%;
    max-width: 25rem;
    min-width: 18rem;
    padding: 8px;
    border-radius: 8px;
}
</style>