import HeaderAndDrawer from "../../../components/HeaderAndDrawer/HeaderAndDrawer";

import { EmptyBoard } from "../../../components/Board";
import { CardTask } from "../../../components/Board/CardTask/CardTask";
import { BoardTable } from "../../../components/Board/BoardTable";
import { getAllUserBoards } from "../../../utils/api/boards";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../store/ThemeContext";

export default function (props) {

    console.log(props);

    const context = useContext(ThemeContext);

    useEffect(() => {
        context.setBoardsList(props.arrBoardsNames);
        context.setActiveBoardIndex(props.arrBoardsNames.findIndex((element) => element === props.userBoard));
    }, []);

    return (
        <HeaderAndDrawer>
            {/* <EmptyBoard /> */}
            {/* <CardTask /> */}

            {/* <BoardTable /> */}
        </HeaderAndDrawer>
    )
}

export async function getServerSideProps({ req, res, ...context }) {

    try {

        const allBoards = await getAllUserBoards(req, res);
        let arrBoardsNames = [];

        allBoards.forEach(element => {
            arrBoardsNames.push(element.name);
        });

        return {
            props: {
                arrBoardsNames,
                userBoard: context.query.userBoard
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