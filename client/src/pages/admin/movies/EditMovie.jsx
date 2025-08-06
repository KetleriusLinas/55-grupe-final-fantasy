import { AdminPageTitle } from "../../../components/AdminPageTitle";
import { AdminMovieForm } from "../../../components/forms/AdminMovieForm";


export function AdminEditMoviePage() {
    return (
        <main>
            <AdminPageTitle title="Edit movie" />

            <div className="container">
                <div className="row">
                    <AdminMovieForm />
                </div>
            </div>
        </main>
    );
}