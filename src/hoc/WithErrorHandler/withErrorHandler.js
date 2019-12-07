import React, {Component} from "react";

import Modal from "../../components/Modal/Modal";
import FragHoc from "../FragHoc/FragHoc";

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        UNSAFE_componentWillMount() {
            this.reqinterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.respInterceptor = axios.interceptors.response.use(resp => resp, error => {
                this.setState({ error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqinterceptor);
            axios.interceptors.response.eject(this.respInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };
        
        render() {
            return (
                <FragHoc>
                    <Modal show={this.state.error !== null} modalClosed={this.errorConfirmedHandler}> 
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </FragHoc>
            );
        }
    }
};

export default WithErrorHandler;