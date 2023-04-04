import { NavBar } from '@/components/NavBar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="flex flex-1 flex-col bg-background w-full h-[100%] min-h-screen"
            style={{ scrollBehavior: 'smooth' }}
        >
            <div className="h-[300px] lg:h-[200px] w-[300px] md:w-[700px] blur-[250px] md:blur-[400px] bg-blue-gradient rounded-full absolute -top-[12px] left-[25vw]" />
            <NavBar />
            <div className="">{children}</div>
        </div>
    );
}
