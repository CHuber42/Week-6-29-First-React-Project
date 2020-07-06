import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()})
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='title'
          placehold='Pair Names' />
        <input
          type='text'
          name='location'
          placehold='Location' />
        <textarea
          name='event'
          placeholder='Describe the event.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  )
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketForm;