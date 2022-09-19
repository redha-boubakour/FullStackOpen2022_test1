import React from "react";
import Content from "./Content";
import Header from "./Header";

const Course = (props) => {
    const total = props.course.parts.reduce(
        (acc, part) => acc + part.exercises,
        0
    );
    return (
        <>
            <Header header={props.course.name} />
            <Content parts={props.course.parts} />
            <p>Total of {total} exercices</p>
        </>
    );
};

export default Course;
