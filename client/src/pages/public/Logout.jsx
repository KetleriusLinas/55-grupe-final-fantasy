import { Link, useNavigate } from "react-router";
import { PublicPageTitle } from "../../components/PublicPageTitle";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext.js";

export function LogoutPage() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useContext(UserContext);

    function handleLogoutClick() {
        logout();
        navigate('/');
        // timeout uzdetas per kiek laiko atjungs nuo sistemos.
        // setTimeout(() => {
        //     navigate('/');
        // }, 3000);
    }

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Logout' />
            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <div className="col-12">
                                <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                                <button onClick={handleLogoutClick} className="btn btn-primary">Logout</button>
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

// pasidaryt kad per laika perjungtu i kita puslapi. Jus perkels per 5s, 4, 3, 2, 1...