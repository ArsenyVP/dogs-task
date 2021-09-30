import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Main from '../components/Main/Main';
import SelectBox from '../components/Select/SelectBox';

describe("Main Component", () => {
    it("App contains Main Component", () => {
        const AppComponent = shallow(<App />);

        expect(AppComponent.contains(<Main />)).toBeTruthy();
    })

    it("SelectBox has props's value", () => {
        const SelectComponent = shallow(<SelectBox
            value="breed"
            handleChange={(e) => e.preventDefault()}
            arrayValues={["array"]}
            requiredValidation={false}
        />
        )

        expect(SelectComponent.props()).toBeTruthy()
    })
})