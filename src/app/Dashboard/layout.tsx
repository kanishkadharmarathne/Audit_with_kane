import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{ minHeight: "100vh", background: "#f5f6fa" }}>
            <main style={{ padding: "2rem" }}>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;