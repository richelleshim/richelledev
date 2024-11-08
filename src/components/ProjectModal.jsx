import { Transition } from "react-transition-group";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogContent from "@mui/joy/DialogContent";
import { useState, useEffect } from "react";
import { ModalClose } from "@mui/joy";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const ProjectModal = ({
  children,
  title,
  heroImg,
  subtitle,
  genre,
  paragraphs,
}) => {
  const [open, setOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    setIsFlashing(true);
    const initialFlashTimeout = setTimeout(() => setIsFlashing(false), 4800);

    const interval = setInterval(() => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 5000);
    }, 60000);

    return () => {
      clearTimeout(initialFlashTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`cursor-pointer  ${isFlashing ? "flash" : ""} hover:text-red-600`}
      >
        <h1 className="text-sm">
          Learn More!
          <KeyboardDoubleArrowRightIcon
            className={`transition-opacity duration-300`}
            fontSize="small"
          />
        </h1>
      </div>

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
              <DialogContent>{children}</DialogContent>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
};

export default ProjectModal;

// const ProjectModal = ({
//   children,
//   title,
//   heroImg,
//   subtitle,
//   genre,
//   paragraphs,
// }) => {
//   const [open, setOpen] = useState(false); // Modal state
//   const videoRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isFlashing, setIsFlashing] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFlashing(true);
//       setTimeout(() => setIsFlashing(false), 1800);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* <div
//         onClick={() => setOpen(true)}
//         className="cursor-pointer  hover:text-red-600"
//       > */}
//       <div
//         onClick={() => setOpen(true)}
//         className="{`learn-more ${isFlashing ? 'flash' : ''}`} cursor-pointer hover:animate-flash  hover:text-red-600"
//       >
//         <h1 className="text-sm">Learn More!</h1>
//       </div>

//       {/* <Button
//         // sx={{ color: "white" }}
//         variant="plain"
//         color="neutral"
//         onClick={() => setOpen(true)}
//       >
//         Learn More!
//       </Button> */}
//       <Transition in={open} timeout={400}>
//         {(state) => (
//           <Modal
//             keepMounted
//             open={!["exited", "exiting"].includes(state)}
//             onClose={() => setOpen(false)}
//             slotProps={{
//               backdrop: {
//                 sx: {
//                   opacity: 0,
//                   backdropFilter: "none",
//                   transition: `opacity 400ms, backdrop-filter 400ms`,
//                   ...{
//                     entering: { opacity: 1, backdropFilter: "blur(8px)" },
//                     entered: { opacity: 1, backdropFilter: "blur(8px)" },
//                   }[state],
//                 },
//               },
//             }}
//             sx={
//               ({ bgcolor: "#000000", border: "#000000" },
//               [
//                 state === "exited"
//                   ? { visibility: "hidden" }
//                   : { visibility: "visible" },
//               ])
//             }
//           >
//             <ModalDialog
//               sx={{
//                 opacity: 0,
//                 transition: `opacity 300ms`,
//                 ...{
//                   entering: { opacity: 1 },
//                   entered: { opacity: 1 },
//                 }[state],

//                 bgcolor: "#000000",
//                 border: "#000000",
//                 boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.5)",
//               }}
//               className="relative h-[90%] w-[90%] bg-black flex"
//             >
//               <ModalClose variant="primary" sx={{ m: 1 }} className="z-50" />
//               <DialogContent>
//                 {/* <ProjectDescription
//                   title=""
//                   titleImg={bruingramTitleImg}
//                   heroImg={bruinGramHeroImg}
//                   subtitle="Bruingram"
//                   titleImgWidth="300px"
//                   titleImgHeight="70px"
//                   genre="2024 | Design + Web Dev"
//                   paragraphs={[
//                     "Working in a team of 6, we created an application with the inspiration of Hinge, Instagram, and Facebook. We thought that it would be cool to create a social media application specific for Bruins, where users could filter out other users based on Major and Year to make friends, seek out career advice, and find roommates!        ",
//                   ]}
//                   technologies="React, MaterialUI, Firebase, Git"
//                   directors="Elizabeth, Yousra, Chai, Jennifer, Daniel, Richelle"
//                   isDirectors={true}
//                   heroVideo={bruinGramVid}
//                 /> */}
//                 {children}
//               </DialogContent>
//             </ModalDialog>
//           </Modal>
//         )}
//       </Transition>
//     </>
//   );
// };

// export default ProjectModal;
