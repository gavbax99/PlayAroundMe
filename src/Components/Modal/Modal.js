// React
import React, { Component } from "react";
import "./Modal.css";

// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actions";

class Modal extends Component {

	// Closes modal
	closeModal = () => {
		let newO = {
			show: false,
			name: this.props.storeModalButton.name,
			desc: this.props.storeModalButton.desc,
		}
		this.props.updateModal(newO);
	}

    render() {

		let dynamicClass = "modal-container";
		if (this.props.storeModalButton.show) {
			dynamicClass = "modal-container modal-display";
		}
		let dynamicModalBottom = "flex-full flex-col modal-bottom";
		if (this.props.storeModalButton.name === "How-To") {
			dynamicModalBottom = "flex-full flex-col modal-bottom modal-bottom-flex-start";
		}

		const dhtml = `${this.props.storeModalButton.desc}`;

        return (
			<div className={dynamicClass}>
				<div className="modal-anim" onClick={this.closeModal}>
				</div>

				<div className="flex-full flex-col modal">
					<div className="flex-full flex-row modal-top">
						<div className="modal-fill"></div>

						{/* Modal name */}
						<p>
							{this.props.storeModalButton.name}
						</p>

						{/* Close button */}
						<button className="modal-top-x-container" onClick={this.closeModal}>
							<img src="./assets/x.svg" className="modal-x" alt="Close the modal icon."/>
						</button>
					</div>
					<div className={dynamicModalBottom}>
						<div dangerouslySetInnerHTML={{__html: dhtml}} />
					</div>
				</div>
			</div>
        );
    };

};

// Redux
const mapStateToProps = state => ({
	storeModalButton: state.modalButton
});
const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Modal);