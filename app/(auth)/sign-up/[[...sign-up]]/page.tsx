import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-white w-full m-auto absolute top-0 left-0 flex items-center justify-center min-h-[100vh]">
      <SignUp />
    </div>
  );
}
