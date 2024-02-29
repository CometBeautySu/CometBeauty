import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../utils/SpinnerLoading";
import Membership from "./Membership";
import { Button } from "../Button";
import styled from "styled-components";


const MembershipSection = styled.div`
    padding: 2rem;
    background: #fff;
`

const MembershipContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
`

const MembershipWrapper = styled.div`
    margin: 50px;
    width: 90%;

    h3 {
        font-family: "Courier New", "Courier New", monospace;

        text-align: center;
        margin: 2rem;
        font-size: clamp(1rem, 3vw, 3rem);
    }
`

const MembershipTable = styled.table`
    width: 90%;
    margin: auto; /* 居中 */
    border: 1px solid;
    border-collapse: collapse;

    th, td {
        border: 1px solid;
        text-align: center;
        padding: 8px;
    }

    tr {
        &:hover {
            transform: translateY(-2px);
            background: lightgray;
        }
    }

    th {
        background-color: #1B4242; /* Optional: Add background color for header cells */
    }

    td:first-child {
        width: 10%; /* Adjust the width for the ID column */
    }

    td:nth-child(2),
    td:nth-child(3) {
        width: 20%;
    }
    td:nth-child(4) {
        width: 25%; /* Adjust the width for the First Name and Last Name columns */
    }

    td:nth-child(5) {
        width: 15%; /* Adjust the width for the Email and Actions columns */
    }
`

const StyledButton = styled(Button)`
    margin: auto; /* 居中 */
    min-width: 60px;
    max-width: 120px;
    padding: 8px 12px;
    font-size: 15px;
`

const HeaderContainer = styled.div`
    width: 90%;
    margin: auto; /* 居中 */
    display: flex;
    justify-content: space-between;
`

const SearchBar = styled.input`
    width: 90%;
    padding: 8px;
    margin-bottom: 10px;
`

const AddButton = styled(Button)`
    max-width: 220px;
    padding: 8px 30px;
    font-size: 15px;
    margin-left: 25px;
    margin-bottom: 10px;
`

const Memberships = () => {
    const [memberships, setMemberships] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    
    useEffect(() => {
        const fetchMemberships = async () => {
            const baseUrl = "http://localhost:8080/api/memberships";
            // const url = `${baseUrl}?page=0&size=9`;
    
            try {
                const response = await fetch(baseUrl);
    
                if (!response.ok) {
                    throw new Error("Something wrong");
                }
    
                const responseJson = await response.json();
                const responseData = responseJson._embedded.memberships;
                const loadedMemberships = [];
    
                for (const key in responseData) {
                    loadedMemberships.push({
                        id: responseData[key].id,
                        firstName: responseData[key].firstName,
                        lastName: responseData[key].lastName,
                        email: responseData[key].email,
                    });
                }
    
                setMemberships(loadedMemberships);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setHttpError(error.message);
            }
        };
    
        fetchMemberships();
    }, []);

    console.log(memberships);
    
    if (isLoading) {
        return (
            <SpinnerLoading />
        );
    }
    
    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }    

    return (
        <MembershipSection>
            <MembershipContainer>
                <MembershipWrapper>
                    <h3>Comet Beauty Membership Management</h3>
                    <HeaderContainer>
                        <SearchBar type="text" placeholder="Search..."/>
                        <AddButton>Add Member</AddButton>
                    </HeaderContainer>
                    {memberships.length > 0 ? (
                        <MembershipTable>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {memberships.map((membership) => (
                                    <tr key={membership.id}>
                                        <td>{membership.id}</td>
                                        <td>{membership.firstName}</td>
                                        <td>{membership.lastName}</td>
                                        <td>{membership.email}</td>
                                        <td>
                                            <StyledButton >View</StyledButton>
                                        </td>                                    
                                    </tr>
                                ))}
                            </tbody>
                        </MembershipTable>
                    ) : (
                        <p>No memberships available.</p>
                    )}
                    
                </MembershipWrapper>
            </MembershipContainer>
        </MembershipSection>
      );
}

export default Memberships;