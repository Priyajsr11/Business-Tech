import React from "react";
import { useState } from "react";

const Contact = () => {

    const [data, Setdata] = useState({
        fullname: "",
        number: "",
        email: "",
        msg: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        Setdata((preval) => {
            return {
                ...preval,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is ${data.fullname}.Your mobile no is ${data.number}.Your email id is ${data.email}.Your Message is ${data.msg} `);

    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="Row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label">Enter Your Full Name </label>
                                <input type="text"
                                    class="form-control" id="exampleFormControlInput1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1"
                                    class="form-label">Email Id</label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com" />



                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1"
                                    class="form-label"> Contact No </label>
                                <input type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="number"
                                    value={data.number}
                                    onChange={inputEvent}
                                    placeholder="Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1"
                                    class="form-label"> Message </label>
                                <textarea class="form-control" value={data.msg} name="msg" onChange={inputEvent} id="exampleFormControlTextarea1"
                                    rows="3">

                                </textarea>

                            </div>



                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-primary ">Submit Form </button>
                            </div>

                        </form>







                    </div>
                </div>

            </div>
        </>

    );
}

export default Contact;