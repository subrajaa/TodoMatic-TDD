import React from "react";
import Enzyme, { render, shallow } from 'enzyme';
import { nanoid } from "nanoid";
import TaskDetails from "./TaskDetais";
import Adapter from 'enzyme-adapter-react-16';
import AllTasks from "./AllTasks";
import { fireEvent } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe("Should render all parts of a note", () => {

    it("Should have a checkbox to mark task as completed", () => {
        const checkInput = shallow(<TaskDetails />);
        expect(checkInput.exists('[type="checkbox"]')).toBe(true);

    });

    it("Should have a task name", () => {
        const checkName = shallow(<TaskDetails />);
        expect(checkName.exists(".todo-label")).toBe(true); //This checks if you have a class with name todo-label.
    });

    it("Should have an edit button", () => {
        const checkEditBtn = shallow(<TaskDetails />);
        expect(checkEditBtn.exists(".btn-edit")).toBe(true);
    });

    it("Should have a delete button", () => {
        const checkDeleteBtn = shallow(<TaskDetails />);
        expect(checkDeleteBtn.exists(".btn-delete")).toBe(true);
    });

});

describe("Functionality of each note", () => {

    it("Should be able to mark or unmark a task as completed", () => {
        let tasks = [
            { id: "" + nanoid(), name: "Eat good food", completed: true },
            { id: "" + nanoid(), name: "Sleep", completed: false },
            { id: "" + nanoid(), name: "Repeat", completed: false }
          ];
        const component = render(<AllTasks tasks={tasks}/>);
        let some = component.find('.task-mark');
        console.log(some[1].attribs.data);
        //*********console.log(component.find('.task-mark').data());
        
        //fireEvent.click(getByTestId.find('toggle'));
    })

})