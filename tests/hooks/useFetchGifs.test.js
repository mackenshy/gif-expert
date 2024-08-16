import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs', () => {
    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Dragons'))
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('should return an image array and isLoading with false', async () => {    
        const { result } = renderHook(() => useFetchGifs('Dragons'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})
