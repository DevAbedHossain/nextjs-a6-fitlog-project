import Image from "next/image";
import LogoFooter from "@/assets/footer-logo.png"


const Footer = () => {
    return (
        <section className="bg-black">
            <div className="container mx-auto py-4 flex gap-3 justify-between">
                <span className="uppercase flex gap-2 text-[16px] font-bold items-center"><Image src={LogoFooter} width={30} height={30} alt="FitLog" />Fitlog</span>
                <p className="text-[#6B7280] text-[14px]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </section>
    );
};

export default Footer;