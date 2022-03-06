import {render, screen} from '@testing-library/react'
import NavBar from '../navbar'


beforeEach(()=>{
    render(<NavBar />)
})


describe("Navbar", () =>{

    test("Should render two images in the navbar", ()=>{

        const imageElement = screen.queryAllByTestId("navbar-img")
        expect(imageElement.length).toEqual(2)
    })


    test("should render normal navbar without color", ()=>{

        const navBarElement = screen.getByTestId("nav")
        expect(navBarElement.className).toBe("navbar false")
    })

})
