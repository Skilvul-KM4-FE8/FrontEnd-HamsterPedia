import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

function DropdownNav() {
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button">
            Perawatan Hamster
        </Dropdown.Toggle>

        <DropdownMenu>
            <Dropdown.Item href="/perawatanhamster" id="dropdown-item" target="_blank">Perawatan Hamster</Dropdown.Item>
            <Dropdown.Item href="/makananhamster" id="dropdown-item" target="_blank">Makanan Hamster</Dropdown.Item>
        </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownNav;