
import bg_texture from '@/assets/bg_texture.png'
import header from '@/assets/header.png';
import { Navbar } from '@/components/Navbar.tsx';
import { RecentPublications } from '@/components/RecentPublications.tsx';
import { DropCapParagraph } from './lorepsum.tsx'

export default function App() {


    return (
        <>
            <div 
                className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${bg_texture})` }}
            >

                <Navbar />

                <header className="flex flex-col justify-center py-18 px-36">
                    <img
                        src={header}
                        alt="Header"
                        className="w-full h-auto object-contain"
                    />
                </header>

                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        
                        {/* Main Content */}
                        <main className="md:col-span-2">
                            <h1 className="font-[IM_Fell_English] text-4xl text-[#2b1e14]">
                                The Chronicle
                            </h1>
                            <DropCapParagraph />
                        </main>

                        {/* Right Sidebar */}
                        <aside className="md:col-span-1">
                            <RecentPublications />
                        </aside>
                    </div>
                </div>

            </div>
        </>

    )
}