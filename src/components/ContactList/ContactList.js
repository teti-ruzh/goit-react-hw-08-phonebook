import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts &&
        contacts.map(contact => <ContactItem key={contact.id} {...contact} />)}
    </ul>
  );
};

export default ContactList;
