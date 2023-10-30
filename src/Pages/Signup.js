import React from 'react';
import signupImg from '../assets/signup.png';
import Template from '../Components/Template';

function Signup({ setIsLogged }) {
return (
    <Template
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={signupImg}
    formtype="Signup"
    setIsLogged={setIsLogged}
    />
);
}

export default Signup;
