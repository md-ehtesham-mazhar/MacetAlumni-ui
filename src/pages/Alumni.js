import React from "react";

// ProfileCard Component
const ProfileCard = ({ name, title, image, bio }) => {
  return (
    <div className="alumni-card">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="alumni-card-image"
      />
      <h2 className="alumni-card-name">{name}</h2>
      <p className="alumni-card-title">{title}</p>
      <p className="alumni-card-bio">{bio}</p>
    </div>
  );
};

const Alumni = () => {
  const alumniProfiles = [
    {
      name: "Ehtesham Watson",
      title: "(working at home)",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2015 with a focus on web technologies.",
    },
    {
      name: "Michael Arzaaa",
      title: "working",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2018, specializing in data analytics.",
    },
    {
      name: "Sophia Shehzeb",
      title: "Professional ",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2020, with a passion for user experience design.",
    },
    {
      name: "Mohammad Sahil",
      title: "Product Manager",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2016, excelling in project management.",
    },
    {
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },
    {
      name: "Jane Smith",
      title: "Blockchain Developer at Ripple",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2019, with expertise in blockchain technology.",
    },
    {
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },
    {
      name: "John Dog",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },
    {
      name: "John Dov",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },{
      name: "John Doe",
      title: "AI Researcher at OpenAI",
      image: "https://via.placeholder.com/100",
      bio: "Graduated in 2017, specializing in artificial intelligence.",
    },
  ];

  return (
    <div className="alumni-page">
      <h1>Our Distinguished Alumni</h1>
      <div className="alumni-container">
        {alumniProfiles.map((alumni, index) => (
          <ProfileCard
            key={index}
            name={alumni.name}
            title={alumni.title}
            image={alumni.image}
            bio={alumni.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default Alumni;
