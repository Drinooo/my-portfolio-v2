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
        contentStyle={{ background: "#D6412B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #D6412B" }}
        date="November 2022 - Present"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <WorkTypo variant={'subtitle1'} className="vertical-timeline-element-title">Web Designer</WorkTypo>
        <WorkTypo variant={'subtitle2'} className="vertical-timeline-element-subtitle">
          New Media Services Philippines
        </WorkTypo>
        <WorkTypo variant={'body2'}>Web Designer, UI/UX Designer, Front End Developer</WorkTypo>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2021 - October 2021"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <WorkTypo variant={'subtitle1'} color={'black'} className="vertical-timeline-element-title">
          OJT/Internship (486 hours)
        </WorkTypo>
        <WorkTypo variant={'subtitle2'} color={'black'} className="vertical-timeline-element-subtitle">
          Ollopa Corporation
        </WorkTypo>
        <WorkTypo variant={'body2'} color={'black'}>Data Entry, Quality Assurance</WorkTypo>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        iconStyle={{ background: "#D6412B", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <WorkTypo variant={'subtitle1'} color={'black'} className="vertical-timeline-element-title">
          Freelance Graphic Designer
        </WorkTypo >
        <WorkTypo variant={'subtitle2'} color={'black'} className="vertical-timeline-element-subtitle">Homebased</WorkTypo>
        <WorkTypo variant={'body2'} color={'black'}>Graphic Designer</WorkTypo>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2018 - June 2022"
        iconStyle={{ background: "#18242F", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <WorkTypo variant={'subtitle1'} color={'black'} className="vertical-timeline-element-title">
          Bachelor of Science In Information Technology
        </WorkTypo >
        <WorkTypo variant={'subtitle2'} color={'black'} className="vertical-timeline-element-subtitle">
          Lyceum of Subic Bay
        </WorkTypo>
        <WorkTypo variant={'body2'} color={'black'}>Web Development, System Development, UI/UX Design, Grpahic Design</WorkTypo>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
