import { CustomButton } from "@/components/Button";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <div className="signup-navbar ">
        <div></div>
        <h1 className="font-md text-4xl">Sign Up</h1>
      </div>
      <div className="wrapper border w-fit p-5">
        <h1 className="my-2 font-semibold">Sign Up</h1>
        <input
          className="border px-2 w-full"
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <br />

        <input
          className="border my-2 px-2 w-full"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />

        <br />
        <input
          className="border px-2 w-full"
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <br />
        <CustomButton className="w-full my-4" variant={"primary"} size={"sm"}>Sign Up</CustomButton>

        <div className="flex gap-2">
        <p>Already have an account?</p>
        <a href="" className="underline">Log in</a>
        </div>

        <div className="flex justify-center items-center gap-2 w-full mb-4">
          <hr className="w-1/3" />
          <p>or</p>
          <hr className="w-1/3" />
          <br />
        </div>

        <CustomButton className="google-login-button flex gap-2 w-full px-4 py-3" variant={"outline"}>
          <Image
            className=""
            src="/google.svg"
            alt="google logo"
            width={20}
            height={20}
          />
          <p>Sign up with Google</p>
        </CustomButton>
      </div>
    </div>
  );
}
