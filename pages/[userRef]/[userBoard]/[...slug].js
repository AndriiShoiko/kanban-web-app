import { getCookies } from "cookies-next";
import HeaderAndDrawer from "../../../components/HeaderAndDrawer/HeaderAndDrawer";
import { $apiServer } from "../../../utils/api";

import { EmptyBoard } from "../../../components/Board";
import { CardTask } from "../../../components/Board/CardTask/CardTask";
import { BoardTable } from "../../../components/Board/BoardTable";

const HomePage = (props) => {

    return (
        <HeaderAndDrawer>
            {/* <EmptyBoard /> */}
            {/* <CardTask /> */}

            {/* <BoardTable /> */}
        </HeaderAndDrawer>
    )
}

export async function getServerSideProps({ req, res, ...context }) {

    console.log(context.query);

    const { accessToken } = getCookies({ req, res });

    try {

        const responce = await $apiServer.get("/boards", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        });

        return {
            props: {
                data: await responce.data,
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