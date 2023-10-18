import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { supabase } from './supabase'; // Import your Supabase client
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID as string,
    //   clientSecret: process.env.GITHUB_SECRET as string,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID as string,
    //   clientSecret: process.env.GOOGLE_SECRET as string,
    //   authorization: {
    //     params: {
    //       prompt: 'consent',
    //       access_type: 'offline',
    //       response_type: 'code',
    //     },
    //   },
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username:',
          type: 'text',
          placeholder: 'Mattis',
          value: 'Mattis',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: '00000000',
          value: '00000000',
        },
      },

      // async authorize(credentials) {
      //   const user = { id: '', name: 'WCDATS', password: 'WCDATS' };
      //   if (
      //     credentials?.username === user.name &&
      //     credentials?.password === user.password
      //   ) {
      //     return user;
      //   } else {
      //     return null;
      //   }
      // },
      async authorize(credentials) {
        // Use Supabase to check if the user exists and the credentials are correct
        const { data: users, error } = await supabase
          .from('user')
          .select('*')
          .eq('user_account', credentials.username);

        if (error) {
          throw new Error(error.message);
        }
        if (users && users.length > 0) {
          const user = users[0];

          if (user.user_password === credentials.password) {
            const userObject = {
              id: user.id,
              name: user.user_name, // 根據您的 Supabase 模式調整字段名稱
            };

            // 將已認證用戶的信息保存在 session 中
            const sessionObject = { ...userObject, credentials: credentials };
            return sessionObject;
          }
        }

        return null; // Return null if the user is not found or the password doesn't match
      },
    }),
  ],
};
