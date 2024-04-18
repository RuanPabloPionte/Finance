import { auth } from "@/auth";
import { Session } from "next-auth";

const UserAvatar = async () => {
  const session: Session | null = await auth();

  return (
    <div className="bg-slate-200 rounded-full h-10 w-10 text-center">
      <p className="mt-2 text-blue-400">
        {session?.user?.email?.slice(0, 1).toUpperCase()}
      </p>
    </div>
  );
};

export default UserAvatar;
