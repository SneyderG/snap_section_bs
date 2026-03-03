export const Single = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 bg-secondary  mt-5 shadow-lg p-3 bg-body-tertiary rounded">
                        <h3 className="mt-3">join our community</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>Lorem ipsum dolor sit amet consectetur <br />dipisicing elit. Esse sed eligendi,</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6 bg-primary text-white shadow-lg p-3 rounded">
                    <h3 className="mt-3">Montly suspcrition</h3>
                    <h1>$29</h1><p>por month</p>
                    <p>Full acces for lees than $1 a day</p>
                    <button type="button" className="btn btn-succes">sing up</button>
                </div>
            </div>
            <div className="col-6 bg-primary-subtle shadow-lg p-3 rounded">
                <h3 className="mt-3">why us</h3>
                <p>Tutorials by industry expert <br/>peer & expert code review <br/>coding excersis <br />
                acces to our github repos <br/>community forum <br/> flash card decks <br/>new videos every week</p>
            </div>
        </>
    )
}