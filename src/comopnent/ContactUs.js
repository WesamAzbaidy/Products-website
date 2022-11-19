import "./product.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendSuccesful = () => {
    Swal.fire({
      title: "Send Succesful",
    });
  };
  return (
    <div className="contactUs">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form onSubmit={handleSubmit(sendSuccesful)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name">Your name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control mb-2"
                      {...register("name", { required: true })}
                    />
                    <p className="color-red">
                      {errors.name?.type === "required" && "Name is required!"}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email">Your email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                    />
                    <p className="color-red">
                      {errors.email?.type === "required" &&
                        "Email is required!"}
                      {errors.email?.type === "pattern" &&
                        "Email is not valid"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control mb-2"
                      {...register("subject", { required: true })}
                    />
                    <p className="color-red">
                      {errors.subject?.type === "required" &&
                        "Subject is required!"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Your message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left m-5">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>

            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Jordan,Amman</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>079746629</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>w.azbaidy1999@gmailcom</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
