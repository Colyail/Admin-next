import useAppData from "../../data/hook/useAppData";
import ButtonToggleTheme from "./ButtonToggleTheme";
import Title from "./Title";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {

    const { theme, toggleTheme } = useAppData()

    return (
        <div className={`flex`}>
            <Title
                title={props.title}
                subtitle={props.subtitle}
            />
            <div className={`flex flex-grow justify-end items-center`}>
                <ButtonToggleTheme
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <UserAvatar className="ml-3" />
            </div>
        </div>
    )
}