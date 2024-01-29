import React from "react";

const OnLoadPopup = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
  
    useEffect(() => {
      // Open the modal after 20 seconds
      const timeoutId = setTimeout(() => {
        setShowModal(true);
      }, 10000); // 20 seconds in milliseconds
  
      // Clear the timeout if the component unmounts
      return () => clearTimeout(timeoutId);
    }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>My Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is the content of the modal.</p>
      </Modal.Body>
      <Modal.Footer>
            foter
      </Modal.Footer>
    </Modal>
  );
};

export default OnLoadPopup;
