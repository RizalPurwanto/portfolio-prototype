import Image from "next/image";
import { RiRefreshFill } from "react-icons/ri";

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
              className="w-[320px] h-[450px] border border-3 border-gray-500 rounded-[15px] bg-blue-400 flex flex-col justify-between gap-3 px-[20px] py-[20px] "
            >
              {/*card name */}
              <div className="border border-1 border-gray-400 p-[10px] font-semibold rounded-[10px] bg-gray-50 text-gray-600">
                Card Name
              </div>

              {/*card Image */}
              <div className="border border-1 border-gray-400 p-[10px] font-semibold rounded-[10px] h-[auto] flex-1 flex  flex-row justify-center bg-gray-400">
                <RiRefreshFill size={200} />
              </div>

              {/*card text */}
              <div className="border border-1 border-gray-400 p-[10px] rounded-[10px] h-[100px] bg-gray-50">
                lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
