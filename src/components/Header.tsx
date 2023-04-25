import {signIn, signOut, useSession} from 'next-auth/react'

export const Header =()=>{
    const {data: sessionData} = useSession();

    return (
        <div className='h-16 px-4 w-full flex items-center '>
            <div className='flex-1 text-slate-700 font-bold text-3xl'>
                {/* {sessionData?.user.name ? `Notes for ${sessionData.user.name}`: ''} */}
                <h1>MemoMate</h1>
            </div>
            <div className='flex-none gap-1 h-full py-2'>
                {/* <img className='h-full rounded-full' src={sessionData?.user?.image || ''} alt={sessionData?.user?.name || ''}/> */}
            </div>
        </div>
    )

}