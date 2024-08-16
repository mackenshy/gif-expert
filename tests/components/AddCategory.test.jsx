import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory', () => {
    const inputValue = 'Saitama'

    test('should change the input value', () => {
        const onNewCategoryFn = jest.fn()
        render(<AddCategory onNewCategory={onNewCategoryFn} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: inputValue }})
        expect(input.value).toBe(inputValue)
    })

    test('should call onNewCategory if the input has an value', () => {
        const onNewCategoryFn = jest.fn()
        render(<AddCategory onNewCategory={onNewCategoryFn} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue }})
        fireEvent.submit(form)
        expect(input.value).toBe("")
        expect(onNewCategoryFn).toHaveBeenCalled();
        expect(onNewCategoryFn).toHaveBeenCalledTimes(1);
        expect(onNewCategoryFn).toHaveBeenCalledWith(inputValue)
    })
  
    test('should no call onNewCategory if the input is empty', () => {
        const onNewCategoryFn = jest.fn()
        render(<AddCategory onNewCategory={onNewCategoryFn} />)
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategoryFn).not.toHaveBeenCalled()
    })
    
})
