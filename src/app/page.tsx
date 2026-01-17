import Image from "next/image";
import { RiRefreshFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col gap-2 w-full">
          <div className="font-semibold text-lg uppercase w-full">
            Card Component
          </div>
          <div className="w-full flex flex-row justify-center">
            {/*below is card component */}
            <div
              style={{
                backgroundImage: `
                      repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
                      repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
                      repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
                    `,
                backgroundSize: "44px 44px",
              }}
              className="w-[107px] h-[150px] md:w-[160px] md:h-[225px] xl:w-[320px] xl:h-[450px] border border-3 border-gray-500 rounded-[5px] md:rounded-[7px] xl:rounded-[15px] bg-blue-400 flex flex-col justify-between gap-1 md:gap-3 py-[7px] px-[7px] md:px-[10px] md:py-[10px] xl:px-[20px] xl:py-[20px] "
            >
              {/*card name */}
              <div className="border border-1 border-gray-400 p-[1px] md:p-[5px] xl:p-[10px] font-semibold rounded-[3px] md:rounded-[5px] xl:rounded-[10px] text-[8px] md:text-[10px] xl:text-[15px] bg-gray-50 uppercase text-gray-600">
                About
              </div>

              {/*card Image */}
              <div className="border border-1 border-gray-400 p-[10px] font-semibold rounded-[10px] h-[auto] flex-1 flex  flex-row justify-center bg-gray-400">
                <CgProfile className="text-[40px] md:text-[80px] xl:text-[200px]" />
              </div>

              {/*card text */}
              <div className="border border-1 border-gray-400 p-[10px] rounded-[3px] md:rounded-[5px] xl:rounded-[10px] h-[33px] md:h-[50px] xl:h-[100px] bg-gray-50 text-[7px] md:text-[10px] xl:text-[20px]">
                lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
