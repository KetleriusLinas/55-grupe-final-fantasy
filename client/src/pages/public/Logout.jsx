import { Link } from "react-router";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function LogoutPage() {
    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Logout' />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                        <Link to='/' className="btn btn-primary">Home</Link>
                    </div>
                    <div className="col-12">
                        <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                        <button className="btn btn-primary">Logout</button>

                    </div>
                </div>
            </div>
        </main>
    );
}