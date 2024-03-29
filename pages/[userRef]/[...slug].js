import HeaderAndDrawer from "../../components/HeaderAndDrawer/HeaderAndDrawer";

import { EmptyBoard } from "../../components/Board";
import { CardTask } from "../../components/Board/CardTask/CardTask";
import { BoardTable } from "../../components/Board/BoardTable";
import { getAllUserBoards } from "../../utils/api/boards";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { serverSideHandlerError } from "../../utils/api";

export default function (props) {

    const context = useContext(ThemeContext);

    useEffect(() => {
        context.setBoardsList(props.arrBoardsNames);
        context.setActiveBoardIndex(props.arrBoardsNames.findIndex((element) => element.name === props.userBoard));
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
            arrBoardsNames.push({
                name: element.name,
                id: element._id,
                link: `/${context.query.userRef}/${element.name}`
            });
        });

        return {
            props: {
                arrBoardsNames,
                userBoard: context.query.slug[0]
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