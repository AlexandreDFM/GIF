import "./sidebar.css";
import { GrRobot } from "react-icons/gr";
import { FaCompass } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BiSolidAlbum } from "react-icons/bi";
import { MdAudiotrack } from "react-icons/md";
import { SidebarItem } from "./sidebar-item.tsx";

export interface SidebarPageRedirect {
    id: number;
    title: string;
    description: string;
    icon?: string;
    href: string;
    display: boolean;
}

export interface SidebarMenuRedirect {
    id: number;
    title: string;
    icon: string;
    display: boolean;
    pages: SidebarPageRedirect[];
}

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
    const isSidebarOpen = false;

    const sidebarMenuRedirect: SidebarMenuRedirect[] = [
        {
            id: 1,
            title: "Browse Music",
            icon: "home",
            display: true,
            pages: [
                {
                    id: 1,
                    title: "Home",
                    description: "Home Page",
                    icon: "home",
                    href: "/",
                    display: true,
                },
                {
                    id: 2,
                    title: "Albums",
                    description: "Albums Page",
                    icon: "album",
                    href: "/landing",
                    display: true,
                },
                {
                    id: 3,
                    title: "Tracks",
                    description: "Tracks Page",
                    icon: "tracks",
                    href: "/",
                    display: true,
                },
                {
                    id: 4,
                    title: "Generate",
                    description: "Generate Page",
                    icon: "generate",
                    href: "/generate",
                    display: true,
                },
            ],
        },
        {
            id: 2,
            title: "Library",
            icon: "album",
            display: true,
            pages: [
                {
                    id: 1,
                    title: "Recently Played",
                    description: "Recently Played Page",
                    href: "/",
                    display: true,
                },
                {
                    id: 2,
                    title: "Favorite Tracks",
                    description: "Favorite Tracks Page",
                    href: "/",
                    display: true,
                },
                {
                    id: 3,
                    title: "Charts",
                    description: "Charts Page",
                    href: "/",
                    display: true,
                },
                {
                    id: 4,
                    title: "Radio",
                    description: "Radio Page",
                    href: "/",
                    display: true,
                },
            ],
        },
    ];

    const iconMap: { [key: string]: JSX.Element } = {
        home: <GoHomeFill />,
        compass: <FaCompass />,
        album: <BiSolidAlbum />,
        tracks: <MdAudiotrack />,
        generate: <GrRobot />,
    };

    return (
        <>
            <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                {isSidebarOpen ? (
                    <section>
                        <div className="unfolded">
                            <nav className={"sidebar-content-container"}>
                                {sidebarMenuRedirect.map((menu) => (
                                    <>
                                        <h1 className={"sidebar-content-title"}>
                                            {menu.title}
                                        </h1>
                                        <ul className="flex center sidebar-content">
                                            {menu.pages.map((page) => (
                                                <>
                                                    <>
                                                        {page.icon ? (
                                                            <SidebarItem
                                                                title={
                                                                    page.title
                                                                }
                                                                href={page.href}
                                                                icon={
                                                                    iconMap[
                                                                        page
                                                                            .icon
                                                                    ]
                                                                }
                                                            />
                                                        ) : (
                                                            <SidebarItem
                                                                title={
                                                                    page.title
                                                                }
                                                                href={page.href}
                                                            />
                                                        )}
                                                    </>
                                                </>
                                            ))}
                                        </ul>
                                    </>
                                ))}
                            </nav>
                        </div>
                    </section>
                ) : (
                    <div className="folded">
                        <nav className={"sidebar-content-container"}>
                            {sidebarMenuRedirect.map((menu) => (
                                <ul className="flex center sidebar-content">
                                    {menu.pages.map((page) => (
                                        <a
                                            href={page.href}
                                            className={"sidebar-content-icon"}
                                        >
                                            {page.icon
                                                ? iconMap[page.icon]
                                                : null}
                                        </a>
                                    ))}
                                </ul>
                            ))}
                        </nav>
                    </div>
                )}
            </aside>
            <div className="sidebar-aside">{children}</div>
        </>
    );
};
