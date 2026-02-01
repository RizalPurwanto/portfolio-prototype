"use client";
import { NavCardProps } from "@/types/NavCardPropTypes";
import { NavCard } from "./NavCard";
import cn from "@/utils/class-names";
import { useState } from "react";


export function CardNavigator({

    navItems
}: {
    navItems: NavCardProps[]
}) {
    const ITEM_COUNT = navItems.length // amount of cards to draw
    const RADIUS = 360    // radius of the curve
    const MAX_WIDTH = ITEM_COUNT * 100 // max width to draw the cards in

    // the angle between the left-most and the right-most card
    const maxAngle = 2 * Math.asin(MAX_WIDTH / (2 * RADIUS))
    // the angle between each card (in radians)
    const angle = maxAngle / (ITEM_COUNT - 1)

    const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

    return <div
        style={{
            // bottom: "calc(-90vh)"
            top: "calc(140vh)"
        }}
        className="fixed  h-[50px] w-full h-auto flex flex-row justify-center left-0 gap-2 bottom-0 items-center">

        <div className="relative w-[720px] h-[720px] rounded-[360px] flex flex-row items-center justify-center"
            style={{
                transform: `rotate(${maxAngle / 2 * -1}rad)`,
                position: 'relative'
            }}
        >
            {navItems.map((item, index) => {
                const x = Math.sin(angle * index) * RADIUS
                const y = Math.cos(angle * index) * RADIUS * -1

                const defAngle = angle * index; //default angle for each card, when whole hand splayed like a fan 
                const hovAngle = maxAngle / 2; //this makes the card upright/vertical on hover

                return <NavCard
                    key={item.name + index}
                    onMouseEnter={() => setHoveredIndex(index)} // on hover set the index to change card angle to upright
                    onMouseLeave={() => setHoveredIndex(null)} // on leave set to null to revert card position
                    cardStyle={{
                        ...item.cardStyle,
                        position: "absolute",
                        transform:`translate(${x}px, ${y}px) rotate(${hoveredIndex==index? `${hovAngle}rad`:`${defAngle}rad`})`,
                         
                    }}
                    cardClassName={cn(item.cardClassName,  ` transition delay-150 duration-300 ease-in-out  hover:z-2 hover:scale-[1.2] ` )}
                    name={item.name + ``}
                    icon={item.icon}
                    onClick={() => { }}
                    text={item.text}

                />
               
            }
            )}
        </div>
    </div>
}