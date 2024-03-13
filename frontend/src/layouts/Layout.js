import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";

export const isAdmin = window.location.pathname.startsWith("/admin");

export const Layout = isAdmin ? AdminLayout : MainLayout;
