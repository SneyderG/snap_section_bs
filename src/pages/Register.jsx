export const Register = () => {
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-6 bg-primary mt-5 text-white-text-center shadow-lg p-3 rounded">
            <div className="text-center mt-5"><img src="./public/escandalo.png" height="400" width="400" alt="" /></div>
            <div className="justify-content-center mt-5 d-flex gap-4">
              <img src="./public/whatsapp.png" height="40" alt="" />
              <img src="./public/tik-tok.png" height="40" alt="" />
              <img src="./public/instagram.png" height="40" alt="" />
            </div>
          </div>
          <div className="col-6 bg-tertiary mt-5 text-white-text-center gap-4 shadow-lg p-3 rounded">
            <div class="mb-3">
              <h3 className="text-center">Bienvenidos 🧸</h3>
              <label for="exampleFormControlInput1" class="form-label">Gmail ❓</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Contraseña ❤️</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-center">
              <button type="button" class="btn btn-secondary">Iniciar 😊</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}