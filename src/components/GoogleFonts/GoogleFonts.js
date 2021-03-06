import React, { useState } from 'react';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { NoteAdd } from '@material-ui/icons';
import DialogIconButton from '../sharedComponents/DialogIconButton/DialogIconButton';

export const GoogleFonts = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values) => {
    const fontLink = document.createElement('link');
    fontLink.setAttribute('href', values.fontHref);
    fontLink.setAttribute('rel', 'stylesheet');
    document.getElementById('htmlHead').appendChild(fontLink);
    handleClose();
  };

  return (
    <>
      <DialogIconButton title="Add Google Font" handleOpen={handleOpen} icon={<NoteAdd />} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Google Font HREF</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add Google Font go to: &nbsp;
            <a href="https://fonts.google.com/">Google Fonts</a>
            , select font, and paste HREF url here.
            Once added, you can use any of the font families.
          </DialogContentText>
          <Form onSubmit={onSubmit}>
            <MuiInput
              name="fontHref"
              placeholder="Google Font Link"
              fullWidth
            />
            <DialogActions>
              <MuiSubmit buttonText="Add Font" />
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GoogleFonts;
