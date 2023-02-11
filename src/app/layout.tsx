import './globals.css';
import { NavBar } from '@/components/NavBar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div
                    className="flex flex-1 flex-col bg-background w-full h-screen overflow-hidden"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    <NavBar />
                    {children}
                </div>
            </body>
        </html>
    );
}
