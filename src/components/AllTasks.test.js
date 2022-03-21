import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { nanoid } from "nanoid";

import AllTasks from "./AllTasks";
import TaskDetails from "../components/TaskDetais";

Enzyme.configure({ adapter: new Adapter() });

describe("Basic rendering all tasks in TodoMatic", () => {

    it("Should show 3 tasks by default", () => {
        let DATA = [
            { id: "" + nanoid(), name: "Eat good food", completed: true },
            { id: "" + nanoid(), name: "Sleep", completed: false },
            { id: "" + nanoid(), name: "Repeat", completed: false }
          ]; //You have to pass parameters while calling the component
        const allTasks = shallow(<AllTasks tasks={DATA}/>);
        expect(allTasks.find(TaskDetails).length).toBeGreaterThanOrEqual(3);
    })

});