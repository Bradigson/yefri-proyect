import Alert from 'sweetalert2';
const handleAlertUser = ()=>{
    Alert.fire({
        text : 'This user already exist',
        icon : 'error',
        iconColor:'#d33',
        confirmButtonColor:'#3085d6'
    })
}

const handleAlertPassword = ()=>{

    Alert.fire({
        title : 'Weak Password',
        text:'This password is too easy to guess. Change your password to something strong. And your password must contain at leat 6 caracter and be strong',
        icon : 'warning',
        confirmButtonColor:'#3085d6'
    })
}

const handleEmailValidation = ()=>{
    Alert.fire({
        title : 'Invalid Email',
        text : 'This email address is not available. Choose a different address',
        icon : 'error',
        iconColor : '#d33'
    })
}


const handleIncorrectPassword = ()=>{
    Alert.fire({
        title : 'Incorrect Password',
        text : 'The password you entered is incorrect. Please try again.',
        icon:'error',
        iconColor:'#d33'
    })
}

const handleUserSuccess = ()=>{
    Alert.fire({
        text : 'Congratulation, yur account has been successfully created',
        icon : 'success',
        showConfirmButton:false,
        timer:'800'

    })
}

const handleEmptyEmail = ()=>{

    Alert.fire({
        title : 'Warning',
        text : 'You have to enter a email',
        icon : 'warning',
    })
}


const handleEmptyPassword = ()=>{
    Alert.fire({
        title : 'Warning',
        text : 'You have to enter a password',
        icon : 'warning',
        
    })
}
export{
    handleAlertUser,
    handleAlertPassword,
    handleUserSuccess,
    handleEmailValidation,
    handleIncorrectPassword,
    handleEmptyEmail,
    handleEmptyPassword
}