export const Login = () => {
    return (
        <>
            <section style={{background: "#82ad65"}}>
                <div className="container mt-5">
                    <div className="row">
                        <div class="mb-3">
                            <h3 className="text-center mt-5"> Crea tu cuenta 🧸</h3>
                            <label for="exampleFormControlInput1" class="form-label">Gmail 😉</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Contraseña ❓</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Retificar contraseña😺</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Apodo😉</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="button" class="btn btn-success">Crear cuenta😊</button>
                        </div>
                        <div className="justify-content-center mt-5 d-flex gap-4">
                            <img src="./public/whatsapp.png" height="40" alt="" />
                            <img src="./public/tik-tok.png" height="40" alt="" />
                            <img src="./public/instagram.png" height="40" alt="" />
                        </div>

                        <div className="col-6">



                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}