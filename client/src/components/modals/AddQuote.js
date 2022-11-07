import React from "react";
import { useState } from "react";
import { Modal, Button, Group, TextInput, Box } from "@mantine/core";

const AddQuote = () => {
  const [opened, setOpened] = useState(false);
  const [userInput, setUserInput] = useState({
    content: "",
    author: "",
    tags: "",
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add a new Quote"
      >
        <Box sx={{ minWidth: 340 }} mx="auto">
          <form>
            <TextInput
              withAsterisk
              label="Content"
              placeholder="Enter the Content of the Quote"
              value={userInput.content}
              onChange={(event) =>
                setUserInput((prev) => ({
                  ...prev,
                  content: event.target.value,
                }))
              }
              required
            />
            <TextInput
              withAsterisk
              label="Author"
              placeholder="Enter the Author of the Quote"
              value={userInput.author}
              onChange={(event) =>
                setUserInput((prev) => ({
                  ...prev,
                  author: event.target.value,
                }))
              }
              required
            />
            <TextInput
              withAsterisk
              label="Tags"
              placeholder="Enter the Tags of the Quote"
              value={userInput.tags}
              onChange={(event) =>
                setUserInput((prev) => ({
                  ...prev,
                  tags: event.target.value,
                }))
              }
              required
            />
            <Group
              position="right"
              mt="xl"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                uppercase
                color="teal"
                radius="md"
                style={{ width: "10rem", letterSpacing: "0.07rem" }}
              >
                add quote
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>

      <Group position="center">
        <Button
          onClick={() => setOpened(true)}
          uppercase
          color="teal"
          radius="md"
          style={{ width: "12rem", letterSpacing: "0.07rem" }}
        >
          Add new quote
        </Button>
      </Group>
    </>
  );
};

export default AddQuote;
