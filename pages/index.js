import { Layout } from "../components/Layout";
import { EmptyBoard } from "../components/Board";
import { CardTask } from "../components/Board/CardTask/CardTask";
import { BoardTable } from "../components/Board/BoardTable";

const HomePage = () => {

    return (
        <Layout>
            {/* <EmptyBoard /> */}
            {/* <CardTask /> */}
            <BoardTable />
        </Layout>
    )
}

export default HomePage;