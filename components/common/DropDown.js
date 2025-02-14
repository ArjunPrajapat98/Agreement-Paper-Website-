import React from 'react'
import Select from 'react-select';

const DropDown = (props) => {

    const { valueText, labelText, options } = props;

    return (
        <div>
            <Select
                {...props}
                options={
                    (valueText === "value" && labelText === "name")
                        ? options
                        : options?.map((item) => ({
                            value: item[valueText],
                            label: item[labelText]
                        }))
                }
            />
        </div>
    )
}

export default DropDown