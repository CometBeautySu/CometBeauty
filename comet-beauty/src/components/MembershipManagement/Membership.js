// Assuming you have a BookModel class defined elsewhere

const Membership = (props) => {
    return (
        <tr className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
        </tr>
    );
}

export default Membership;
