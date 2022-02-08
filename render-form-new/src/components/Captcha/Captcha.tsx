import captchaIcon from "../../assets/imgs/recaptcha-react.png";
import { useCallback, useEffect } from "react";
import {
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

import "./Captcha.css";

const Captcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }
    const token = await executeRecaptcha("yourAction");
    // Do whatever you want with the token
    console.log(token);
  }, []);
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);
  return (
    <div className="captcha-container">
      <div className="button-container">
        <button
          onClick={handleReCaptchaVerify}
        ></button>
      </div>
      <p>I am a human</p>
      <div className="image-container">
        <img src={captchaIcon} alt="CaptchaIcon" />
      </div>
    </div>
  );
};

export default Captcha;
