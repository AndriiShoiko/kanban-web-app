import { useEffect } from "react";
import { useRouter } from 'next/router';
import { getAllUserBoards } from "../utils/api/boards";
import { getUserData } from "../utils/api/users";
import { serverSideHandlerError } from "../utils/api";

const HomePage = ({ redirectRef }) => {

    const router = useRouter();

    useEffect(() => {
        router.push(redirectRef);
    }, []);

    //Only redirect
    return (<h4>Redirect...</h4>)
}

export async function getServerSideProps({ req, res }) {

    try {

        const responseUserData = await getUserData(req, res);
        const userRef = await responseUserData.userRef;

        const responseAllBoards = await getAllUserBoards(req, res);
        const boardName = await responseAllBoards[0].name;

        const redirectRef = `/${userRef}/${boardName}`;

        return {
            props: {
                redirectRef,
            }
        }

    } catch (error) {
        serverSideHandlerError(error, req, res);
    }

    return {
        props: {
        }
    }

}

export default HomePage;