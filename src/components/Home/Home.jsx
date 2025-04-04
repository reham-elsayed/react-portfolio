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
