import { signIn, signOut, useSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "~/lib/utils";
import { Button } from "./ui/button";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex h-16 w-full items-center ">
      <div className="flex-1 text-3xl font-bold text-slate-700">
        <h1>MemoMate</h1>
      </div>
      <div className="h-full flex-none gap-1 py-4">
        {/* <img className='h-full rounded-full' src={sessionData?.user?.image || ''} alt={sessionData?.user?.name || ''}/> */}

        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage
                src={sessionData?.user.image}
                alt={sessionData?.user.name}
              />
              <AvatarFallback>
                {getInitials(sessionData?.user.name as string)}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-auto max-w-[320px] space-y-2 bg-slate-50">
            <div className="text-lg">
              {sessionData?.user.name
                ? `${sessionData.user.name}`
                : ""}
            </div>
            <Button className="w-full" onClick={() => void signOut()}>Log out</Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
