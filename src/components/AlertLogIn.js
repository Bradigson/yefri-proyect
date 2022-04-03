import Alert from 'sweetalert2';

const handleEmaiInput = ()=>{
    Alert.fire({
        title:'Warning',
        text : 'You have to enter a email address',
        icon : 'warning'
    })
}
const handlePasswordInput = ()=>{
    Alert.fire({
        title:'Warning',
        text : 'You have to enter a password',
        icon : 'warning'
    })
}

const handleUserNotFound = ()=>{
    Alert.fire({
        title:'User Not Found',
        text : 'The user that you are trying get access could not be found. Please check the email and try again.',
        icon : 'error',
        iconColor:'#d33'
    })
}


const handleIcorrctPassword = ()=>{
    Alert.fire({
        title:'Incorrect PassWord',
        text : 'The password you entered is incorrect. Please try again',
        icon : 'error',
        iconColor:'#d33'
    })
}


const handleSuccessAccount = ()=>{
    Alert.fire({
        title : 'Welcome',
        icon : 'success',
        confirmButtonColor : '#28B463',
    })
}
export{
    handleUserNotFound,
    handleEmaiInput,
    handlePasswordInput,
    handleIcorrctPassword, 
    handleSuccessAccount
}