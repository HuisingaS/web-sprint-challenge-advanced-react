import React from "react";
import { render, screen, getByText, getByTestId, queryByText, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


test("form header renders", () => {

    const { getByText } = render(<CheckoutForm />)
    const header = getByText(/Checkout Form/i)
    
    expect(header).toBeInTheDocument()
    expect(getByText(/Checkout Form/i))

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const valueFirstName = screen.getByLabelText(/First Name/i)
    const valueLastName = screen.getByLabelText(/Last Name/i)

    fireEvent.change(valueFirstName, {target: {value: "James"}})
    fireEvent.change(valueLastName, {target: {value: "Bond"}})

    const submit = screen.getByRole('button', {name: /Checkout/i})
    
    fireEvent.click(submit)

    const findMyName = screen.getByText(/James Bond/i)
    expect(findMyName).toBeInTheDocument()    
    
});