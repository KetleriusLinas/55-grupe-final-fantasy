import { Link } from "react-router";
import { PublicPageTitle } from "../../components/PublicPageTitle";

export function LogoutPage() {

    const isLoggedIn = true;


    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Logout' />
            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <div className="col-12">
                                <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                                <button className="btn btn-primary">Logout</button>
                            </div>
                            :
                            <div className="col-12">
                                <p>Jus atsijunges nuo sistemos!</p>
                                <Link to='/' className="btn btn-primary">Home</Link>
                            </div>
                    }
                </div>
            </div>
        </main>
    );
}

// pasidaryti kelis migtukus taip noriu atsijungti, ne nenoriu ir jei ne nusiunciama atgal i home page.