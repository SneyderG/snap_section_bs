import "../stylesheests/Home.css"

export const Home = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex  flex-column justify-content-center h-100 gap-5">
                            <div>
                                <h1>Make <br /> remote work</h1>
                                <p>Get your team in symc, no matter you location. streamline processes, create team rituals, and watch
                                    productivity soar
                                </p>
                                <a href="http://www.jango.com" className="btn btn-dark"> Learn more</a>
                            </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center ">
                            <img src="./clickup.svg" height="25" alt="" />
                            <img src="./linear.svg" height="25" alt="" />
                            <img src="./stripe.svg" height="25" alt="" />
                            <img src="./wiz.svg"  height="25" alt="" />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="">
                            <img src="./polar.webp" className="img-cropped" alt="" />
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
