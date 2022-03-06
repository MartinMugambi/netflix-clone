import {render, screen} from "@testing-library/react"


describe("", ()=>{
  
    test("should render heading", async ()=>{

        const HeadingElement =  await screen.findAllByTestId("heading")

        expect(HeadingElement).toBeVisible();
    })

})