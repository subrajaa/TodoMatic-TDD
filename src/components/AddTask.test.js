import React from "react";
import Enzyme from 'enzyme';
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import AddTask from './AddTask';

Enzyme.configure({ adapter: new Adapter() });

describe("Basic rendering of new note in TodoMatic", () => {

    it("Should be able to add a new note", () => {
        //Should have input text
        const addTask = shallow(<AddTask />);
        const inputText = addTask.find('[type="text"]');
        expect(inputText).toHaveLength(1);

        //Should have submit button
        const submitBtn = addTask.find('[type="submit"]');
        expect(submitBtn).toHaveLength(1);
    });

});

/*describe("Testing add new note functionality", () => {

    it("Should add new note to the state having notes", () => {

    });
});*/