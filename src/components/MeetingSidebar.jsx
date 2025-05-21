import React, { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  margin-top: 15px;
  padding: 15px;
`;

const Section = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  &:first-child {
    border-top: none;
  }
`;

const SectionHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const Indicator = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.color || "#ccc"};
  border-radius: 50%;
  margin-right: 8px;
`;

const P = styled.p`
  font-size: 17px;
  width: 100%;
`;

const Div = styled.div`
  width: 28.08px;
  height: 28px;
  border-radius: 50%;
  align-items: center;
  display: flex;
  text-align: center;
  background-color: #a7a7a7;
  margin-right: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  width: 31.09px;
  height: 18px;
`;

const MeetingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  height: 60px;
`;

const MeetingText = styled.div`
  font-size: 20px;
  color: #434343;
`;

const MeetingDate = styled.div`
  font-size: 20px;
  color: #434343;
`;

const Space = styled.div`
  background-color: #a7a7a7;
  width: 60px;
  height: 60px;
  border-radius: 14px;
  margin-right: 10px;
`;

const Dot = styled.div`
  width: 7px;
  height: 29px;
  display: grid;
  margin-right: 15px;
`

const SmallDot = styled.div`
  width: 7px;
  height: 7px;
  background-color: #d9d9d9;
  border-radius: 50%;
`

const meetingData = [
  {
    name: "ЗОВЫ",
    num: "4",
    color: "#00cf00",
    size: "27",
    content: [
      { title: "Название встречи полностью", date: "13.04" },
      { title: "Название встречи полностью", date: "14.04" },
      { title: "Название встречи полностью", date: "13.04" },
      { title: "Название встречи полностью", date: "14.04" },
    ],
  },
  {
    name: "ИДУ",
    num: "3",
    color: "#ffa100",
    size: "27",
    content: [
      { title: "Название встречи полностью", date: "13.04" },
      { title: "Название встречи полностью", date: "14.04" },
      { title: "Название встречи полностью", date: "16.04" },
    ],
  },
  {
    name: "ИСТОРИЯ  ВСТРЕЧ",
    num: "15",
    color: "#a7a7a7",
    size: "0",
    content: [],
  },
];

const MeetingSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <Wrapper>
      {meetingData.map((meet, index) => (
        <React.Fragment key={index}>
          <Section>
            <SectionHeader>
              <P>
                <Indicator color={meet.color} />
                {meet.name}
              </P>
              <Div>
                <P>{meet.num}</P>
              </Div>
              <Button onClick={() => toggleSection(index)}>
                <ChevronDown size={meet.size} />
              </Button>
            </SectionHeader>

            {expandedSections[index] &&
              meet.content.map((item, i) => (
                <MeetingItem key={i}>
                  <Space></Space>
                  <MeetingText>{item.title}</MeetingText>
                  <Dot>
                    <SmallDot></SmallDot>
                    <SmallDot></SmallDot>
                    <SmallDot></SmallDot>
                  </Dot>
                  <MeetingDate>{item.date}</MeetingDate>
                </MeetingItem>
              ))}
          </Section>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MeetingSidebar;

{
  /* {meetingData.map((meeting, index) => (
    <MeetingItem key={index}>
      <MeetingInfo>
        <MeetingImage />
        <MeetingText>{meeting.title}</MeetingText>
      </MeetingInfo>
      <MeetingDate>{meeting.date}</MeetingDate>
    </MeetingItem>
  ))} */
}
