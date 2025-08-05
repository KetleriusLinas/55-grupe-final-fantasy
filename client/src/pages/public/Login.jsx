import { PublicPageTitle } from "../../components/PublicPageTitle";

export function LoginPage() {
    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Login' />

            <div className="container">
                <div className="row">
                    <form className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                        <div className="mb-4">
                            <label htmlFor="username_or_email">Username or Email</label>
                            <input value="milijonas@jonas12" id="username_or_email" type="text" className="form-control" required="" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password">Password</label>
                            <input value="milijonas@jonas12" id="password" type="password" className="form-control" required="" />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="btn btn-primary w-100 py-2 fs-5">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}