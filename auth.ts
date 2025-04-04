import NextAuth from "next-auth"
import github from "next-auth/providers/github"
import { AUTHOR_BY_GITHUB_ID_QUERY } from '@/sanity/lib/query';
import { client } from "@/sanity/lib/client";
import { WriteClient } from "@/sanity/lib/write-client";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const existingUser = await client.withConfig({useCdn: false}).fetch(
        AUTHOR_BY_GITHUB_ID_QUERY, { id: profile?.id });
      if (!existingUser) {
        await WriteClient.create({
          _type: "author",
          id: profile?.id,
          name: user?.name,
          username: profile?.login,
          image: user?.image,
          email: user?.email,
          bio: profile?.bio || "",
        });
      }
      return true; 
    
    
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client.withConfig({ useCdn: false }).fetch(
          AUTHOR_BY_GITHUB_ID_QUERY,
          { id: profile.id }
        );
    
        if (user) {
          token.id = user._id;
        }
      }
    
      return token;
    },

    async session({ session, token }) {
      Object.assign(session, {id: token.id});
      return session;
    },
  },
});