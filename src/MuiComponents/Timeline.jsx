import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

export const CustTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        dateClassName="vertical-timeline-element-date"
        contentStyle={{ background: "#D6412B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #D6412B" }}
        date="November 2022 - Present"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          New Media Services Philippines
        </h4>
        <p>Web Designer, UI/UX Designer, Front End Developer</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2021 - October 2021"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          OJT/Internship (486 hours)
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Ollopa Corporation
        </h4>
        <p>Data Entry, Quality Assurance</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Freelance Graphic Designer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Homebased</h4>
        <p>Graphic Designer</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2018 - June 2022"
        iconStyle={{ background: "#18242F", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science In Information Technology
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Lyceum of Subic Bay
        </h4>
        <p>Web Development, System Development, UI/UX Design, Grpahic Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
