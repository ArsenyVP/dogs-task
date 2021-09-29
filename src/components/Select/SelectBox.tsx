import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

interface SelectBoxProps {
    value: string | unknown,
    handleChange: (e: React.ChangeEvent<{ name?: string; value: unknown }>) => void,
    arrayValues: any[] | undefined,
    requiredValidation: boolean
}

const SelectBox: React.FC<SelectBoxProps> = ({ value, handleChange, arrayValues, requiredValidation }: SelectBoxProps) => {
    return (
        <FormControl required={requiredValidation}>
            <NativeSelect
                value={value}
                onChange={handleChange}
                name="breed"
            >
                <option aria-label="None" value="" />
                {
                    arrayValues && arrayValues.map((br: string | number, index: number) => {
                        return <option key={index}>{br}</option>
                    })
                }
            </NativeSelect>
        </FormControl>
    )
}

export default SelectBox
