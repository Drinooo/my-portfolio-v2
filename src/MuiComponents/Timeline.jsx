import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { WorkTypo } from "./Typography";

export const CustTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        dateClassName="vertical-timeline-element-date"
        contentStyle={{
          color: "#fff",
          background:
            "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          border: "1px solid #FFF",
          backdropFilter: "blur(20px)",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #FFF" }}
        date="November 2022 - Present"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <WorkTypo
          variant={"subtitle1"}
          className="vertical-timeline-element-title"
        >
          Web Designer
        </WorkTypo>
        <WorkTypo
          variant={"subtitle2"}
          className="vertical-timeline-element-subtitle"
        >
          New Media Services Philippines
        </WorkTypo>
        <WorkTypo variant={"body2"}>
          Web Designer, UI/UX Designer, Front End Developer
        </WorkTypo>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          color: "#fff",
          background:
            "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          border: "1px solid #FFF",
          backdropFilter: "blur(20px)",
        }}
        cont
        date="July 2021 - October 2021"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <WorkTypo
          variant={"subtitle1"}
          className="vertical-timeline-element-title"
        >
          OJT/Internship (486 hours)
        </WorkTypo>
        <WorkTypo
          variant={"subtitle2"}
          className="vertical-timeline-element-subtitle"
        >
          Ollopa Corporation
        </WorkTypo>
        <WorkTypo variant={"body2"}>Data Entry, Quality Assurance</WorkTypo>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        contentStyle={{
          color: "#fff",
          background:
            "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          border: "1px solid #FFF",
          backdropFilter: "blur(20px)",
        }}
        cont
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <WorkTypo
          variant={"subtitle1"}
          className="vertical-timeline-element-title"
        >
          Freelance Graphic Designer
        </WorkTypo>
        <WorkTypo
          variant={"subtitle2"}
          className="vertical-timeline-element-subtitle"
        >
          Homebased
        </WorkTypo>
        <WorkTypo variant={"body2"}>Graphic Designer</WorkTypo>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{
          color: "#fff",
          background:
            "linear-gradient(96.26deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          border: '1px solid #FFF',
          backdropFilter: 'blur(20px)'
        }}
        cont
        date="June 2018 - June 2022"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <WorkTypo
          variant={"subtitle1"}
          className="vertical-timeline-element-title"
        >
          Bachelor of Science In Information Technology
        </WorkTypo>
        <WorkTypo
          variant={"subtitle2"}
          className="vertical-timeline-element-subtitle"
        >
          Lyceum of Subic Bay
        </WorkTypo>
        <WorkTypo variant={"body2"}>
          Web Development, System Development, UI/UX Design, Grpahic Design
        </WorkTypo>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
