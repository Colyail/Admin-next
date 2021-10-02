import { IconMoon, IconSum } from "../icons";

interface ButtonToggleThemeProps {
    theme: string
    toggleTheme: () => void
}

export default function ButtonToggleTheme(props: ButtonToggleThemeProps) {
    return (
        props.theme === "dark" ? (

            <div onClick={props.toggleTheme} className={`
                hidden sm:flex items-center justify-end cursor-pointer
                bg-gradient-to-r from-gray-500 to-gray-900
                w-14 h-8 p-1 rounded-full
            `}>
                <div className={`
                    flex items-center justify-center
                    bg-black text-yellow-300
                    w-6 h-6 rounded-full
                `}>
                    {IconMoon(4)}
                </div>
            </div>

        ) : (

            <div onClick={props.toggleTheme} className={`
                hidden sm:flex items-center cursor-pointer
                bg-gradient-to-r from-yellow-300 to-yellow-600
                w-14 h-8 p-1 rounded-full
            `}>
                <div className={`
                    flex items-center justify-center
                    bg-white text-yellow-600
                    w-6 h-6 rounded-full
                `}>
                    {IconSum(4)}
                </div>
            </div>

        )
    )
}