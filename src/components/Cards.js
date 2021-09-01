import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Launch. Entice. Educate. Sell!</h1>
      <h3>
        Inventor of video brochure has led a paradigm shift in direct marketing
        by blending the attention-grabbing power of printed brochures with the
        audiovisual impact of HD video into the Video Brochure. That’s also why
        90% of our global clients become repeated customers.
      </h3>

      <h2>Expertise</h2>
      <h3>
        With TV in a Card’s targeted video brochures, those important messages
        are delivered to customers to stimulate the decision-making process
        immediately. Our team of experts help a business look at its very best –
        to make that first impression last. This is why our client list already
        includes many of the leading international brands representing the most
        successful companies in the world.
      </h3>
      <h2>Quality:</h2>
      <h3>
        Whether it’s in the form of a video brochure, video business card, video
        book, video portfolio or video point of sale display, the quality and
        reliability of TV in a Card is evident. We use only new high definition
        full-viewing-angle screens and Grade A electronics and materials; our
        printing is top notch offset; and our products are hand assembled and
        inspected two separate times – at our factory and at our local USA
        offices – for quality assurance.
      </h3>
      <h2>Service</h2>
      <h3>
        We firmly believe you won’t find a better-quality product or better
        customer service at a comparable price anywhere.From conception to
        completion, we work together with you to guarantee your satisfaction. TV
        in a Card will boost your SALES AND ATTENTION.
      </h3>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="
              People are bombarded with advertising. Most companies are doing the same thing running interrupted video ads in front of the content they want.
              86% of consumers suffer from banner blindness and 40% of people can’t tell you why they clicked on an ad.
              This is a waste of your time, money & efforts.
              Isn’t it time you change your strategy?
              52% of marketers across the globe report that video is their highest ROI marketing tool.
              With 80-90% of direct mail reportedly getting opened daily, it’s easy to see why video-in-print is proven to deliver marketing success."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="TrTvinaCard is all about effective communication.
              Our uniquely portable video tools make sure that your message is seen, heard and spread by your target audience.
              We help support and guide the world’s leading brands because they trust us. And we invented it."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            {/* <CardItem
              src="images/img-3.jpg"
              text="TEXT1"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="TEXT2"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="TEXT3"
              label="Adrenaline"
              path="/sign-up"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
