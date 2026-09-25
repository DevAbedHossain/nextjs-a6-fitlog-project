import Image from "next/image";
import LogoFooter from "@/assets/footer-logo.png"


const Footer = () => {
    return (
        <section className="bg-black border-t border-[#1C1F26] px-5 sm:px-0">
            <div className="container mx-auto py-4 flex flex-col items-center sm:flex-row gap-3 justify-between">
                <span className="uppercase flex gap-2 text-[16px] font-bold items-center"><Image src={LogoFooter} width={30} height={30} alt="FitLog" />Fitlog</span>
                <p className="text-[#6B7280] text-[14px] text-center sm:text-right">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </section>
    );
};

export default Footer;