import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { renamingSelector } from "../../redux/todoSelector";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(renamingSelector);
  // console.log({ todoList });

  // const searchText = useSelector(searchSelector);
  // console.log(searchText);

  const handleSelectPriority = (value) => {
    setPriority(value);
  };
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  const handleClickAdd = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
    setTodo("");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todo} onChange={handleOnChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleSelectPriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleClickAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
