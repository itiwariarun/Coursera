import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const logIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };

  const [random, setRandom] = useState();
  const [random2, setRandom2] = useState();
  const [captcha, setcaptcha] = useState("");

  //For generating captcha
  const generateId = () => {
    const min = 1;
    const max = 100;
    const rand = Math.floor(min + Math.random() * (max - min) * 2);
    const rand2 = Math.floor(min + Math.random() * (max - min) * 3);

    setRandom(rand);
    setRandom2(rand2);
  };
  const captchavalue = (event) => {
    setcaptcha(event.target.value);
  };
  return (
    <main>
      <section>
        <h1>Log In</h1>
        <form onSubmit={(e) => logIn(e)}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            required
          />

          {random > 0 ? (
            <div className="flex items-baseline justify-between mb-4">
              <span className="captcha-text">
                {random}
                {random > 0 && " + "}
                {random2}
              </span>
              <Captcha generateId={generateId}>Regenerate Captcha</Captcha>
            </div>
          ) : (
            <div className="grid gap-2 text-center">
              <label htmlFor="captcha-button">Want to login ?</label>
              <Captcha generateId={generateId}>Generate Captcha</Captcha>
            </div>
          )}
          {random > 0 && (
            <>
              <label htmlFor="captcha">Enter Captcha To Login</label>

              <input
                id="captcha"
                name="captcha"
                className="captcha-generate"
                onChange={captchavalue}
                value={captcha}
                type="number"
              />
            </>
          )}
          <button
            className="tooltip login-button"
            disabled={!(random + random2 == captcha)}
          >
            Log In{" "}
            {!(random + random2 == captcha) && (
              <span className="tooltiptext">Enter Captcha To Login</span>
            )}
          </button>
        </form>
      </section>
    </main>
  );
}

function Captcha({ children, generateId }) {
  return (
    <button className="captcha-button-first" type="button" onClick={generateId}>
      {children}
    </button>
  );
}
