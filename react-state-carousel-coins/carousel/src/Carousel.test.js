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

    //only one alttext should show
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument() 

    //click left arrrow should not be since FAIL - left arrow is moving wring direction
    const lftBtn = getByTestId('left-arrow')
    fireEvent.click(lftBtn)
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument()

})

it('right arrow tests', ()=> {
    const {queryByAltText, getByTestId} = render(<Carousel />)

    //only one alttest should show
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument() 

    //click right arrrow should be good
    const rtBtn = getByTestId('right-arrow')
    fireEvent.click(rtBtn)
    expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument()
    expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument()
})


//used to fail on final click :: commente ot now since fixed below
it('fails out of index left', ()=> {
    const {queryByAltText, getByTestId} = render(<Carousel />)

    //click left arrrow 3x for fail - out of bounds
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    const lftBtn = getByTestId('left-arrow')
    try {
        fireEvent.click(lftBtn)
        fireEvent.click(lftBtn)
        // fireEvent.click(lftBtn).toThrowError()
    } catch (error) {
    }
})

it('infinite carousel works left and right', ()=> {
    const {queryByAltText, getByTestId} = render(<Carousel />)

    //click left arrrow 3x for fail - out of bounds
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    const lftBtn = getByTestId('left-arrow')
    fireEvent.click(lftBtn)
    fireEvent.click(lftBtn)
    fireEvent.click(lftBtn)
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()

    //click right arrrow 3x for fail - out of bounds
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()
    const rtBtn = getByTestId('right-arrow')
    fireEvent.click(rtBtn)
    fireEvent.click(rtBtn)
    fireEvent.click(rtBtn)
    expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument()

    
})

