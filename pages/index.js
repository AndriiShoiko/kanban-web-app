import { getAllUserBoards } from "../utils/api/boards";
import { getUserData } from "../utils/api/users";

const HomePage = (props) => {

    //Only redirect
    return (<></>)
}

export async function getServerSideProps({ req, res }) {

    try {

        const responseUserData = await getUserData(req, res);
        const userRef = await responseUserData.userRef;

        const responseAllBoards = await getAllUserBoards(req, res);
        const boardName = await responseAllBoards[0].name;

        const redirectRef = `/${userRef}/${boardName}`;

        res.writeHead(307, { Location: redirectRef });
        res.end();

        return {
            props: {
                data: { redirectRef },
            }
        }

    } catch (error) {

        console.error(error.message);

        if (error.response.status === 401) {
            res.writeHead(307, { Location: '/login' });
            res.end();
        }

        return {
            props: {
                data: {},
            }
        }

    }

}

export default HomePage;