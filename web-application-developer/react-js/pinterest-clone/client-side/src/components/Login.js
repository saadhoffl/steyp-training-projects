import pinterestbg from '../assets/videos/pinterest-bg-video.mp4'
import GoogleLogin from "react-google-login"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { client } from "../client";

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        //initiates Google Oauth setup
        gapi.load("client:auth2", () => {
          gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
            scope: "profile",
          });
        });
      }, []);

    const responseGoogle = (response) => {
        localStorage.setItem("user", JSON.stringify(response.profileObj));
        const { name, googleId, imageUrl } = response.profileObj;
        const doc = {
            _id: googleId,
            _type: "user",
            userName: name,
            image: imageUrl,
        };
        client.createIfNotExists(doc).then(() => {
            navigate("/", { replace: true });
        });
    }

    return <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full bg-black'>

            <video 
            src={pinterestbg} 
            type="video/mp4" 
            loop 
            controls={false} 
            muted 
            autoPlay 
            className='w-full h-full object-cover opacity-20'
            />

            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black-overlay'>
                <div className="shadow-2xl">
                    <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                    render={(renderProps) => (
                        <button
                        type="button"
                        className="bg-cyan-200 flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        >
                        <FcGoogle className="mr-4" /> Sign in with google
                        </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="single_host_origin"
                    />
                </div>
            </div>

        </div>
    </div>
}

export default Login
