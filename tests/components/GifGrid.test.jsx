import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('GifGrid', () => {
    const category = 'Dragon Ball'

    test('should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText("Loading...")).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()
    })

    test('should show items', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://asdasdasd.gif'
            },
            {
                id: 'XDC',
                title: 'Goku',
                url: 'https://oioiwq.gif'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})
