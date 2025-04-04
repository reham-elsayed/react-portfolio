import React, { useRef, useState } from 'react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const showDialogq = () => setIsOpen(true);
  const closeDialogq = () => setIsOpen(false);
  const dialogRef = useRef(null);
  const showDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal(); // Use `showModal()` to open as a modal
    }
  };
  
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the dialog
    }
  };
  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8  text-3xl">
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className=" container mx-auto px-4  flex flex-col  items-center relative">
          <img className="w-1/4 mx-auto" src="src/assets/avataaars.svg" />
          <div> START FRAMEWORK</div>
          <div className="relative w-1/4 ">
            <span className="icon-decorator">
              <i className="fa fa-star"></i>
            </span>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div> */}
 <div>
      <button
        className="text-white bg-blue-500 px-4 py-2 rounded"
        onClick={showDialog}
      >
        Show Dialog
      </button>

      <dialog ref={dialogRef} className="rounded p-4 shadow-lg">
        <p>This is a dialog box!</p>
        <button
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          onClick={closeDialog}
        >
          Close
        </button>
      </dialog>
    </div>

    <div>
      <button
        className="text-white bg-blue-500 px-4 py-2 rounded"
        onClick={showDialogq}
      >
        Show Dialog
      </button>

      {isOpen && (
        <dialog open className="rounded p-4 shadow-lg">
          <p>This is a dialog box!</p>
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            onClick={closeDialogq}
          >
            Close
          </button>
        </dialog>
      )}
    </div>
    </div>
    </>
  );
}
