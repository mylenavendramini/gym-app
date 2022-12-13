import { ContactContainer } from "./contact.styles";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props: { exercises: [] }) => {
  const exercises = props.exercises?.map(
    ({ name, repetitions, weight, interval, id }, index) => {
      const str = ` Exercise ${index + 1}: ${name} |
       Repetitions: ${repetitions} |
        Weight: ${weight} |
         Interval: ${interval}`;
      return str;
    }
  );

  const form = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kmnlmaj",
        "template_12vbbzc",
        e.currentTarget,
        "ISgfsEquz6Nehcz3J"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <ContactContainer>
        <h1>Contact</h1>
        <div>
          <form onSubmit={handleSubmit} ref={form}>
            <label>Name:</label>
            <input
              name="to_name"
              type="text"
              id="from_name"
              placeholder="Your name"
              //   value={toSend.to_name}
              //     onChange={handleChange}
            />
            <label>Email:</label>
            <input
              name="to_email"
              type="text"
              id="to_email"
              placeholder="Your email"
              // value={toSend.reply_to}
              // onChange={handleChange}
            />
            <input
              className="not-active"
              name="message"
              type="text"
              id="exercises"
              value={exercises}
              readOnly
              // value={toSend.message}
              // onChange={handleChange}
            />
            <button type="submit">Send it to me</button>
          </form>
        </div>
      </ContactContainer>
    </div>
  );
};

export default Contact;
