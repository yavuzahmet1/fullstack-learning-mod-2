import { useState } from "react";

const ContactForm = () => {
  const [person, setPerson] = useState({
    isim: "",
    password: "",
    email: "",
  });

  //?dest
  const { isim, password, email } = person;



  const getDatabase=(e)=>{
e.preventDefault()

alert({isim, email})
  }



  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form onSubmit={getDatabase}>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger">{isim} </span>
          </label>
          <input
            className="form-control"
            id="isim"
            type="text"
            name="isim"
            onInput={(e) =>
              setPerson({ ...person, [e.target.id]: e.target.value })
            }
            value={isim}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onInput={(e) =>
              setPerson({ ...person, [e.target.id]: e.target.value })
            }
            value={password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            EMAIL: <span className="fw-bold">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            id="email"
            name="email"
            onInput={(e) =>
              setPerson({ ...person, [e.target.id]: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
