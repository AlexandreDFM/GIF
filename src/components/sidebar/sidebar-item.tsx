import "./sidebar-item.css";


export const SidebarItem = (props: { title: string, icon?: JSX.Element, href: string }) => {
    return (
        <div className="sidebar-item">
            <a href={props.href} className={"sidebar-content-subtitle"}>
                <div className={"sidebar-content-subtitle-icon"}>
                    {props.icon ? props.icon : null}
                </div>
                <h3>{props.title}</h3>
            </a>
        </div>
    );
};