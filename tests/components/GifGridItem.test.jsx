import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe('GifGriditem', () => {
    const title = 'Saitama'
    const url = 'https://one-punch.com/saitam.gif'

    test('should match with snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('should show image with correct props', () => {
        render(<GifGridItem title={title} url={url} />)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should show title', () => {
        render(<GifGridItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})
