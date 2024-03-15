import { Poppins } from 'next/font/google';

import { auth, signIn, signOut } from 'auth';

import { ShopNavbar } from '@/components/shop/navigation/navbar';
import Main from '@/components/shared/main';

//import { LoginButton } from '@/components/auth/login-button';

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex flex-col w-full h-full">
      <ShopNavbar user={session?.user} />
      <Main />
    </main>
  );
}
