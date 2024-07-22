//one file per component tested!
import React from 'react'
import { describe, it, expect} from 'vitest';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from "../App"

import Form from '../Components/Form';
import {StudentContextProvider} from '../context/studentContext';
import nock from "nock"
 

//   describe('App', () => {
//     it('renders App component', () => {
//       render(
//         <StudentContextProvider>
//           <App />
//         </StudentContextProvider>
//       );
//           expect(screen.getByText('Student Dashboard'))
//           expect(screen.getByText("Math"));
//           expect(screen.getByText("Enrolled students"));
//             //   expect(screen.findByText("Valerie Smith"))
//             //  screen.debug()
          
//     });
//   });

describe("Form", () => {

let testID = "123"
let testName = "Claire Smith"
let testDOB = "02-07-2020"
let testEnrollement = "07/04/2023"
let testMajor = "being awesome"
let testGraduated = "false"


    beforeEach(() => {

        nock("http://localhost:8000")
        .get("/students")
        .reply(
            200,
            [ ],
            { "Access-Control-Allow-Origin": "*" }
        );

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

        nock('http://localhost:8000')
          .post('/students', {
            name: testName, dateOfBirth: testDOB, major: testMajor, graduated: testGraduated, courses: [] 
          })
          .reply(
                201, { _id: testID, name: testName, dateOfBirth: testDOB, major: testMajor, graduated: testGraduated, courses : [], __v : 0 });
      });
    
      afterEach(() => {
        nock.cleanAll();
      });


    it("simulates a new student entry", async () => {
        render(
            <StudentContextProvider>
                <Form/>
            </StudentContextProvider>
        )

        //student entering information

        fireEvent.change(screen.getByLabelText("Name:"), {
            target: {value : testName}
        })
        fireEvent.change(screen.getByLabelText("Date of Birth:"), {
            target: {value : testDOB}
        })
        fireEvent.change(screen.getByLabelText("Enrollement Date:"), {
            target: {value : testEnrollement}
        })
        fireEvent.change(screen.getByLabelText("Major:"), {
            target: {value : testMajor}
        })
        fireEvent.change(screen.getByLabelText("Graduated:"), {
            target: {value : testGraduated}
        })

        //simulate form submit

        fireEvent.click(screen.getByRole("button"))

        await waitFor(() => {
            setTimeout(() => {
            // screen.debug()
            expect(screen.getByLabelText("Name:")).toHaveValue('')
            expect(screen.getByLabelText("Date of Birth:")).toHaveValue('')
            expect(screen.getByLabelText("Year:")).toHaveValue(0)
            expect(screen.getByLabelText("Major:")).toHaveValue('')
            expect(screen.getByLabelText("Graduated:")).toHaveValue(false)
        }, 500);
        // screen.debug()
        })
    })
})

//LOOK INTO
//user event vs fire event
//create a user and do the events for that particular user
//