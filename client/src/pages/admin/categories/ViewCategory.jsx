import { AdminPageTitle } from "../../../components/AdminPageTitle";

export function AdminViewCategoryPage() {
    return (
        <main>
            <AdminPageTitle title="View category" />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 mt-5">
                        <h1 className="display-5">"Action" category details</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-6">
                        <table className="table table-bordered border-primary">
                            <tbody>
                                <tr className="mb-3">
                                    <td>Title</td>
                                    <td>Action</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Url slug</td>
                                    <td>action</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Description</td>
                                    <td>Action</td>
                                </tr>
                                <tr className="mb-3">
                                    <td>Status</td>
                                    <td>draft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}