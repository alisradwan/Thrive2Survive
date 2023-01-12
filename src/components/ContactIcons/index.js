import React from "react";

function ContactIcons() {
  const contactLinks = [
    {
      name: "email",
      url: "mailto:Thrive2Survive@T2Sdrive.com",
      classes: "far fa-envelope ",
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/Thrive2Survivedrive/",
      classes: "fab fa-facebook",
    },
    {
      name: "phone",
      url: "tel:+360-957-0981",
      classes: "fa fa-phone",
    },
    {
      name: "location",
      url: "map: 4111 E 16th St Vancouver, WA 98661",
      classes: "fa fa-regular fa-location-dot",
    },
  ];

  return (
    <div className="mt-2 mt-lg-0">
      {contactLinks.map((contactLink) => {
        return (
          <a
            href={contactLink.url}
            key={contactLink.name}
            target="_blank"
            rel="noopener noreferrer"
            className="m-3 iconss"
          >
            <span>
              <i className={contactLink.classes}></i>
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default ContactIcons;
