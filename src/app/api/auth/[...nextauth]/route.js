import NextAuth from "next-auth/next";
import GoogleProviders from "next-auth/providers/google";
import connectDB from "../../../../../middleware/mongoose";
import User from "../../../../../models/User";
import { cookies } from "next/headers";
import { getCookies, setCookie } from "cookies-next";

export const authOptions = {
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session }) {
            try {
                const sessionUser = await User.findOne({ email: session.user.email });
                session.user = sessionUser
                return session;
            } catch (error) {
                console.error(error);
            }
        },
        async signIn({ profile }) {
            try {
                const { role } = getCookies({ req, res });
                const existingUser = await User.findOne({ email: profile.email });
                if(!existingUser) {
                    if (role == 'patient' || role == 'receptionist') {
                        await User.create({
                            email: profile.email,
                            name: profile.name,
                            avatarUrl: profile.picture
                        })
                    }
                    setCookie('newUser', true, { cookies })
                }
                else {
                    setCookie('newUser', false, { cookies })
                }
                setCookie('loggedIn', true, { cookies })
                return true
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    }
}

const handler = connectDB(
    async function auth(req, res) {
        return await NextAuth(req, res, {
            providers: [
                GoogleProviders({
                    clientId: process.env.GOOGLE_ID,
                    clientSecret: process.env.GOOGLE_SECRET
                })
            ],
            secret: process.env.NEXTAUTH_SECRET,
            callbacks: {
                async session({ session }) {
                    try {
                        const sessionUser = await User.findOne({ email: session.user.email });
                        session.user = sessionUser
                        return session;
                    } catch (error) {
                        console.error(error)
                    }
                },
                async signIn({ profile }) {
                    try {
                        const { role } = getCookies({ res, req })
                        const existingUser = await User.findOne({ email: profile.email })
                        if (!existingUser) {
                            if (role === 'Student' || role === 'Client' || role === 'Professor') {
                                await User.create({
                                    email: profile.email,
                                    name: profile.name,
                                    avatarUrl: profile.picture,
                                    invites: [],
                                    role
                                })
                            }
                            setCookie('newUser', true, { cookies })
                        }
                        else {
                            setCookie('newUser', false, { cookies })
                        }
                        setCookie('loggedIn', true, { cookies })
                        return true
                    } catch (error) {
                        console.log(error)
                        return false;
                    }
                }
            }
        })
    }
)

export { handler as GET, handler as POST }
        