import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditTutorial = () => {
    return (
        <>
            import {"{"} useState {"}"} from 'react'; import Button from
            'react-bootstrap/Button'; import Modal from 'react-bootstrap/Modal'; function
            Example() {"{"}
            const [show, setShow] = useState(false); const handleClose = () =&gt;
            setShow(false); const handleShow = () =&gt; setShow(true); return ( &lt;&gt;
            <button variant="primary" onclick="{handleShow}">
                Launch demo modal
            </button>
            <modal show="{show}" onhide="{handleClose}">
                <Modal.header closebutton="">
                    <Modal.title>Modal heading</Modal.title>
                </Modal.header>
                <Modal.body>Woohoo, you are reading this text in a modal!</Modal.body>
                <Modal.footer>
                    <button variant="secondary" onclick="{handleClose}">
                        Close
                    </button>
                    <button variant="primary" onclick="{handleClose}">
                        Save Changes
                    </button>
                </Modal.footer>
            </modal>
            );
            {"}"}
            export default Example;
        </>

    )
}

export default EditTutorial