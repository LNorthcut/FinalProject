import React, { Component } from "react";
import MentorCard from "../components/MentorCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";

import mentors from "./mentors.json";
// import "./MentorCard.css";

class Mentor extends Component {
  state = {
    mentors
  };

  // Map over this.state.mentors and render a MentorCard component for each mentor object

  render() {
    console.log("Props: ", this.props);
    return (
      <Wrapper>
        <Title>Our Mentors </Title>

        {this.state.mentors.map(mentor => (
          <MentorCard
            // removeMentor={this.removeMentor}
            id={mentor.id}
            key={mentor.id}
            image={mentor.image}
            name={mentor.name}
            department={mentor.department}
            location={mentor.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Mentor;
