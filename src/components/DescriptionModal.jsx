// import { Transition } from "react-transition-group";
// import Button from "@mui/joy/Button";
// import Modal from "@mui/joy/Modal";
// import ModalDialog from "@mui/joy/ModalDialog";
// import DialogContent from "@mui/joy/DialogContent";
// import { useRef, useState } from "react";
// import { rseries } from "../utils";
// import { ModalClose } from "@mui/joy";

// const DescriptionModal = ({
//   title,
//   heroImg,
//   subtitle,
//   genre,
//   paragraphs,
//   signOff = "",
// }) => {
//   const [open, setOpen] = useState(false); // Modal state

//   return (
//     <>
//       <Button
//         sx={{ color: "white" }}
//         variant="outlined"
//         color="neutral"
//         onClick={() => setOpen(true)}
//       >
//         More Info
//       </Button>
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
//             sx={[
//               state === "exited"
//                 ? { visibility: "hidden" }
//                 : { visibility: "visible" },
//             ]}
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
//               <ModalClose variant="plain" sx={{ m: 1 }} className="z-50" />
//               <DialogContent>
//                 <section className="relative h-screen w-full bg-black flex">
//                   {/* Left side: Text Content */}
//                   <div className="w-1/2 p-10 text-white overflow-hidden flex flex-col justify-center space-y-6 z-10">
//                     <img
//                       height={500}
//                       width={1000}
//                       src={rseries}
//                       alt="R Series"
//                     />
//                     <div className="text-5xl flex font-extrabold gap-2">
//                       {title}
//                     </div>
//                     <div className="text-xl sm:text-2xl font-bold">
//                       {subtitle}
//                     </div>
//                     {/* <div className="text-med font-bold">{genre}</div> */}
//                     {paragraphs.map((paragraph, index) => (
//                       <p key={index} className="text-sm sm:text-sm">
//                         {paragraph}
//                       </p>
//                     ))}
//                     <p className="pt-0 text-white text-sm ">{signOff}</p>
//                   </div>

//                   {/* Right side: Image */}
//                   <div className="relative w-1/2">
//                     {/* Overlay gradient */}
//                     <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black z-10" />
//                     <img
//                       src={heroImg}
//                       alt="Project Hero"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </section>
//               </DialogContent>
//             </ModalDialog>
//           </Modal>
//         )}
//       </Transition>
//     </>
//   );
// };

// export default DescriptionModal;
import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogContent from "@mui/joy/DialogContent";
import { useState } from "react";
import { rseries } from "../utils";
import { ModalClose } from "@mui/joy";

const DescriptionModal = ({
  title,
  heroImg,
  subtitle,
  genre,
  paragraphs,
  signOff = "",
}) => {
  const [open, setOpen] = useState(false); // Modal state

  return (
    <>
      <Button
        sx={{ color: "white" }}
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        More Info
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
            sx={[
              state === "exited"
                ? { visibility: "hidden" }
                : { visibility: "visible" },
            ]}
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
              <ModalClose variant="plain" sx={{ m: 1 }} className="z-50" />
              <DialogContent>
                <section className="relative h-screen w-full bg-black flex">
                  {/* Left side: Text Content */}
                  <div className="w-1/2 p-10 text-white overflow-hidden flex flex-col justify-center space-y-6 z-10">
                    <img
                      height={500}
                      width={1000}
                      src={rseries}
                      alt="R Series"
                    />
                    <div className="text-5xl flex font-extrabold gap-2">
                      {title}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold">
                      {subtitle}
                    </div>
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-sm sm:text-sm">
                        {paragraph}
                      </p>
                    ))}
                    <p className="text-sm text-white">{signOff}</p>{" "}
                    {/* Negative margin to reduce space */}
                  </div>

                  {/* Right side: Image */}
                  <div className="relative w-1/2">
                    {/* Overlay gradient */}
                    <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black z-10" />
                    <img
                      src={heroImg}
                      alt="Project Hero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </section>
              </DialogContent>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
};

export default DescriptionModal;
