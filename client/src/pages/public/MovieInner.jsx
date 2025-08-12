import imgUrl from '../../assets/moviesIMG/matrix.jpg'

export function MovieInnerPage() {
    return (
        <main className='min-page-height'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">Sci-Fi</strong>
                        <h1 className="display-2">Matrix</h1>
                        <p className="card-text mb-5">When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.</p>
                        <div className="mb-1 text-body-secondary">Released: 1999-03-31</div>
                        <div className="mb-1 text-body-secondary">Duration: 2 hours 26 minutes</div>
                        <div className="mb-1 text-body-secondary">Rating: 5.0 ⭐</div>
                    </div>
                    <img src={imgUrl} alt="Movie thumbnail" className="col-12 col-lg-4 object-fit-contain" />
                </div>
            </div>
        </main>
    );
}