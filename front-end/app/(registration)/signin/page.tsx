import Image from "next/image";

export default function SignIn() {
  return (
    <>
      <div className="signup-navbar ">
        <div></div>
        <h1>Sign Up</h1>
      </div>
      <div className="wrapper border w-fit p-5">
        <h1>Sign Up</h1>
        <input
          className="border px-2"
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <br />

        <input
          className="border my-2 px-2"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />

        <br />
        <input
          className="border px-2"
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <br />
        <button>Sign Up</button>

        <div className="flex justify-center items-center gap-2 w-full">
          <hr className="w-1/3" />
          <p>or</p>
          <hr className="w-1/3" />
          <br />
        </div>

        <div className="google-login-button flex gap-2 border w-fit px-4 py-3 rounded-sm">
          <Image
            className=""
            src="/google.svg"
            alt="google logo"
            width={20}
            height={20}
          />
          <p>Sign up with Google</p>
        </div>
      </div>
    </>
  );
}
