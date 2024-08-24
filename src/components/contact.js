const Contact = () => {
  return (
    <section
      id="contact"
      className="p-5 pb-48 flex flex-col justify-center items-center md:h-full gap-y-7 bg-bgimage"
    >
      <p className="font-poppins text-lg"> Contact Us</p>
      <h1 className="font-bebas text-4xl">get in touch!</h1>
      {/* <form
        className=" flex  gap-y-5 flex-col w-5/6"
        action="https://fromsubmit.co/ctbfindia@gmail.com"
        method="POST"
        target="_blank"
      >
        <div className="flex flex-col md:flex-row justify-between  ">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
            className="p-2 border-primary border rounded-lg md:w-[49%]  h-10"
          />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            className="p-2 border-primary border rounded-lg md:w-[49%] h-10"
          />
        </div>
        <div>
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            className="p-2 border-primary border rounded-lg w-full h-10 "
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="message"
            placeholder="Message..."
            className="p-2 border-primary border rounded-lg w-full h-24"
          ></input>
        </div>
        <div className="mx-auto">
          <button
            type="submit"
            className="bg-primary text-white text-md rounded-lg px-6 py-2"
          >Massage</button>
        </div>
      </form> */}

      <form
        target="_blank"
        action="https://formsubmit.co/ctbfindia@gmail.com"
        method="POST"
        className=" flex  gap-y-5 flex-col w-5/6"
      >
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          <input
            type="text"
            name="name"
            className="p-2 border-primary border rounded-lg w-full  h-10"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            className="p-2 border-primary border rounded-lg w-full h-10"
            placeholder="Email Address"
            required
          />
        </div>
        <input
          type="text"
          name="_subject"
          placeholder="Subject"
          className="p-2 border-primary border rounded-lg w-full h-10 "
        />
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="p-2 border-primary border rounded-lg w-full h-24"
            name="message"
            rows={10}
            required
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white text-md rounded-lg px-6 py-2"
        >
          Submit Form
        </button>
      </form>
    </section>
  );
};
export default Contact;
// how to make form
