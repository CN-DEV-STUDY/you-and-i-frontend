import { Button, Modal, ModalDialog, ModalDialogProps } from "@mui/joy";
import { List, ListItem } from "@mui/material";
import styled from "styled-components";
import Title from "./ui/Title";

type MuiModal = {
  layout: ModalDialogProps["layout"] | undefined;
  setLayout: (layout: "center" | "fullscreen" | undefined) => void;
};
const MuiModal = ({ layout, setLayout }: MuiModal) => {
  return (
    <Modal
      open={!!layout}
      onClose={() => {
        setLayout(undefined);
      }}
    >
      <ModalDialog
        aria-labelledby="dialog-vertical-scroll-title"
        layout={layout}
      >
        <ModalHeader>
          <Button
            onClick={() => setLayout(undefined)}
            variant="plain"
            sx={{ color: "var(--color__text)" }}
          >
            취소
          </Button>
          <Title type="secondary" content="New Story" color="black" />
        </ModalHeader>
        <List
          sx={{
            overflow: "scroll",
            mx: "calc(-1 * var(--ModalDialog-padding))",
            px: "var(--ModalDialog-padding)",
          }}
        >
          {[...Array(100)].map((item, index) => (
            <ListItem key={index}>I&apos;m in a scrollable area.</ListItem>
          ))}
        </List>
      </ModalDialog>
    </Modal>
  );
};

export default MuiModal;

const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  h2 {
    justify-self: center;
  }

  .MuiModalClose-root {
    left: 0;
  }
`;
