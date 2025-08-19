import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function AdminDashboardPage() {
    const { email } = useContext(UserContext)
    return (
        <main>
            <p>Sveikas atvykes pilieti!</p>
            <p>Email: {email}</p>
        </main>
    );
}