import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogContent from "@mui/joy/DialogContent";
import { useRef, useState } from "react";
import {
  bruinGramHeroImg,
  bruinGramVid,
  bruingramTitleImg,
  rseries,
} from "../utils";
import { ModalClose } from "@mui/joy";
import ProjectDescription from "./ProjectDescription";

const ProjectModal = ({
  children,
  title,
  heroImg,
  subtitle,
  genre,
  paragraphs,
}) => {
  const [open, setOpen] = useState(false); // Modal state
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Button
        // sx={{ color: "white" }}
        variant="plain"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        Learn More!
      </Button>
      <Transition in={open} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            open={!["exited", "exiting"].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: "none",
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: "blur(8px)" },
                    entered: { opacity: 1, backdropFilter: "blur(8px)" },
                  }[state],
                },
              },
            }}
            sx={
              ({ bgcolor: "#000000", border: "#000000" },
              [
                state === "exited"
                  ? { visibility: "hidden" }
                  : { visibility: "visible" },
              ])
            }
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],

                bgcolor: "#000000",
                border: "#000000",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
              }}
              className="relative h-[90%] w-[90%] bg-black flex"
            >
              <ModalClose variant="primary" sx={{ m: 1 }} className="z-50" />
              <DialogContent>
                {/* <ProjectDescription
                  title=""
                  titleImg={bruingramTitleImg}
                  heroImg={bruinGramHeroImg}
                  subtitle="Bruingram"
                  titleImgWidth="300px"
                  titleImgHeight="70px"
                  genre="2024 | Design + Web Dev"
                  paragraphs={[
                    "Working in a team of 6, we created an application with the inspiration of Hinge, Instagram, and Facebook. We thought that it would be cool to create a social media application specific for Bruins, where users could filter out other users based on Major and Year to make friends, seek out career advice, and find roommates!        ",
                  ]}
                  technologies="React, MaterialUI, Firebase, Git"
                  directors="Elizabeth, Yousra, Chai, Jennifer, Daniel, Richelle"
                  isDirectors={true}
                  heroVideo={bruinGramVid}
                /> */}
                {children}
              </DialogContent>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
};

export default ProjectModal;
