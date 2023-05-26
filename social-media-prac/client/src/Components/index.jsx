import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
const SocailLogin = () => {

    const resposneGoogle = (response) => {
        console.log(response)
    }

    const responseFacebook = (response) => {
        console.log(response)
    }
    return (
        <div>
            <h1>Social Media Login </h1>
            <GoogleLogin
                clientId='XUZ'
                buttonText='login'
                onSuccess={resposneGoogle}
                cookiePolicy={'single_host_orgin'}
            />

            <FacebookLogin
                appId="YOUR_FACEBOOK_APP_ID"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        </div>
    )
}

export default SocailLogin