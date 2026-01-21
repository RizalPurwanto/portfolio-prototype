
"use client";

export function NavCard({
  name,
  text,
  onClick,
  icon,
  cardStyle,
  cardClassName
}: {
  name: string;
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  cardStyle?: React.CSSProperties;
  cardClassName?: string;
}) {

  return <div
    onClick={() => {
      if (onClick) {
        onClick()
      }
    }}
    style={
      cardStyle

    }
    className={`w-[107px] h-[150px] md:w-[160px] md:h-[225px] xl:w-[320px] xl:h-[450px] border border-3 border-gray-500 rounded-[5px] md:rounded-[7px] xl:rounded-[15px] bg-blue-400 flex flex-col justify-between gap-1 md:gap-3 py-[7px] px-[7px] md:px-[10px] md:py-[10px] xl:px-[20px] xl:py-[20px] ${cardClassName}`}
  >
    {/*card name */}
    <div className="border border-1 border-gray-400 p-[1px] md:p-[5px] xl:p-[10px] font-semibold rounded-[3px] md:rounded-[5px] xl:rounded-[10px] text-[8px] md:text-[10px] xl:text-[15px] bg-gray-50 uppercase text-gray-600">
      {name}
    </div>

    {/*card Image */}
    <div className="border border-1 border-gray-400 p-[10px] font-semibold rounded-[10px] h-[auto] flex-1 flex  flex-row justify-center bg-gray-400">
 
      {icon}
    </div>

    {/*card text */}
    <div className="border border-1 border-gray-400 p-[10px] rounded-[3px] md:rounded-[5px] xl:rounded-[10px] h-[33px] md:h-[50px] xl:h-[100px] bg-gray-50 text-[7px] md:text-[10px] xl:text-[20px]">
      {text}
    </div>
  </div>
}