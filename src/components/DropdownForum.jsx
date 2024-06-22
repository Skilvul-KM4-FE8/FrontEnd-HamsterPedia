import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

function DropdownNav() {
  return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button">
            Perawatan Hamster
        </Dropdown.Toggle>

        <DropdownMenu>
            <Dropdown.Item href="/forum" id="dropdown-item">Forum Umum</Dropdown.Item>
            <Dropdown.Item href="/forum-makanan" id="dropdown-item">Forum Makanan</Dropdown.Item>
            <Dropdown.Item href="/forum-makanan" id="dropdown-item">Forum Perawatan</Dropdown.Item>
        </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownNav;