
import React from 'react'
import { describe, it, expect} from 'vitest';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from "../App"
import Form from '../Components/Form';
import {StudentContextProvider} from '../context/studentContext';

  

  describe('App', () => {
    it('renders App component', () => {
      render(
        <StudentContextProvider>
          <App />
        </StudentContextProvider>
      );
          expect(screen.getByText('Student Dashboard'))
          expect(screen.getByText("Math"));
          expect(screen.getByText("Enrolled students"));
            //   expect(screen.findByText("Valerie Smith"))
            //  screen.debug()
          
    });
  });

describe("Form", () => {
    it("simulates a new student entry", async () => {
        render(
            <StudentContextProvider>
                <Form/>
            </StudentContextProvider>
        )

        console.log("before input - Form data:", screen.getByPlaceholderText("Student's name").value);
        //student entering information

        fireEvent.change(screen.getByLabelText("Name:"), {
            target: {value : "Claire Smith"}
        })
        fireEvent.change(screen.getByLabelText("Date of Birth:"), {
            target: {value : "02-07-2020"}
        })
        fireEvent.change(screen.getByLabelText("Year:"), {
            target: {value : 1}
        })
        fireEvent.change(screen.getByLabelText("Major:"), {
            target: {value : "being Awesome"}
        })
        fireEvent.change(screen.getByLabelText("Graduated:"), {
            target: {value : "false"}
        })

        //simulate form submit

        fireEvent.click(screen.getByRole("button"))

        await waitFor(() => {
            setTimeout(() => {
            screen.debug()
            expect(screen.getByLabelText("Name:")).toHaveValue('')
            expect(screen.getByLabelText("Date of Birth:")).toHaveValue('')
            expect(screen.getByLabelText("Year:")).toHaveValue(0)
            expect(screen.getByLabelText("Major:")).toHaveValue('')
            expect(screen.getByLabelText("Graduated:")).toHaveValue(false)
        }, 500);
        })
    })
})
