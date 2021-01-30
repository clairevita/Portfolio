import React from 'react';
function ModalBody() {
    return (
        <div>
            <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title"></h2>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <h5>Technical Contributions:</h5>
                                    <ul id="portfolioDescription">
                                    </ul>
                                    <hr></hr>
                                        <h5>Links:</h5>
                                        <ul id="portfolioLinks">
                                        </ul>
                                 </div>
                                    <div className="w-100"></div>
                                    <div className="col"><img id="portImage" style="width:100%"></img></div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default btn-lg btn-block"
                                        data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ModalBody
