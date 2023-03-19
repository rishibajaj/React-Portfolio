import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './modal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid gray',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

const SubmitModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className="submitButton" variant="contained" onClick={handleOpen}>Submit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h5 id="modal-modal-title">
                        Thank you for your message
                    </h5>
                    <p id="modal-modal-description">
                        I'll be in touch soon!
                    </p>
                </Box>
            </Modal>
        </div>
    );
};

export default SubmitModal;