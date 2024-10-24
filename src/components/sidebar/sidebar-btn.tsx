import React from 'react';
import './sidebar-btn.css';
import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";

const SidebarBtn = ({icon, onClick, children}: {icon: string, onClick: () => void, children?: React.ReactNode}) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            <>
            {icon === "unfolded" ? (
                <GoSidebarCollapse />
            ) : (
                <GoSidebarExpand />
            )}
            </>
            {children}
        </button>
    );
};

export default SidebarBtn;
