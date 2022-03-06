import {screen, render} from '@testing-library/react'
import Banner from '../banner'
import {setupServer} from "msw/node"
import {request, API_KEY} from '../../../types';
import {rest} from "msw";

const apis = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`

const  apiResponse  = rest.get(apis, (req, res, ctx)=>{

    return res(ctx.json(
        {
            name: "Cobra Kai",
            original_name: "Cobra Kai",
            id: 77169
        }
    ))
})

const handlers = [apiResponse]

const server =  setupServer(...handlers);

beforeAll(()=>server.listen())

afterEach(()=> server.resetHandlers())

afterAll(()=>server.close())

describe("", ()=>{

    test("should render correct Movie name", async () => {
        render(<Banner />)
        
        const movieTitle =  await screen.findByText(/Cobra Kai/i)
        expect(movieTitle).toBeVisible();
    })

})