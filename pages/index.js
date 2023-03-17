import { Layout } from "../components/Layout";
import { EmptyBoard } from "../components/Board";
import { CardTask } from "../components/Board/CardTask/CardTask";
import { BoardTable } from "../components/Board/BoardTable";
import HeaderAndDrawer from "../components/HeaderAndDrawer/HeaderAndDrawer";

const HomePage = () => {

    return (
        <Layout>
            <HeaderAndDrawer>
                {/* <EmptyBoard /> */}
                {/* <CardTask /> */}

                {/* <BoardTable /> */}
            </HeaderAndDrawer>
        </Layout>
    )
}

export default HomePage;