import React from "react";
import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  userEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
// import CoursesForm from '../Components/CoursesForm';
import CoursesInput from "../Components/CoursesInput";
import { CoursesContextProvider } from "../context/coursesContext";
import nock from "nock";

// when setting up variables for Nock imagine it's JSON
let testID = "123";
let testName = "CSS for busy moms";
let testCredits = "3";
let testAvailability = "15";
let testSyllabus =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint";

describe("Courses Form", () => {

    beforeAll(() => {

        nock("http://localhost:8000")
        .get("/courses")
        .reply(
            200,
            [
                    {
                        _id: "123",
                        name: "JavaScript for super busy moms",
                        credits: 3,
                        availability: 15,
                        syllabus: "a really large block of text",
                    },
                    {
                        _id: "124",
                        name: "CSS for beginners",
                        credits: 2,
                        availability: 10,
                        syllabus: "CSS basics, styling, layout techniques",
                    },
                ],
            { "Access-Control-Allow-Origin": "*" }
        );
        
        nock("http://localhost:8000")
        .post("/courses", {
            name: testName,
            credits: testCredits,
            availability: testAvailability,
            syllabus: testSyllabus,
        })
        .reply(
            201,
            {
                _id: testID,
                name: testName,
                credits: testCredits,
                availability: testAvailability,
                syllabus: testSyllabus,
                __v : 0
            },
            { "Access-Control-Allow-Origin": "*" }
        );
        
    })

  it("simulates a new course entry", async () => {
    render(
      <CoursesContextProvider>
        <CoursesInput />
      </CoursesContextProvider>
    );

    // simulate get request on initial render
    await waitFor(() => {
      expect(
        screen.getByText("JavaScript for super busy moms")
      ).toBeInTheDocument();
    });

    //simulate course being entered

    fireEvent.change(screen.getByLabelText("Name:"), {
      target: { value: testName },
    });

    fireEvent.change(screen.getByLabelText("Credits:"), {
      target: { value: testCredits },
    });

    fireEvent.change(screen.getByLabelText("Spots Available:"), {
      target: { value: testAvailability },
    });

    fireEvent.change(screen.getByLabelText("Syllabus:"), {
      target: { value: testSyllabus },
    });

    //simulate form submit

    fireEvent.click(screen.getByText("Add Course"));

    //simulate response from BE https://github.com/nock/nock (works with Axios) or https://mswjs.io/docs/ (works with fetch as well)

    await waitFor(() => {
      setTimeout(() => {
        expect(screen.getByLabelText("Name:")).toHaveValue("");
        expect(screen.getByLabelText("Credits:")).toHaveValue(0);
        expect(screen.getByLabelText("Spots Available:")).toHaveValue(0);
        expect(screen.getByLabelText("Syllabus:")).toHaveValue("");
        expect(screen.findByText(testName)).toBeInTheDocument();
        expect(
          screen.findByText("JavaScript for super busy moms")
        ).toBeInTheDocument();
        // screen.debug()
      }, 500);
    });
    // screen.debug();
  });
});
