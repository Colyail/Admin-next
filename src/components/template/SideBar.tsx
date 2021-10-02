import { IconBell, IconSettings, IconHouse, IconLogout } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideBar() {
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Home" icon={IconHouse} />
                <MenuItem url="/settings" text="Settings" icon={IconSettings} />
                <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
            </ul>
            <ul>
                <MenuItem
                    text="Logout"
                    icon={IconLogout}
                    onClick={() => console.log('logout')}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}