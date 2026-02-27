import "../stylesheests/Careers.css"


export const Careers = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="text-center mt-5">
                                <h1 className="">Healthy meals, zero fuss</h1>
                                <p className="">We're always looking for talented people to join our team. <br />If you're passionate about remote work and want to help us build the future of work, we'd love to hear from you.</p>
                                <div className="col">  
                                    <button type="button" className="btn btn-success">Success</button>
                                </div>
                            </div>
                            <div className= "d-flex  flex-column justify-content-center mt-5 ">
                                <img src="./public/rostros.jpg" height="600" className="rounded-4" class="border border-5 rounded-5" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}