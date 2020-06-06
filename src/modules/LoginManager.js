export default {
    loginAccount(emailValue, passwordValue){
    return fetch(`http://localhost:5002/libraries?email=${emailValue}`)
    .then(r => {
        console.log(r.status)
        if(r.status === 400){
            return window.alert(`I'm sorry! The email you entered is not in our system. Please try again!`)
        }
        else{return r.json()}
    })
    }
}