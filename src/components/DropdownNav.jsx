import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

function DropdownNav() {
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button">
            Perawatan Hamster
        </Dropdown.Toggle>

        <DropdownMenu>
            <Dropdown.Item href="/perawatanhamster" id="dropdown-item">Perawatan Hamster</Dropdown.Item>
            <Dropdown.Item href="/makananhamster" id="dropdown-item">Makanan Hamster</Dropdown.Item>
        </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownNav;