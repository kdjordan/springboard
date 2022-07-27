import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Carousel from "./Carousel";

//smoke test
it("renders without crashing", function() {
    render(<Carousel />);
});

// snapshot test
it("matches snapshot", function() {
    const {asFragment} = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });

   
it('left arrow tests', ()=> {
    const {queryByAltText, getByTestId} = render(<Carousel />)

    //only one alttest should show
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument() 

    //click left arrrow should not be since FAIL
    const lftBtn = getByTestId('left-arrow')
    fireEvent.click(lftBtn)
    expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument()

})

it('right arrow tests', ()=> {
    const {queryByTestId, queryByAltText, getByTestId} = render(<Carousel />)

    //only one alttest should show
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument() 

    //click left arrrow should not be since FAIL
    const lftBtn = getByTestId('left-arrow')
    fireEvent.click(lftBtn)
    expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument()

})

