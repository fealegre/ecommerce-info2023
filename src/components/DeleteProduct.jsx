import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteProduct() {
    const { id } = useParams();

    const deleteProduct = async () => {
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`);
            console.log(`Product: ${id} deleted OK`);
        }

        catch (error) {
            console.error(error);
        }
    }


    return (

        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>¿Confirma eliminacion del producto?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={deleteProduct}>Eliminar</Button>
                    <Button variant="primary">Cancelar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
