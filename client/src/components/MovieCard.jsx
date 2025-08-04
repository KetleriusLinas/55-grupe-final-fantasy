import imgUrl from '../assets/moviesIMG/matrix.jpg'
import { Link } from "react-router";

export function MovieCard({ movie }) {
    return (
        <div className="col-12 col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-12 col-lg-8 p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">Sci-Fi</strong>
                    <h3 className="mb-0">Matrix</h3>
                    <p className="card-text mb-auto">When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.</p>
                    <div className="mb-1 text-body-secondary">Released: 1999-03-31</div>
                    <div className="mb-1 text-body-secondary">Duration: 2 hours 26 minutes</div>
                    <div className="mb-1 text-body-secondary">Rating: 5.0 ⭐</div>
                    <Link to="/movies/Matrix" className="icon-link gap-1 icon-link-hover">
                        Continue reading
                    </Link>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <img className="w-100 h-100 object-fit-cover p-1" src={imgUrl} alt="Matrix" />
                </div>
            </div>
        </div>
    );
}