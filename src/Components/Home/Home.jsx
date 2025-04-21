import './Home.css';

function Home() {
  return (
    <div className="Container">
      <header className="HeaderCont">
        <h1>COMPANY NAME HERE</h1>
        <div className="TextCOn">
          <p>PRODUCTS</p>
          <p className="TextCOn1">SERVICES</p>
        </div>
      </header>

      <section className="img1">
        <img src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-hay-bale-sitting-in-the-middle-of-the-desert-image_2674045.jpg" alt="Campo" />
      </section>

      <section className="grid-section">
        <div className="grid-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlkbUOa2QZBTKGz7NEehbJsjf1EppMDT5qw&s" alt="Cultivo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, vitae at qui harum aliquam optio exercitationem rem quam ut perferendis ea dolore sit quisquam? Fuga quaerat assumenda doloribus atque rem!
          </p>
        </div>
        <div className="grid-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffi5sx5oOzmTfB8U8Zgc4Z1AnzezBdsEg8A&s" alt="Leer" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum iure corporis sed tempora adipisci, explicabo ratione? Dolores maiores omnis ut at fuga sed commodi nostrum, suscipit vitae cum quo.
          </p>
        </div>
        <div className="grid-item">
          <img src="https://media.istockphoto.com/id/1011793090/es/foto/joven-profesional-femenino-en-escritorio-sonriendo-a-c%C3%A1mara.jpg?s=612x612&w=0&k=20&c=_jVq8twBx-Cl_tdzUc2yLPy7HC3BKSeT8XUnlRB9Dv4=" alt="Oficina" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis cum incidunt molestias dolore dicta tempore! Nobis aperiam eius optio autem hic cupiditate architecto est, fugiat molestiae vero doloribus ipsa.
          </p>
        </div>
        <div className="grid-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE9JUasYplG9WZlHQbrKcnWtU3IlGaen_wQ&s" alt="Trigo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur autem nihil porro esse, veritatis iure facilis fugiat tempore quod. Debitis incidunt harum magnam reiciendis temporibus? Adipisci voluptatum doloribus quam fuga!
          </p>
        </div>
      </section>

      <section className="SeccionProduct">
        <h2>PRODUCTOS</h2>
        <div className="grid-Productos">
          <div className="productos-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQFyiMKt9ljcgKJ7J7qgHYoKTUWAF_suLZQ&s" alt="Ciudad nocturna" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat officia commodi, cum odio libero perferendis nesciunt rem laboriosam ea ullam iste ab animi repudiandae qui magni deserunt, non hic.
            </p>
          </div>
          <div className="productos-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxfrNFviLUxV_P8vO0ZWHWi4IWEoKV_5TVQ&s" alt="Molino de viento" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptas, quia, doloremque. Quam, quos, fugiat, doloribus. Voluptatem, consequuntur, labore, velit. Quisquam, voluptatibus, repellat, quidem.
            </p>
          </div>
          <div className="productos-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVPgwoUVmY4jYuvqhP5bGj08PwdBQd9FF6g&s" alt="Cebolla" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat officia commodi, cum odio libero perferendis nesciunt rem laboriosam ea ullam iste ab animi repudiandae qui magni deserunt, non hic.
            </p>
          </div>
        </div>
      </section>

      <section className="Footer">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dicta ab modi, architecto mollitia, rerum labore a sequi ut aut facere commodi et nemo quisquam placeat autem totam! Maiores, tempore.
        </p>
        <div className="Txt">
          <h6>CONTACTO</h6>
          <p>10177</p>
          <p>297382</p>
          <p>Email</p>
        </div>
      </section>
    </div>
  );
}

export default Home;