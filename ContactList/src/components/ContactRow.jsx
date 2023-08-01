export default function ContactRow({ setSelectedContactId, contact }) {
    if (!contact) {
      contact = {};
    }

    return (
      <tr className="contactInfos"
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

