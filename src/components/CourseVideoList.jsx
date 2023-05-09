import React from "react";
import Accordion from "./subComponents/Accordion";

function CourseVideoList({setVideoTitle}) {

  const Chapters = [
    {
      key: 0,
      title: "Milestone 0: Welcome To Web Course",
      time: "2h 20m - 14/14",
      videoList: [
        {
          id: 100,
          title: "Welcome to Complete Web Development Course"
        },
        {
          id: 10320,
          title: "Welco4242lete Web Development Course"
        },
        {
          id: 10230,
          title: "We32Complete Web Development Course"
        }
      ]
    },
    {
      key: 1,
      title: "MileStone 1: Personal Portfolio",
      time: "2h 20m - 14/14",
      videoList: [
        {
          id: 200,
          title: "Welcome to Complete Web Development Course"
        }
      ]
    },
    {
      key: 2,
      title: "Milstone 2: Introduction to React",
      time: "2h 20m - 14/14",
      videoList: [
        {
          id: 300,
          title: "Welcome to Complete Web Development Course"
        }
      ]
    },
    {
      key: 3,
      title: "Milestone 3: State management in React",
      time: "2h 20m - 14/14",
      videoList: [
        {
          id: 400,
          title: "Welcome to Complete Web Development Course"
        }
      ]
    },
    {
      key: 4,
      title: "Milestone 4: React and Redux",
      time: "2h 20m - 14/14",
      videoList: [
        {
          id: 500,
          title: "Welcome to Complete Web Development Course"
        }
      ]
    },
  ];



  return (
    <div className="accordion" id="accordionExample" style={{overflowY: "scroll", height: 450}}>
      {Chapters.map((chapter) => {
        return <Accordion chapter = {chapter} key={chapter.key} setVideoTitle={setVideoTitle} />;
      })}
    </div>
  );
}

export default CourseVideoList;
