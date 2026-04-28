import wax from "@/assets/wax.png";
import MainSeal from "@/components/MainSeal";

export default function WaxSeal({ size = "w-32 h-32" }: { size?: string }) {
    return (
        <div className={`relative ${size} flex items-center justify-center`}>
            <img src={wax} className="absolute inset-0 w-full h-full object-contain" />
            <div className="relative z-10 w-[55%] h-[55%] flex items-center justify-center">
                <MainSeal size="w-full h-full" color="black" />
            </div>
        </div>
    );
}
