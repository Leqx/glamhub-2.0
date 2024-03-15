import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/lib/data/user';
import bcrypt from 'bcryptjs';

const credentialsConfig = Credentials({
  async authorize(credentials) {
    const validatedFields = LoginSchema.safeParse(credentials);

    if (validatedFields.success) {
      const { email, password } = validatedFields.data;

      const user = await getUserByEmail(email);
      if (!user || !user.password) return null;

      const passwordsMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (passwordsMatch) return user;
    }

    return null;
  },
});

const config = {
  pages: {
    signIn: '/auth/login',
  },
  providers: [Google, credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === '/middlewareProtected') return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
