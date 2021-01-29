
export default {


    isAuthenticated : () => {
        //return fetch()
        axios
            .get("http://localhost:8000/user/authenticated", {
                email,
                password,
            })
            // The response contains the Success Message and Token from the 
            // User Controller Login Function in the Back End
            .then((response) => { })

    },

    login : user => {

        axios
            .post("", {})
            .then((response) => {})

    }
}