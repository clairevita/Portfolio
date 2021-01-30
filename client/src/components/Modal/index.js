import React from 'react';
import './Modal.css';
import { Modal, } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function CustomModal() {
    return (
        // <div>
        //     <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
        //         aria-hidden="true">
        //         <div className="modal-dialog modal-xl">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h2 className="modal-title"></h2>
        //                 </div>
        //                 <div className="modal-body">
        //                     <div className="row">
        //                         <div className="col">
        //                             <h5>Technical Contributions:</h5>
        //                             <ul id="portfolioDescription">
        //                             </ul>
        //                             <hr></hr>
        //                                 <h5>Links:</h5>
        //                                 <ul id="portfolioLinks">
        //                                 </ul>
        //                          </div>
        //                             <div className="w-100"></div>
        //                             <div className="col"><img id="portImage"></img></div>
        //                             </div>
        //                         </div>
        //                         <div className="modal-footer">
        //                             <button type="button" className="btn btn-default btn-lg btn-block"
        //                                 data-dismiss="modal">Close</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        <Modal>

        </Modal>
    )
}

export default CustomModal;
