
import Image from "next/image";
import { RiRefreshFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { NavCard } from "@/components/NavCard";
import { NavCardProps } from "@/types/NavCardPropTypes";
import { CardNavigator } from "@/components/CardNavigator";

export default function Home() {

  const navItems: NavCardProps[] = [
    {
      cardStyle: {
        backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
          `,
        backgroundSize: "44px 44px",

      },
      icon: <CgProfile className="text-[40px] md:text-[80px] " />,
      name: "About",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eaque?"

    },
    {
      cardStyle: {
        backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
          `,
        backgroundSize: "44px 44px",

      },
      icon: <CgProfile className="text-[40px] md:text-[80px] " />,
      name: "About",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eaque?"

    },
    {
      cardStyle: {
        backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
          `,
        backgroundSize: "44px 44px",

      },
      icon: <CgProfile className="text-[40px] md:text-[80px] " />,
      name: "About",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eaque?"

    },
    {
      cardStyle: {
        backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
          `,
        backgroundSize: "44px 44px",

      },
      icon: <CgProfile className="text-[40px] md:text-[80px]" />,
      name: "About",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eaque?"

    },
    {
      cardStyle: {
        backgroundImage: `
            repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
            repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
          `,
        backgroundSize: "44px 44px",

      },
      icon: <CgProfile className="text-[40px] md:text-[80px]" />,
      name: "About",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eaque?"

    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-2 w-full h-[10000px]">
          <div className="font-semibold text-lg uppercase w-full">
            Card Component
          </div>
          <div className="w-full flex flex-row justify-center">
            {/*below is card component */}
            <NavCard
              cardClassName=""
              cardStyle={{
                backgroundImage: `
                    repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
                    repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
                    repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
                  `,
                backgroundSize: "44px 44px",
              }
              }
              icon={
                <CgProfile className="text-[40px] md:text-[80px] " />
              }
              name="About"
              text={"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eaque?"}

            />
          </div>
        </div>

       
        <CardNavigator
          navItems={navItems}
        />
      </main>
    </div>
  );
}
